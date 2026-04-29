<template>
  <div class="fixed inset-0 bg-[var(--color-marble)] z-[10000] flex flex-col items-center justify-center overflow-hidden">
    <!-- Animated SVG Logo -->
    <div ref="logoContainer" class="relative mb-8">
      <svg width="200" height="200" viewBox="0 0 100 100" class="overflow-visible">
        <path 
          id="logo-path"
          d="M50 20 C30 20, 20 40, 20 60 C20 80, 50 90, 50 90 C50 90, 80 80, 80 60 C80 40, 70 20, 50 20"
          fill="none" 
          stroke="var(--color-gold)" 
          stroke-width="0.5"
          ref="path"
        />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center">
        <h2 class="text-4xl font-serif magic-text opacity-0" ref="text">S</h2>
      </div>
    </div>

    <!-- Progress Bar -->
    <div class="w-64 h-[1px] bg-gray-200 relative overflow-hidden">
      <div 
        ref="progress"
        class="absolute top-0 left-0 h-full bg-[var(--color-gold)] w-0"
      ></div>
    </div>
    <p class="mt-4 text-[var(--color-gold-dark)] text-xs tracking-[0.3em] uppercase opacity-50">Preparing the Feast</p>
  </div>
</template>

<script setup>
import gsap from 'gsap'

const emit = defineEmits(['loaded'])
const path = ref(null)
const text = ref(null)
const progress = ref(null)
const logoContainer = ref(null)
const preloaderOverlay = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    onComplete: () => {
      emit('loaded')
    }
  })

  // Initial state for SVG path
  gsap.set(path.value, {
    strokeDasharray: 400,
    strokeDashoffset: 400
  })

  // Draw the path
  tl.to(path.value, {
    strokeDashoffset: 0,
    duration: 2.5,
    ease: 'power3.inOut'
  })

  // Fade in text
  tl.to(text.value, {
    opacity: 1,
    scale: 1.5,
    duration: 1,
    ease: 'back.out(2)'
  }, '-=1')

  // Progress animation
  gsap.to(progress.value, {
    width: '100%',
    duration: 3,
    ease: 'power2.inOut'
  })

  // Final exit animation
  tl.to(logoContainer.value, {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: 'power4.in'
  }, '+=0.5')
  
  tl.to('.preloader-main', {
    yPercent: -100,
    duration: 1.2,
    ease: 'expo.inOut'
  })
})
</script>
