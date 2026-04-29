<template>
  <div class="page-home">
    <!-- SECTION 1: THE GRAND ENTRANCE (HERO) -->
    <section class="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <!-- Background Layers (Stationary & Cinematic Zoom) -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2500" 
          class="absolute inset-0 w-full h-full object-cover scale-125 animate-cinematic-zoom img-reveal hero-bg-img"
          alt="Hero Background"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[var(--color-marble)]/30 via-[var(--color-marble)]/80 to-[var(--color-marble)]"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[var(--color-marble)] via-transparent to-transparent"></div>
      </div>

      <div class="relative z-10 text-center px-4 mt-20">
        <span class="inline-block border border-[var(--color-gold)]/30 rounded-full px-6 py-2 text-[var(--color-gold-dark)] tracking-[0.6em] uppercase text-xs mb-10 opacity-0 translate-y-10 hero-reveal backdrop-blur-sm">Est. 2026</span>
        <h2 class="text-5xl sm:text-7xl md:text-[9rem] leading-[1.1] font-serif mb-10 opacity-0 translate-y-10 hero-reveal drop-shadow-2xl font-light">
          Food for <br />
          <span class="magic-text font-normal italic">Kings & Queens</span>
        </h2>
        <p class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl opacity-0 translate-y-10 hero-reveal text-[var(--color-emerald)]/70 font-serif leading-relaxed px-4">
          Where every cake is a masterpiece, handcrafted with royal precision and enchanted with the finest flavors. Welcome to the pinnacle of patisserie.
        </p>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-60">
        <div class="w-[1px] h-24 bg-gradient-to-b from-[var(--color-gold)] to-transparent origin-top scale-y-0 scroll-line"></div>
        <span class="text-[9px] uppercase tracking-[0.4em] text-[var(--color-gold-dark)]">Discover the Magic</span>
      </div>
    </section>

    <!-- SECTION 2: OUR STORY -->
    <section id="story" class="py-40 px-8 bg-[var(--color-marble)] overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div class="w-full md:w-1/2 relative">
          <div class="aspect-[4/5] rounded-[3rem] overflow-hidden glass-premium shadow-2xl reveal-img">
            <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=2000" class="w-full h-full object-cover img-reveal" />
          </div>
          <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--color-gold)] rounded-full flex items-center justify-center p-8 text-center text-white font-serif text-sm leading-tight shadow-2xl rotate-12 reveal-badge">
            Est. 2026 <br/> Royal Patisserie
          </div>
        </div>
        <div class="w-full md:w-1/2 space-y-8">
          <span class="text-[var(--color-gold-dark)] tracking-[0.4em] uppercase text-xs font-semibold block reveal-text">Our Legacy</span>
          <h3 class="text-5xl md:text-7xl font-serif font-light reveal-text">A Symphony of <br/> <span class="italic">Flavour & Art</span></h3>
          <p class="text-lg text-[var(--color-emerald)]/70 font-serif leading-relaxed reveal-text">
            Soléste was born from a vision to blend the precision of royal craftsmanship with the untamed beauty of natural flavours. Each creation is more than just a cake; it is a narrative told through the finest chocolate, the rarest fruits, and a touch of golden alchemy.
          </p>
          <div class="pt-6 reveal-text">
            <div class="flex items-center gap-4 text-[var(--color-gold-dark)] border-b border-[var(--color-gold)]/20 pb-4 w-fit group cursor-pointer hover:border-[var(--color-gold)] transition-all">
              <span class="tracking-widest uppercase text-sm">Read the Full Narrative</span>
              <span class="transform group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE ROYAL VAULT (GALLERY) -->
    <section id="vault" class="py-32 px-8 max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div class="max-w-2xl">
          <span class="flex items-center gap-4 text-[var(--color-gold-dark)] tracking-[0.4em] uppercase text-xs mb-6 font-semibold">
            <span class="w-12 h-[1px] bg-[var(--color-gold)]"></span> The Collection
          </span>
          <h3 class="text-6xl md:text-7xl font-serif font-light">The Royal Vault</h3>
        </div>
        <a href="#" class="group flex items-center gap-4 text-[var(--color-gold-dark)] border-b border-[var(--color-gold)]/30 pb-2 text-sm hover:border-[var(--color-gold)] transition-all duration-500">
          <span class="tracking-widest uppercase">Explore All Masterpieces</span>
          <span class="transform group-hover:translate-x-2 transition-transform">→</span>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        <div v-for="(cake, i) in cakes" :key="i" class="cake-card group opacity-0 translate-y-20 cursor-pointer">
          <div class="relative aspect-[3/4] overflow-hidden glass-premium rounded-[2rem] mb-8 shadow-2xl group-hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-700">
            <img :src="cake.image" :alt="cake.name" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 filter saturate-[0.8] group-hover:saturate-100 img-reveal" />
            
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
              <span class="text-white text-xs tracking-[0.3em] uppercase mb-2">View Details</span>
              <div class="w-full h-[1px] bg-white/30 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100"></div>
            </div>
          </div>
          <div class="text-center">
            <h4 class="text-3xl font-serif mb-3 text-[var(--color-emerald)] transition-colors duration-500 group-hover:text-[var(--color-gold-dark)]">{{ cake.name }}</h4>
            <p class="text-sm opacity-60 font-serif italic tracking-widest text-[var(--color-gold-dark)]">{{ cake.category }}</p>
          </div>
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
        <div class="relative reveal-artist-img opacity-0">
          <div class="aspect-square rounded-full border border-[var(--color-gold)]/30 absolute -inset-10 animate-spin-slow"></div>
          <img src="https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1000" class="relative z-10 rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Artist at work" />
        </div>
        <div class="reveal-artist-text opacity-0">
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
import { onMounted } from 'vue'

const cakes = [
  { name: 'The Golden Empire', category: 'Royal Wedding', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200' },
  { name: 'G-Noir Elegance', category: 'Dark Collection', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1200' },
  { name: 'Emerald Dreams', category: 'Signature Collection', image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200' },
  { name: 'Silk & Satin', category: 'Evening Gala', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1200' }
]

onMounted(() => {
  // Hero reveals (Synced perfectly with preloader reveal at 4.5s)
  gsap.to('.hero-reveal', {
    opacity: 1,
    y: 0,
    duration: 1.8,
    stagger: 0.25,
    ease: 'power4.out',
    delay: 4.8
  })

  // Scroll line animation
  gsap.to('.scroll-line', {
    scaleY: 1,
    duration: 2,
    ease: 'power4.inOut',
    delay: 1.5
  })

  // Background fade-in
  gsap.from('.page-home section:first-child .absolute.inset-0', {
    opacity: 0,
    duration: 3,
    ease: 'power2.out',
    delay: 4 // Start slightly before preloader finishes
  })

  // Story section animations
  gsap.from('.reveal-img', {
    scrollTrigger: {
      trigger: '#story',
      start: 'top 80%',
    },
    xPercent: -10,
    opacity: 0,
    duration: 1.5,
    ease: 'power4.out'
  })

  gsap.from('.reveal-badge', {
    scrollTrigger: {
      trigger: '#story',
      start: 'top 70%',
    },
    scale: 0,
    rotate: -45,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: 'back.out(1.7)'
  })

  gsap.from('.reveal-text', {
    scrollTrigger: {
      trigger: '#story',
      start: 'top 75%',
    },
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: 'power3.out'
  })

  // Artist section reveal
  gsap.to('.reveal-artist-img', {
    scrollTrigger: {
      trigger: '.reveal-artist-img',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1.5,
    ease: 'power3.out'
  })

  gsap.to('.reveal-artist-text', {
    scrollTrigger: {
      trigger: '.reveal-artist-text',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    delay: 0.2
  })

  // Scroll animations for gallery
  gsap.to('.cake-card', {
    scrollTrigger: {
      trigger: '.cake-card',
      start: 'top 85%',
    },
    opacity: 1,
    y: 0,
    duration: 1.2,
    stagger: 0.1,
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
.animate-cinematic-zoom {
  animation: cinematic-zoom 60s ease-out forwards;
}

@keyframes cinematic-zoom {
  from { transform: scale(1.25); }
  to { transform: scale(1); }
}
.hero-bg-img.loaded {
  opacity: 0.15;
}
</style>
