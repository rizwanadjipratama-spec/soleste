<template>
  <section id="booking" class="py-40 px-8 bg-[var(--color-marble)]">
    <div class="max-w-4xl mx-auto glass-premium rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-[var(--color-gold)]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div class="relative z-10 text-center mb-16">
        <h3 class="text-5xl font-serif mb-6">Request an Audience</h3>
        <p class="text-[var(--color-emerald)]/60 font-serif italic text-lg">
          Secure your date for a custom creation that transcends time and flavor.
        </p>
      </div>

      <form @submit.prevent="submitRequest" class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div class="space-y-2">
          <label class="text-[var(--color-gold-dark)] text-xs uppercase tracking-widest ml-4">Your Name</label>
          <input type="text" class="w-full bg-white/50 border border-[var(--color-gold)]/20 rounded-full px-8 py-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="Lord / Lady Name" />
        </div>
        <div class="space-y-2">
          <label class="text-[var(--color-gold-dark)] text-xs uppercase tracking-widest ml-4">Email Address</label>
          <input type="email" class="w-full bg-white/50 border border-[var(--color-gold)]/20 rounded-full px-8 py-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors" placeholder="messenger@royal.com" />
        </div>
        <div class="space-y-2 md:col-span-2">
          <label class="text-[var(--color-gold-dark)] text-xs uppercase tracking-widest ml-4">The Occasion</label>
          <select class="w-full bg-white/50 border border-[var(--color-gold)]/20 rounded-full px-8 py-4 focus:outline-none focus:border-[var(--color-gold)] transition-colors appearance-none">
            <option>Royal Wedding</option>
            <option>Imperial Celebration</option>
            <option>Exclusive Gift</option>
            <option>Other Event</option>
          </select>
        </div>
        <div class="space-y-2 md:col-span-2">
          <label class="text-[var(--color-gold-dark)] text-xs uppercase tracking-widest ml-4">Special Requests</label>
          <textarea class="w-full bg-white/50 border border-[var(--color-gold)]/20 rounded-[2rem] px-8 py-6 focus:outline-none focus:border-[var(--color-gold)] transition-colors h-40" placeholder="Describe your vision..."></textarea>
        </div>

        <div class="md:col-span-2 flex justify-center mt-8">
          <MagneticButton>
            <button type="submit" class="btn-royal bg-[var(--color-gold)] text-white px-12 py-5 text-lg shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
              Send the Invitation
            </button>
          </MagneticButton>
        </div>
      </form>

      <!-- Success State Overlay (Mock) -->
      <div v-if="submitted" class="absolute inset-0 bg-[var(--color-marble)] z-20 flex flex-col items-center justify-center text-center p-12 animate-fade-in">
        <div class="w-24 h-24 rounded-full border-2 border-[var(--color-gold)] flex items-center justify-center mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-[var(--color-gold)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 class="text-4xl font-serif mb-4">The Message is Sent</h4>
        <p class="text-[var(--color-emerald)]/60 font-serif italic">Our royal messengers will contact you shortly.</p>
        <button @click="submitted = false" class="mt-8 text-[var(--color-gold-dark)] underline underline-offset-8 decoration-[var(--color-gold)]/30">Send another</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const submitted = ref(false)

function submitRequest() {
  submitted.value = true
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s cubic-bezier(0.7, 0, 0.3, 1) forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
}
</style>
