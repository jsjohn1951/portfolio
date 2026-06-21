// Apple-App-Store-style scroll choreography for the featured project stages.
// Vanilla GSAP + ScrollTrigger (no framework island) so the page ships zero React.
// Skipped entirely under prefers-reduced-motion.
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!prefersReducedMotion) {
  gsap.registerPlugin(ScrollTrigger)

  const stages = gsap.utils.toArray<HTMLElement>('.project-stage')

  stages.forEach((stage) => {
    const plate = stage.querySelector('.stage-plate')
    const visual = stage.querySelector('.stage-visual')
    const glow = stage.querySelector('.kinetic-bg')

    // ── BASELINE (working). Tune freely — this is the "feel" of the site. ──
    // 1. Parallax the ambient glow as the stage scrolls through the viewport.
    if (glow) {
      gsap.to(glow, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: { trigger: stage, start: 'top bottom', end: 'bottom top', scrub: true },
      })
    }

    // 2. Scrub the product plate + visual in with a slight rise + scale.
    //
    // TODO(willem): This is the heart of the "App-Store product" motion — own it.
    //   Try changing the values below (5-10 lines) to shape how each project
    //   "presents" itself as you scroll. Things worth experimenting with:
    //     • `scrub: true` vs `scrub: 1` (1 = eased catch-up, feels heavier)
    //     • the start/end window (when the animation begins/ends relative to scroll)
    //     • offsetting `visual` from `plate` (stagger) for a layered reveal
    //     • adding rotationY / transformPerspective for a 3D "turntable" feel
    const targets = [plate, visual].filter(Boolean)
    if (targets.length) {
      gsap.from(targets, {
        y: 60,
        scale: 0.96,
        autoAlpha: 0.4,
        ease: 'power2.out',
        stagger: 0.08,
        scrollTrigger: { trigger: stage, start: 'top 80%', end: 'top 35%', scrub: true },
      })
    }
    // ── END tuning zone ──
  })
}
