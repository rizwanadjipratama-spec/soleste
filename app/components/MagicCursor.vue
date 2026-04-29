<template>
  <div 
    ref="cursorMain"
    class="magic-cursor-main fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--color-gold)] pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
  >
    <div 
      class="absolute inset-0 bg-[var(--color-gold)] scale-0 rounded-full opacity-50 transition-transform duration-300" 
      :class="{ 'scale-100': isHovering }"
    ></div>
    <div class="w-1 h-1 bg-[var(--color-gold)] rounded-full"></div>
  </div>
  
  <div 
    ref="cursorFollower"
    class="magic-cursor-follower fixed top-0 left-0 w-2 h-2 bg-[var(--color-gold)] rounded-full pointer-events-none z-[9998] blur-[1px] shadow-[0_0_10px_var(--color-gold)]"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorMain = ref(null)
const cursorFollower = ref(null)
const isHovering = ref(false)

const onMouseMove = (e) => {
  const { clientX, clientY } = e
  
  // Main cursor (tight follow)
  gsap.to(cursorMain.value, {
    x: clientX,
    y: clientY,
    duration: 0.05, // Even tighter
    ease: 'none' // Linear for perfect sync
  })
  
  // Follower (trailing follow)
  gsap.to(cursorFollower.value, {
    x: clientX,
    y: clientY,
    duration: 0.3,
    ease: 'power2.out'
  })
}

const onMouseOver = (e) => {
  if (e.target.closest('button, a, .interactive')) {
    isHovering.value = true
  } else {
    isHovering.value = false
  }
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('mouseover', onMouseOver)
  
  // Hide default cursor globally
  document.documentElement.style.cursor = 'none'
  document.body.style.cursor = 'none'
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('mouseover', onMouseOver)
  document.documentElement.style.cursor = 'auto'
  document.body.style.cursor = 'auto'
})
</script>

<style scoped>
.magic-cursor-main, .magic-cursor-follower {
  will-change: transform;
  pointer-events: none;
  transform: translate(-50%, -50%); /* Crucial for sync */
}
</style>
