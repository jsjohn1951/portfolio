// HUD scroll-reveal: toggles `.is-visible` on `.reveal-on-scroll` elements as they
// enter/leave the viewport. Mirrors docs/.../code.html lines 452-485.
// No-op when the user prefers reduced motion (elements are shown statically by CSS).

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

if (!prefersReducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle('is-visible', entry.isIntersecting)
      }
    },
    { root: null, rootMargin: '-10% 0px -10% 0px', threshold: 0.15 },
  )

  const reveal = () =>
    document.querySelectorAll<HTMLElement>('.reveal-on-scroll').forEach((el) => observer.observe(el))

  // Run after DOM is ready, then catch anything already in view on load.
  if (document.readyState !== 'loading') reveal()
  else document.addEventListener('DOMContentLoaded', reveal)

  window.setTimeout(() => {
    document.querySelectorAll<HTMLElement>('.reveal-on-scroll').forEach((el) => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('is-visible')
    })
  }, 100)
} else {
  document
    .querySelectorAll<HTMLElement>('.reveal-on-scroll')
    .forEach((el) => el.classList.add('is-visible'))
}
