// HUD telemetry strip: live system time + a mock latency/core-temp readout.
// Targets elements tagged with data-hud-time / data-hud-latency / data-hud-temp.
// Purely cosmetic — the "metrics" simulate a command-center feed.

function pad(n: number): string {
  return n.toString().padStart(2, '0')
}

function tick(): void {
  const now = new Date()
  const time = `${pad(now.getUTCHours())}:${pad(now.getUTCMinutes())}:${pad(now.getUTCSeconds())} UTC`

  document.querySelectorAll<HTMLElement>('[data-hud-time]').forEach((el) => {
    el.textContent = time
  })

  // Mock latency wanders in a believable 8-24ms band.
  const latency = 8 + Math.floor(Math.random() * 16)
  document.querySelectorAll<HTMLElement>('[data-hud-latency]').forEach((el) => {
    el.textContent = `${latency}ms`
  })

  // Mock core temp drifts around 41-46°C.
  const temp = (41 + Math.random() * 5).toFixed(1)
  document.querySelectorAll<HTMLElement>('[data-hud-temp]').forEach((el) => {
    el.textContent = `${temp}°C`
  })
}

tick()
window.setInterval(tick, 1000)
