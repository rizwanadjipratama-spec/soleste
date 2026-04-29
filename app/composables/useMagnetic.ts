import gsap from 'gsap'
import { onMounted, onUnmounted, unref, type Ref } from 'vue'

interface MagneticOptions {
  strength?: number
  duration?: number
}

export function useMagnetic(elementRef: Ref<HTMLElement | null> | HTMLElement | null, options: MagneticOptions = {}) {
  const { strength = 0.3, duration = 0.5 } = options
  
  onMounted(() => {
    const el = unref(elementRef)
    if (!el) return

    const xTo = gsap.quickTo(el, "x", { duration, ease: "power3.out" })
    const yTo = gsap.quickTo(el, "y", { duration, ease: "power3.out" })

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = el.getBoundingClientRect()
      
      const middleX = clientX - (left + width / 2)
      const middleY = clientY - (top + height / 2)
      
      xTo(middleX * strength)
      yTo(middleY * strength)
    }

    const mouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener("mousemove", mouseMove)
    el.addEventListener("mouseleave", mouseLeave)
    
    onUnmounted(() => {
      el.removeEventListener("mousemove", mouseMove)
      el.removeEventListener("mouseleave", mouseLeave)
    })
  })
}
