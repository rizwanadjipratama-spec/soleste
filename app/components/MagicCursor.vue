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
const isClicked = ref(false)
const isHovering = ref(false)
const isTouchDevice = ref(false)

const onMouseMove = (e) => {
  if (isTouchDevice.value) return
  const { clientX, clientY } = e
  
  gsap.to(cursorMain.value, {
    x: clientX,
    y: clientY,
    duration: 0.1,
    ease: 'power2.out'
  })
  
  gsap.to(cursorFollower.value, {
    x: clientX,
    y: clientY,
    duration: 0.4,
    ease: 'power3.out'
  })
}

const onMouseDown = () => {
  if (isTouchDevice.value) return
  isClicked.value = true
  gsap.to(cursorMain.value, { scale: 0.8, duration: 0.2 })
}

const onMouseUp = () => {
  if (isTouchDevice.value) return
  isClicked.value = false
  gsap.to(cursorMain.value, { scale: 1, duration: 0.2 })
}

const onMouseOver = (e) => {
  if (isTouchDevice.value) return
  const target = e.target
  if (target.closest('button, a, .interactive, .selection-item, .cake-card')) {
    isHovering.value = true
    gsap.to(cursorMain.value, { width: 64, height: 64, duration: 0.3 })
  } else {
    isHovering.value = false
    gsap.to(cursorMain.value, { width: 32, height: 32, duration: 0.3 })
  }
}

onMounted(() => {
  isTouchDevice.value = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
  
  if (!isTouchDevice.value) {
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    
    document.documentElement.style.cursor = 'none'
    document.body.style.cursor = 'none'
  }
})

onUnmounted(() => {
  if (!isTouchDevice.value) {
    window.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseover', onMouseOver)
    window.removeEventListener('mousedown', onMouseDown)
    window.removeEventListener('mouseup', onMouseUp)
    document.documentElement.style.cursor = 'auto'
    document.body.style.cursor = 'auto'
  }
})
</script>

<style scoped>
.magic-cursor-main, .magic-cursor-follower {
  will-change: transform;
  pointer-events: none;
  transform: translate(-50%, -50%); /* Crucial for sync */
}
</style>
