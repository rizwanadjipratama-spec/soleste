<template>
  <div class="app-container bg-[var(--color-emerald-dark)]">
    <Transition name="fade-preloader">
      <Preloader v-if="isLoading" @reveal="startReveal" @loaded="finishLoading" />
    </Transition>
    
    <div>
      <MagicCursor />
      <AudioManager />
      
      <!-- Fixed Header with Burger (Now outside scroll-wrapper) -->
      <header class="fixed top-0 left-0 w-full px-6 md:px-10 py-6 md:py-8 z-[110] flex justify-between items-center pointer-events-none transition-opacity duration-700">
        <div class="pointer-events-auto mix-blend-difference">
          <MagneticButton>
            <h1 class="text-2xl md:text-3xl font-serif text-[var(--color-gold)] tracking-widest uppercase relative z-[120] cursor-pointer px-4 py-2">Soléste</h1>
          </MagneticButton>
        </div>
        
        <!-- Burger Button (The X) -->
        <div class="pointer-events-auto">
          <MagneticButton>
            <button @click="isMenuOpen = !isMenuOpen" class="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[var(--color-gold)]/30 backdrop-blur-md bg-white/5 flex flex-col items-center justify-center gap-[6px] relative transition-all duration-500 hover:bg-[var(--color-gold)]/20 hover:border-[var(--color-gold)] group z-[120] mix-blend-difference">
              <span class="w-7 md:w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out origin-center" :class="{'rotate-45 translate-y-[8px]': isMenuOpen}"></span>
              <span class="w-7 md:w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out" :class="{'opacity-0 translate-x-4': isMenuOpen}"></span>
              <span class="w-7 md:w-8 h-[2px] bg-[var(--color-gold)] transition-all duration-500 ease-in-out origin-center" :class="{'-rotate-45 -translate-y-[8px]': isMenuOpen}"></span>
            </button>
          </MagneticButton>
        </div>
      </header>

      <!-- Clean Fullscreen Menu Panel -->
      <Transition name="menu-fade">
        <div v-show="isMenuOpen" class="fixed inset-0 z-[100] bg-[var(--color-emerald)] flex flex-col items-center justify-center pointer-events-auto overflow-hidden">
          <!-- Luxury Background Texture -->
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-emerald-dark)] to-transparent opacity-80 pointer-events-none"></div>
          
          <!-- Navigation Links -->
          <nav class="relative z-10 flex flex-col items-center gap-12 text-center mt-8 w-full px-8">
            <div class="py-2">
              <a @click="handleNav('#story')" class="block text-4xl md:text-8xl font-serif text-[var(--color-marble)] hover:text-[var(--color-gold)] transition-all duration-700 transform hover:scale-105 hover:tracking-widest cursor-pointer">Our Story</a>
            </div>
            <div class="py-2">
              <a @click="handleNav('#vault')" class="block text-4xl md:text-8xl font-serif text-[var(--color-marble)] hover:text-[var(--color-gold)] transition-all duration-700 transform hover:scale-105 hover:tracking-widest cursor-pointer">The Vault</a>
            </div>
            <div class="py-2">
              <a @click="handleNav('#selection')" class="block text-4xl md:text-8xl font-serif text-[var(--color-marble)] hover:text-[var(--color-gold)] transition-all duration-700 transform hover:scale-105 hover:tracking-widest cursor-pointer">Collection</a>
            </div>
            <div class="mt-12 py-2">
              <a @click="handleNav('#booking')" class="inline-block border border-[var(--color-gold)] px-10 md:px-14 py-5 rounded-full text-lg md:text-2xl font-serif text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-[var(--color-emerald-dark)] transition-all duration-700 cursor-pointer shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)]">Book an Audience</a>
            </div>
          </nav>

          <!-- Ornate Accents -->
          <div class="absolute bottom-12 text-[var(--color-gold)]/50 text-xs tracking-[0.5em] uppercase font-serif">
            Crafted for the Royal Appetite
          </div>
        </div>
      </Transition>

      <div id="scroll-wrapper" ref="scrollWrapper" :class="{'scale-[0.95] blur-md pointer-events-none opacity-40': isMenuOpen}" class="transition-all duration-[800ms] ease-[cubic-bezier(0.7,0,0.3,1)] origin-center bg-[var(--color-marble)] min-h-screen">
        <main>
          <NuxtPage />
        </main>

        <footer class="px-6 py-24 md:p-32 bg-[var(--color-emerald)] text-white text-center border-t border-[var(--color-gold)]/20 relative overflow-hidden flex flex-col items-center justify-center">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000')] bg-cover bg-center opacity-5 mix-blend-overlay pointer-events-none"></div>
          <h2 class="text-5xl md:text-7xl mb-8 text-[var(--color-gold)] font-serif relative z-10 w-full text-center">Soléste</h2>
          <p class="font-serif italic opacity-70 tracking-[0.4em] text-xs md:text-sm uppercase relative z-10 w-full text-center">Crafted for the Royal Appetite</p>
        </footer>
      </div>
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

function startReveal() {
  window.scrollTo(0, 0)
  nextTick(() => {
    initSmoothScroll()
    animateEntrance()
    
    // Multiple refreshes to catch any layout shifts during loading
    ScrollTrigger.refresh()
    setTimeout(() => ScrollTrigger.refresh(), 500)
    setTimeout(() => ScrollTrigger.refresh(), 1500)
    setTimeout(() => ScrollTrigger.refresh(), 3000)
  })
}

onMounted(() => {
  window.scrollTo(0, 0)
})

function handleNav(id) {
  isMenuOpen.value = false
  if (lenis) {
    // Delay slightly to allow menu close animation to start
    setTimeout(() => {
      lenis.scrollTo(id, {
        duration: 2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    }, 400)
  }
}

function finishLoading() {
  isLoading.value = false
}

function initSmoothScroll() {
  gsap.registerPlugin(ScrollTrigger)
  
  lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  })

  // Synchronize ScrollTrigger with Lenis
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
/* Clean Image Reveal Logic */
.img-reveal {
  opacity: 0;
  transition: opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.img-reveal.loaded {
  opacity: 1;
}
.fade-preloader-leave-active {
  transition: opacity 1.5s cubic-bezier(0.7, 0, 0.3, 1), transform 1.5s cubic-bezier(0.7, 0, 0.3, 1);
}
.fade-preloader-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
</style>
