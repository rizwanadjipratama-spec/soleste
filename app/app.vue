<template>
  <div class="app-container">
    <Preloader v-if="isLoading" @loaded="finishLoading" />
    
    <div v-show="!isLoading" id="scroll-wrapper" ref="scrollWrapper">
      <MagicCursor />
      <AudioManager />
      <header class="fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none">
        <div class="pointer-events-auto">
          <h1 class="text-2xl font-serif magic-text">Soléste</h1>
        </div>
        <nav class="flex gap-8 pointer-events-auto">
          <MagneticButton>
            <a href="#" class="btn-royal py-2 px-6 text-sm">Our Story</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#" class="btn-royal py-2 px-6 text-sm">The Vault</a>
          </MagneticButton>
          <MagneticButton>
            <a href="#" class="btn-royal py-2 px-6 text-sm bg-[var(--color-gold)] text-white">Book an Audience</a>
          </MagneticButton>
        </nav>
      </header>

      <main>
        <NuxtPage />
      </main>

      <footer class="p-20 bg-[var(--color-emerald)] text-white text-center">
        <h2 class="text-4xl mb-8 text-[var(--color-gold)]">Soléste</h2>
        <p class="font-serif italic opacity-70">Crafted for the Royal Appetite</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLoading = ref(true)
const scrollWrapper = ref(null)
let lenis = null

// SEO & Metadata
useSeoMeta({
  title: 'Soléste | The Royal Cake Atelier',
  ogTitle: 'Soléste | Food for Kings & Queens',
  description: 'Experience the magic of Soléste, where every cake is a royal masterpiece handcrafted for the most refined palates.',
  ogDescription: 'Experience the magic of Soléste, where every cake is a royal masterpiece handcrafted for the most refined palates.',
  ogImage: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200',
  twitterCard: 'summary_large_image',
})

function finishLoading() {
  isLoading.value = false
  nextTick(() => {
    initSmoothScroll()
    animateEntrance()
  })
}

function initSmoothScroll() {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
}

function animateEntrance() {
  gsap.from('header', {
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out',
    delay: 0.5
  })
}

onMounted(() => {
  // Global plugins
  gsap.registerPlugin(ScrollTrigger)
  
  // For demo purposes, auto-finish loading after 2s
  setTimeout(() => {
    finishLoading()
  }, 2000)
})

onUnmounted(() => {
  if (lenis) lenis.destroy()
})
</script>

<style>
/* Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.6s cubic-bezier(0.7, 0, 0.3, 1);
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
