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

const createParticles = () => {
  const width = canvas.value.width = window.innerWidth
  const height = canvas.value.height = window.innerHeight

  particles.length = 0
  const spacing = 60
  const rowHeight = spacing * Math.sqrt(3) / 2

  for (let row = 0; row < height / rowHeight + 1; row += 1) {
    const offset = row % 2 ? spacing / 2 : 0
    for (let col = 0; col < width / spacing + 1; col += 1) {
      const x = col * spacing + offset
      const y = row * rowHeight

      if (x >= -spacing && x <= width + spacing && y >= -spacing && y <= height + spacing) {
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
}

const drawParticles = () => {
  const ctx = canvas.value.getContext('2d')
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
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
    ctx.fill()
  })
}

const animateParticles = () => {
  particles.forEach((p) => {
    const dx = p.x - mouse.x
    const dy = p.y - mouse.y
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

onMounted(() => {
  createParticles()
  animate()
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('resize', createParticles)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('resize', createParticles)
})
</script>
