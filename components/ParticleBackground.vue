<template>
  <canvas
    ref="canvas"
    class="absolute top-0 left-0 w-full h-full bg-neutral-300 dark:bg-gray-800 backdrop-blur-sm transition-colors pointer-events-none"
  />
</template>

<script setup>
const canvas = ref(null)
const particles = []
const mouse = { x: null, y: null, radius: 140 }
const $colorMode = useColorMode()

const getDocumentHeight = () => {
  const body = document.body
  const html = document.documentElement

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight,
  )
}

const createParticles = () => {
  // Set canvas dimensions
  const width = window.innerWidth
  const height = getDocumentHeight()

  // Set canvas size with device pixel ratio for sharp rendering
  const dpr = window.devicePixelRatio || 1
  canvas.value.width = width * dpr
  canvas.value.height = height * dpr

  // Scale the canvas CSS dimensions
  canvas.value.style.width = `${width}px`
  canvas.value.style.height = `${height}px`

  // Scale the drawing context
  const ctx = canvas.value.getContext('2d')
  ctx.scale(dpr, dpr)

  particles.length = 0
  const spacing = 60
  const rowHeight = spacing * Math.sqrt(3) / 2

  // Add extra rows above and below viewport for smooth scrolling
  const extraRows = Math.ceil(window.innerHeight / rowHeight)
  const totalRows = Math.ceil(height / rowHeight) + extraRows

  for (let row = -extraRows; row < totalRows; row += 1) {
    const offset = row % 2 ? spacing / 2 : 0
    for (let col = -1; col < width / spacing + 2; col += 1) {
      const x = col * spacing + offset
      const y = row * rowHeight

      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: 3,
        active: false,
      })
    }
  }
}

const drawParticles = () => {
  const ctx = canvas.value.getContext('2d')
  const scrollY = window.scrollY
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  const color = $colorMode.value === 'dark' ? '#ffffff' : '#000000'

  ctx.beginPath()
  particles.forEach((p1) => {
    if (!p1.active) return

    particles.forEach((p2) => {
      const dx = p1.x - p2.x
      const dy = p1.y - p2.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < 80) {
        ctx.moveTo(p1.x, p1.y)
        ctx.lineTo(p2.x, p2.y)
      }
    })
  })
  ctx.strokeStyle = `${color}20`
  ctx.stroke()

  ctx.fillStyle = `${color}40`
  particles.forEach((p) => {
    // Only draw particles that are within or near the viewport
    if (p.y >= scrollY - 100 && p.y <= scrollY + window.innerHeight + 100) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fill()
    }
  })
}

const animateParticles = () => {
  const scrollY = window.scrollY
  const mouseY = mouse.y + scrollY // Adjust mouse position for scroll

  particles.forEach((p) => {
    const dx = p.x - mouse.x
    const dy = p.y - mouseY
    const distance = Math.sqrt(dx * dx + dy * dy)
    p.active = distance < mouse.radius

    if (p.active) {
      const angle = Math.atan2(dy, dx)
      const force = (mouse.radius - distance) / mouse.radius

      const targetX = p.x + Math.cos(angle) * force * 0.5
      const targetY = p.y + Math.sin(angle) * force * 0.5

      const distanceFromOrigin = Math.sqrt(
        Math.pow(targetX - p.originalX, 2)
        + Math.pow(targetY - p.originalY, 2),
      )

      const maxDisplacement = 10
      if (distanceFromOrigin > maxDisplacement) {
        const scale = maxDisplacement / distanceFromOrigin
        p.x = p.originalX + (targetX - p.originalX) * scale
        p.y = p.originalY + (targetY - p.originalY) * scale
      }
      else {
        p.x = targetX
        p.y = targetY
      }

      p.size = 3 + force * 2
    }
    else {
      p.x += (p.originalX - p.x) * 0.1
      p.y += (p.originalY - p.y) * 0.1
      p.size = 3
    }
  })
}

const animate = () => {
  animateParticles()
  drawParticles()
  requestAnimationFrame(animate)
}

const updateMousePosition = (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
}

// Debounce resize handler
const debouncedResize = useDebounceFn(() => {
  createParticles()
}, 150)

onMounted(() => {
  createParticles()
  animate()
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('resize', debouncedResize)
  window.addEventListener('scroll', () => {
    // Only recreate particles if the document height has changed
    const currentHeight = getDocumentHeight()
    if (currentHeight !== canvas.value.height) {
      createParticles()
    }
  })
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('resize', debouncedResize)
  window.removeEventListener('scroll', () => {})
})
</script>
