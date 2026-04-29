<template>
  <div class="app-container bg-[var(--color-emerald-dark)]">
    <Preloader v-if="isLoading" @loaded="finishLoading" />
    
    <!-- Clean Fullscreen Menu Panel -->
    <Transition name="menu-fade">
      <div v-show="isMenuOpen" class="fixed inset-0 z-[100] bg-[var(--color-emerald)] flex flex-col items-center justify-center pointer-events-auto overflow-hidden">
        <!-- Luxury Background Texture -->
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-emerald-dark)] to-transparent opacity-80 pointer-events-none"></div>
        
        <!-- Navigation Links -->
        <nav class="relative z-10 flex flex-col items-center gap-12 text-center">
          <div class="overflow-hidden">
            <a href="#" @click.prevent="isMenuOpen = false" class="block text-6xl md:text-8xl font-serif text-[var(--color-marble)] hover:text-[var(--color-gold)] transition-all duration-700 transform hover:scale-105 hover:tracking-widest cursor-pointer">Our Story</a>
          </div>
          <div class="overflow-hidden">
            <a href="#" @click.prevent="isMenuOpen = false" class="block text-6xl md:text-8xl font-serif text-[var(--color-marble)] hover:text-[var(--color-gold)] transition-all duration-700 transform hover:scale-105 hover:tracking-widest cursor-pointer">The Vault</a>
          </div>
          <div class="overflow-hidden mt-12">
            <a href="#" @click.prevent="isMenuOpen = false" class="inline-block border border-[var(--color-gold)] px-14 py-5 rounded-full text-2xl font-serif text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-emerald-dark)] transition-all duration-700 cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]">Book an Audience</a>
          </div>
        </nav>

        <!-- Ornate Accents -->
        <div class="absolute bottom-12 text-[var(--color-gold)]/50 text-xs tracking-[0.5em] uppercase font-serif">
          Crafted for the Royal Appetite
        </div>
      </div>
    </Transition>

    <div v-show="!isLoading" id="scroll-wrapper" ref="scrollWrapper" :class="{'scale-[0.95] blur-md pointer-events-none opacity-40': isMenuOpen}" class="transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] origin-center bg-[var(--color-marble)] min-h-screen">
      <MagicCursor />
      <AudioManager />
      
      <!-- Fixed Header with Burger -->
      <header class="fixed top-0 left-0 w-full px-10 py-8 z-[110] flex justify-between items-center pointer-events-none">
        <div class="pointer-events-auto mix-blend-difference">
          <h1 class="text-3xl font-serif text-[var(--color-gold)] tracking-widest uppercase">Soléste</h1>
        </div>
        
        <!-- Burger Button -->
        <div class="pointer-events-auto">
          <MagneticButton>
            <button @click="isMenuOpen = !isMenuOpen" class="w-16 h-16 rounded-full border border-[var(--color-gold)]/30 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center gap-[6px] relative transition-all duration-500 hover:bg-[var(--color-gold)]/20 hover:border-[var(--color-gold)] group z-[120]">
              <span class="w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out origin-center" :class="{'rotate-45 translate-y-[8px]': isMenuOpen}"></span>
              <span class="w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out" :class="{'opacity-0 translate-x-4': isMenuOpen}"></span>
              <span class="w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out origin-center" :class="{'-rotate-45 -translate-y-[8px]': isMenuOpen}"></span>
            </button>
          </MagneticButton>
        </div>
      </header>

      <main>
        <NuxtPage />
      </main>

      <footer class="p-32 bg-[var(--color-emerald)] text-white text-center border-t border-[var(--color-gold)]/20 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
        <h2 class="text-7xl mb-8 text-[var(--color-gold)] font-serif relative z-10">Soléste</h2>
        <p class="font-serif italic opacity-70 tracking-[0.4em] text-sm uppercase relative z-10">Crafted for the Royal Appetite</p>
      </footer>
    </div>
  </div>
</template>

<script setup>
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isLoading = ref(true)
const isMenuOpen = ref(false)
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

// Prevent scrolling when menu is open
watch(isMenuOpen, (isOpen) => {
  if (isOpen) {
    if (lenis) lenis.stop()
  } else {
    if (lenis) lenis.start()
  }
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

/* Menu Transitions */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.7, 0, 0.3, 1);
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  clip-path: circle(0% at 100% 0);
}
.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
  clip-path: circle(150% at 100% 0);
}
</style>
