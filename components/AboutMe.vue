<template>
  <div
    v-motion="{
      initial: { opacity: 0, x: 20 },
      enter: { opacity: 1, x: 0, transition: { duration: 1 } },
    }"
    class="mt-8 md:mt-0 md:ml-12 text-gray-600 dark:text-gray-300 w-full md:w-1/3 bg-neutral-300/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-md rounded-lg border border-gray-400 dark:border-gray-700 p-7 transition-all duration-300 hover:shadow-2xl hover:scale-105"
  >
    <h2 class="text-2xl font-semibold">
      About me
    </h2>
    <p class="mt-3 text-gray-600 dark:text-gray-400">
      I'm a second-year Computer Science student with a strong interest for software development and a curiosity for all things tech.
      I love learning new skills, exploring different areas of IT and CS, and creating projects.
      I enjoy working in a team and I'm always excited to take on new challenges to expand my knowledge and experience.
    </p>
    <h2 class="text-lg font-semibold mt-6">
      Fields of Interest
    </h2>
    <li class="flex items-center text-gray-600 dark:text-gray-400 mt-2">
      <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> Software Development
    </li>
    <li class="flex items-center text-gray-600 dark:text-gray-400 mt-2">
      <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> Artificial Intelligence & Machine Learning
    </li>
    <li class="flex items-center text-gray-600 dark:text-gray-400 mt-2">
      <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> Data Science & Analytics
    </li>
  </div>
</template>

<script setup>
useMotion()
</script>
