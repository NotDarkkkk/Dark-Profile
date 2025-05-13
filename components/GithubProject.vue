<template>
  <section class="flex flex-col md:flex-row items-center justify-center px-6">
    <div
      v-motion="{
        initial: { opacity: 0, x: 20 },
        enter: { opacity: 1, x: 0, transition: { duration: 1 } },
      }"
      class="w-full max-w-8xl mt-8 md:mt-0 md:ml-12 text-gray-600 dark:text-gray-300 bg-neutral-300/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-md rounded-lg border border-gray-400 dark:border-gray-700 p-7 transition-all duration-300 hover:shadow-2xl hover:scale-105"
    >
      <h2 class="text-2xl font-semibold mb-6">
        My Projects
      </h2>
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-card w-[250px] bg-zinc-300 dark:bg-gray-700 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <img
            v-if="project.image"
            :src="project.image"
            :alt="project.name"
            class="w-full h-32 object-cover rounded-md cursor-none"
            @click="selectedImage = project.image"
          >
          <a
            :href="project.weblink"
            class="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2 cursor-none hover:underline"
          >
            {{ project.name }}
          </a>
          <p class="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-3">
            {{ project.description }}
          </p>
          <a
            :href="project.link"
            target="_blank"
            class="inline-block mt-auto text-purple-500 cursor-none hover:underline"
          >
            {{ project.linkText || 'View on GitHub' }}
          </a>
        </div>
      </div>
    </div>

    <div 
      v-if="selectedImage" 
      class="fixed inset-0 bg-black bg-opacity-80 flex items-center cursor-none justify-center z-50"
      @click="selectedImage = null"
    >
      <img :src="selectedImage" class="max-w-[90%] max-h-[90%] rounded shadow-lg" />
    </div>
  </section>
</template>

<script setup>
useMotion()

const selectedImage = ref(null)

const projects = [
  {
    id: 1,
    name: 'Maze Solver',
    description: 'A maze generator and solver with multiple algorithms.',
    link: 'http://maze.notdarkkkk.xyz',
    image: 'https://imgur.com/EZQemii.png',
    weblink: 'http://maze.notdarkkkk.xyz',
    linkText: 'Generate Mazes',
  },
  {
    id: 2,
    name: 'Game of Life',
    description: 'A simple Conways Game of Life simulator.',
    link: 'http://gol.notdarkkkk.xyz',
    image: 'https://imgur.com/1i90JJT.png',
    weblink: 'http://gol.notdarkkkk.xyz',
    linkText: 'Open Game of Life',
  },
  {
    id: 3,
    name: 'Study Assistant',
    description: 'A study assistant using Google Vertex AI API',
    link: 'https://imgur.com/a/wet6IgM',
    image: 'https://imgur.com/mb1BcOD.png',
    weblink: 'https://imgur.com/a/wet6IgM',
    linkText: 'View Demo Images',
  },
  {
    id: 4,
    name: 'Drawing Website',
    description: 'A website using htmls builtin Canvas. Made with Vue.js.',
    link: 'https://github.com/notdarkkkk/DrawingThing',
    image: 'https://imgur.com/qrWL0f8.png',
    weblink: 'http://test.notdarkkkk.xyz',
    linkText: 'View on Github',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Portfolio Website using Nuxt.js and Tailwind.',
    link: 'https://github.com/notdarkkkk/Dark-Profile',
    image: 'https://imgur.com/gAtBxYb.png',
    weblink: 'http://www.notdarkkkk.xyz',
    linkText: 'View on Github',
  },
]
</script>

<style>
.project-card {
  height: 280px;
  display: flex;
  flex-direction: column;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
