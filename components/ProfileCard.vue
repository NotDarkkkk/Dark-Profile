<template>
  <div
    v-motion="{
      initial: { opacity: 0, y: 20 },
      enter: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }"
    class="bg-neutral-300/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-md rounded-lg border border-gray-400 dark:border-gray-700 max-w-3xl w-full md:w-1/2 p-6 space-y-6 transition-all duration-300 hover:shadow-2xl hover:scale-105"
  >
    <div class="flex items-center space-x-6">
      <div class="w-32 h-32 bg-gray-300 dark:bg-gray-700 rounded-lg overflow-hidden border border-gray-400 dark:border-gray-600">
        <img
          src="./assets/pfp.png"
          alt="Profile"
          class="w-full h-full object-cover"
        >
      </div>

      <div class="flex-1">
        <h1 class="text-2xl font-bold text-purple-400">
          Dark
        </h1>
        <p class="text-gray-600 dark:text-gray-300 text-lg">
          Software Developer
        </p>

        <div class="mt-2 flex gap-4">
          <span class="bg-gray-700 text-white text-sm px-4 py-1 rounded-md">Job Class: Student</span>
          <span class="bg-purple-500 text-white text-sm px-4 py-1 rounded-md">2nd Year</span>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-400 dark:border-gray-600 pt-4">
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-300">
        Key Skills
      </h2>
      <ul class="mt-2 text-sm text-gray-700 dark:text-gray-400 grid grid-cols-2 gap-x-4 gap-y-2">
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> 🖥️ Python, C++, JavaScript
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> 🌐 HTML, CSS, Vue.js, Nuxt.js
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> ⚡ Arduino & Raspberry Pi
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> ☁️ AWS, DevOps, Docker
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> 🔗 Networking (Cisco)
        </li>
        <li class="flex items-center">
          <span class="w-2 h-2 bg-black dark:bg-white rounded-full mr-2" /> 🖥️ Windows & Linux Administration
        </li>
      </ul>
    </div>

    <div>
      <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-300">
        Languages
      </h2>
      <p class="text-sm text-gray-700 dark:text-gray-400">
        Georgian (Native), English (Fluent), Russian (Basic)
      </p>
    </div>
  </div>
</template>
