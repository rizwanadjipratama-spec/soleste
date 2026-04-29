<template>
  <button 
    @click="toggleAudio"
    class="fixed bottom-8 right-8 z-[100] w-12 h-12 rounded-full glass-premium flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
    aria-label="Toggle Royal Atmosphere"
  >
    <div class="relative w-6 h-6">
      <!-- Mute/Unmute Icons -->
      <svg v-if="!isMuted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full text-[var(--color-gold)]">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="w-full h-full text-red-400 opacity-50">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6.75h2.25L13.5 3.75v16.5l-4.5-4.5H6.75a2.25 2.25 0 01-2.25-2.25v-4.5a2.25 2.25 0 012.25-2.25z" />
      </svg>
    </div>
    
    <!-- Pulse Effect when playing -->
    <div v-if="!isMuted" class="absolute inset-0 rounded-full border border-[var(--color-gold)] animate-ping opacity-20"></div>
  </button>
</template>

<script setup>
import { ref } from 'vue'

const isMuted = ref(true)
let audio = null

function toggleAudio() {
  if (!audio) {
    // Placeholder for royal ambient sound
    audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3')
    audio.loop = true
    audio.volume = 0.2
  }

  if (isMuted.value) {
    audio.play().catch(e => console.log('Audio play blocked by browser'))
  } else {
    audio.pause()
  }
  isMuted.value = !isMuted.value
}
</script>
