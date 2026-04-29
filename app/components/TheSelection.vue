<template>
  <section class="py-40 px-8 bg-[var(--color-marble)] overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-24">
        <span class="text-[var(--color-gold-dark)] tracking-[0.4em] uppercase text-xs mb-4 block">The Experience</span>
        <h3 class="text-6xl font-serif">The Royal Selection</h3>
        <p class="mt-6 text-[var(--color-emerald)]/60 max-w-2xl mx-auto">Click on a masterpiece to unveil its royal lineage and the magic within.</p>
      </div>

      <!-- Selection Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20">
        <div 
          v-for="(item, i) in menuItems" 
          :key="i"
          class="selection-item group cursor-pointer"
          @click="selectItem(i, $event)"
        >
          <div class="relative aspect-square glass-premium rounded-3xl overflow-hidden mb-10 transition-transform duration-700 group-hover:scale-[1.02]">
            <img :src="item.image" :alt="item.name" class="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" />
            
            <!-- Ornate Corner Overlays -->
            <div class="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[var(--color-gold)]/30 rounded-tl-3xl m-6"></div>
            <div class="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[var(--color-gold)]/30 rounded-br-3xl m-6"></div>

            <!-- Price Badge -->
            <div class="absolute top-8 right-8 w-16 h-16 rounded-full bg-[var(--color-gold)]/90 backdrop-blur-md flex items-center justify-center text-white font-serif text-lg shadow-xl translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
              ${{ item.price }}
            </div>
          </div>

          <div class="flex justify-between items-center">
            <div>
              <h4 class="text-3xl font-serif mb-2">{{ item.name }}</h4>
              <p class="text-sm tracking-[0.2em] uppercase opacity-50">{{ item.tag }}</p>
            </div>
            <div class="w-12 h-[1px] bg-[var(--color-gold)]"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Royal Modal (The Unveiling) -->
    <Transition name="royal-fade">
      <div v-if="selectedItem !== null" class="fixed inset-0 z-[200] flex items-center justify-center p-8">
        <div class="absolute inset-0 bg-[var(--color-emerald)]/95 backdrop-blur-xl" @click="selectedItem = null"></div>
        
        <div class="relative glass-premium max-w-5xl w-full rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-[0_0_100px_rgba(212,175,55,0.2)]">
          <button @click="selectedItem = null" class="absolute top-8 right-8 z-10 text-white hover:text-[var(--color-gold)] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div class="w-full md:w-1/2 aspect-square md:aspect-auto">
            <img :src="menuItems[selectedItem].image" class="w-full h-full object-cover" />
          </div>

          <div class="w-full md:w-1/2 p-12 md:p-20 text-[var(--color-marble)] flex flex-col justify-center">
            <span class="text-[var(--color-gold)] tracking-[0.4em] uppercase text-xs mb-4 block">Masterpiece #0{{ selectedItem + 1 }}</span>
            <h3 class="text-5xl font-serif mb-8">{{ menuItems[selectedItem].name }}</h3>
            <p class="text-lg opacity-80 leading-relaxed mb-12">
              {{ menuItems[selectedItem].description }}
            </p>
            
            <div class="space-y-6 mb-12">
              <div v-for="(detail, k) in menuItems[selectedItem].details" :key="k" class="flex items-center gap-4">
                <div class="w-2 h-2 rounded-full bg-[var(--color-gold)]"></div>
                <span class="font-serif italic opacity-70">{{ detail }}</span>
              </div>
            </div>

            <button class="btn-royal text-white border-white hover:bg-white hover:text-[var(--color-emerald)]">Enquire for Reservation</button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
const selectedItem = ref(null)

const menuItems = [
  {
    name: "The Gilded Rose",
    tag: "Floral / Vanilla",
    price: "450",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
    description: "A symphony of Bulgarian Rose essence infused with Madagascar vanilla beans, draped in 24k edible gold leaf.",
    details: ["24k Edible Gold Leaf", "Bulgarian Rose Essence", "3-Tier Structure"]
  },
  {
    name: "Noir Elegance",
    tag: "Dark Chocolate / Truffle",
    price: "520",
    image: "https://images.unsplash.com/photo-1562773184-3ef579395123?q=80&w=1000",
    description: "For the refined palate. 85% Venezuelan dark chocolate combined with a hint of black truffle oil.",
    details: ["Venezuelan Cacao", "Black Truffle Infusion", "Velvet Texture"]
  }
]

function selectItem(index) {
  selectedItem.value = index
}
</script>

<style scoped>
.royal-fade-enter-active,
.royal-fade-leave-active {
  transition: all 0.8s cubic-bezier(0.7, 0, 0.3, 1);
}
.royal-fade-enter-from,
.royal-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0);
}
.royal-fade-enter-from .glass-premium {
  transform: scale(0.9) translateY(40px);
  opacity: 0;
}
</style>
