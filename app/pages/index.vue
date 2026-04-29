<template>
  <div class="page-home">
    <!-- SECTION 1: THE GRAND ENTRANCE (HERO) -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Layers for Parallax -->
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000')] bg-cover bg-center opacity-20 scale-110 parallax-bg" data-speed="0.1"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-marble)]/80 to-[var(--color-marble)]"></div>
      </div>

      <div class="relative z-10 text-center px-4">
        <span class="block text-[var(--color-gold-dark)] tracking-[0.5em] uppercase text-sm mb-6 opacity-0 translate-y-10 hero-reveal">Est. 2026</span>
        <h2 class="text-7xl md:text-9xl font-serif mb-8 opacity-0 translate-y-10 hero-reveal">
          Food for <br />
          <span class="magic-text">Kings & Queens</span>
        </h2>
        <p class="max-w-xl mx-auto text-lg opacity-0 translate-y-10 hero-reveal text-[var(--color-emerald)]/70">
          Where every cake is a masterpiece, handcrafted with royal precision and enchanted with the finest flavors.
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50">
        <div class="w-[1px] h-20 bg-[var(--color-gold)] origin-top scale-y-0 scroll-line"></div>
        <span class="text-[10px] uppercase tracking-widest text-[var(--color-gold-dark)]">Scroll to Enter</span>
      </div>
    </section>

    <!-- SECTION 2: THE ROYAL VAULT (GALLERY) -->
    <section class="py-32 px-8 max-w-7xl mx-auto">
      <div class="flex justify-between items-end mb-20">
        <div>
          <span class="text-[var(--color-gold-dark)] tracking-[0.3em] uppercase text-xs mb-4 block">The Collection</span>
          <h3 class="text-5xl font-serif">The Royal Vault</h3>
        </div>
        <a href="#" class="text-[var(--color-gold-dark)] border-b border-[var(--color-gold)] pb-1 text-sm hover:opacity-70 transition-opacity">Explore All Masterpieces</a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div v-for="(cake, i) in cakes" :key="i" class="cake-card group opacity-0 translate-y-20">
          <div class="relative aspect-[4/5] overflow-hidden glass-premium rounded-2xl mb-6">
            <img :src="cake.image" :alt="cake.name" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
              <button class="btn-royal bg-white border-none scale-90 group-hover:scale-100 transition-transform">Inspect Detail</button>
            </div>
          </div>
          <h4 class="text-2xl mb-2">{{ cake.name }}</h4>
          <p class="text-sm opacity-60 font-serif italic">{{ cake.category }}</p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE ROYAL SELECTION -->
    <TheSelection />

    <!-- SECTION 4: THE ROYAL PARADE (NEW) -->
    <InfiniteGallery />

    <!-- SECTION 5: THE ARTIST'S ATELIER -->
    <section class="relative py-40 overflow-hidden bg-[var(--color-emerald)] text-[var(--color-marble)]">
      <div class="absolute top-0 right-0 w-1/2 h-full bg-[var(--color-gold)]/5 -skew-x-12 translate-x-20"></div>
      
      <div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div class="relative">
          <div class="aspect-square rounded-full border border-[var(--color-gold)]/30 absolute -inset-10 animate-spin-slow"></div>
          <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000" class="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Artist at work" />
        </div>
        <div>
          <h3 class="text-5xl mb-8 text-[var(--color-gold)]">The Artist's Atelier</h3>
          <p class="text-xl leading-relaxed opacity-80 mb-10">
            Behind every Soléste creation is a symphony of passion and precision. Our artists don't just bake; they compose flavors and sculpt textures that transcend the ordinary.
          </p>
          <div class="grid grid-cols-2 gap-8">
            <div>
              <span class="text-3xl font-serif text-[var(--color-gold)] block mb-2">100%</span>
              <p class="text-xs uppercase tracking-widest opacity-50">Handcrafted</p>
            </div>
            <div>
              <span class="text-3xl font-serif text-[var(--color-gold)] block mb-2">Jewel</span>
              <p class="text-xs uppercase tracking-widest opacity-50">Level Precision</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: REQUEST AN AUDIENCE -->
    <BookingSection />
  </div>
</template>

<script setup>
import gsap from 'gsap'

const cakes = [
  { name: 'The Golden Empire', category: 'Royal Wedding', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1000' },
  { name: 'Emerald Dreams', category: 'Signature Collection', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000' },
  { name: 'Silk & Satin', category: 'Evening Gala', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000' }
]

onMounted(() => {
  // Hero reveals
  gsap.to('.hero-reveal', {
    opacity: 1,
    y: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power4.out',
    delay: 0.5
  })

  // Scroll line animation
  gsap.to('.scroll-line', {
    scaleY: 1,
    duration: 2,
    ease: 'power4.inOut',
    delay: 1.5
  })

  // Parallax background
  window.addEventListener('scroll', () => {
    const scroll = window.pageYOffset
    gsap.to('.parallax-bg', {
      y: scroll * 0.2,
      duration: 0.1,
      ease: 'none'
    })
  })

  // Scroll animations for gallery
  gsap.to('.cake-card', {
    scrollTrigger: {
      trigger: '.cake-card',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out'
  })
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
