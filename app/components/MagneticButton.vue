<template>
  <button ref="btn" class="magnetic-btn relative group overflow-hidden">
    <slot />
    <!-- Magnetic Hover Layer -->
    <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const btn = ref(null)

onMounted(() => {
  useMagnetic(btn, { strength: 0.35, duration: 0.6 })
})
</script>

<style scoped>
.magnetic-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s linear;
}
</style>
