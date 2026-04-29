<template>
  <section class="py-20 bg-[var(--color-marble)] overflow-hidden border-y border-[var(--color-gold)]/10">
    <div class="mb-12 px-8 flex justify-between items-end">
      <h3 class="text-4xl font-serif">The Royal Parade</h3>
      <p class="text-xs tracking-widest uppercase opacity-40">Infinite Inspiration</p>
    </div>

    <!-- Infinite Scroll Container -->
    <div class="relative flex overflow-hidden group">
      <div class="flex animate-infinite-scroll py-4 group-hover:pause">
        <!-- Gallery Items (Repeated for seamless loop) -->
        <div v-for="n in 2" :key="n" class="flex shrink-0">
          <div v-for="(img, i) in galleryImages" :key="i" class="w-[300px] md:w-[450px] px-4">
            <div class="relative aspect-[4/5] rounded-2xl overflow-hidden glass-premium group/item cursor-pointer">
              <img :src="img" class="w-full h-full object-cover grayscale transition-all duration-700 group-hover/item:grayscale-0 group-hover/item:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity flex items-end p-8">
                <span class="text-white font-serif italic">The Art of Soléste</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const galleryImages = [
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800',
  'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=800',
  'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=800',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=800'
]
</script>

<style scoped>
@keyframes infinite-scroll {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-infinite-scroll {
  animation: infinite-scroll 40s linear infinite;
  display: flex;
  width: max-content;
}

.pause {
  animation-play-state: paused;
}
</style>
