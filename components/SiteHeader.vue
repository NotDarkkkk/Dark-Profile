<template>
  <header class="p-4 bg-white dark:bg-gray-900 shadow-md flex justify-between items-center">
    <h1 class="text-xl font-bold text-gray-900 dark:text-white">
      Dark
    </h1>
    <button
      class="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
      @click="toggleDarkMode"
    >
      <span v-if="$colorMode.value === 'light'">☀️</span>
      <span v-else>🌙</span>
    </button>
  </header>
</template>

<script setup>
const $colorMode = useColorMode()

const toggleDarkMode = () => {
  $colorMode.preference = $colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>
