<template>
  <div
    v-motion="{
      initial: { opacity: 0, x: 20 },
      enter: { opacity: 1, x: 0, transition: { duration: 1 } },
    }"
    class="mt-8 md:mt-0 md:ml-12 text-gray-600 dark:text-gray-300 w-full md:w-1/2 bg-neutral-300/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-md rounded-lg border border-gray-400 dark:border-gray-700 p-7 transition-all duration-300 hover:shadow-2xl hover:scale-105"
  >
    <h2 class="text-2xl font-semibold">
      About me
    </h2>
    <p class="mt-3 text-gray-600 dark:text-gray-400">
      Dumb university student with bad time management who
      happens to like anime and programming.
    </p>
    <ul class="mt-4 space-y-2 text-gray-600 dark:text-gray-400">
      <li>✅ 10+ Years of experience in being lazy</li>
      <li>✅ Expert in procrastination</li>
      <li>✅ Love not getting enough sleep</li>
    </ul>
  </div>
</template>

<script setup>
useMotion()
</script>
