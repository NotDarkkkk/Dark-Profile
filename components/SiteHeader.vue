<template>
  <header
    ref="headerRef"
    class="p-4 bg-neutral-400/80 dark:bg-gray-900/80 backdrop-blur flex justify-between items-center transition-all duration-500 relative group"
    @mousemove="updateGlowPosition"
    @mouseleave="resetGlow"
  >
    <div
      class="absolute bottom-0 h-[3px] pointer-events-none transition-all duration-700 ease-out"
      :style="{
        left: `${glowPosition}px`,
        width: '600px',
        transform: 'translateX(-50%)',
        background: 'radial-gradient(circle, #7b1fa2 0%, transparent 70%)',
        opacity: isHovering ? '1' : '0',
      }"
    />

    <div
      class="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-purple-700 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-700 ease-out blur-sm"
    />

    <h1 class="text-xl font-bold text-gray-900 dark:text-white relative">
      Dark
    </h1>

    <button
      class="p-2 rounded bg-gray-200/90 dark:bg-gray-800/90 text-gray-900 dark:text-white relative backdrop-blur-sm transition-all duration-600 hover:shadow-2xl hover:scale-110 cursor-none"
      @click="toggleDarkMode"
    >
      <span v-if="$colorMode.value === 'light'">☀️</span>
      <span v-else>🌙</span>
    </button>
  </header>
</template>

<script setup>
const $colorMode = useColorMode()
const headerRef = ref(null)
const glowPosition = ref(0)
const isHovering = ref(false)

const toggleDarkMode = () => {
  $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
}

const updateGlowPosition = (event) => {
  if (headerRef.value) {
    const rect = headerRef.value.getBoundingClientRect()
    glowPosition.value = event.clientX - rect.left
    isHovering.value = true
  }
}

const resetGlow = () => {
  isHovering.value = false
}
</script>
