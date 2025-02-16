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
            class="project-card w-[250px] bg-neutral-400 dark:bg-gray-700 rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.name"
              class="w-full h-32 object-cover rounded-md"
            >
            <a :href="project.weblink" class="text-lg font-semibold text-gray-800 dark:text-gray-200 mt-2 cursor-none hover:underline">
              {{ project.name }}
            </a>
            <p class="text-gray-600 dark:text-gray-400 text-sm mt-2 line-clamp-3">
              {{ project.description }}
            </p>
            <a
              :href="project.link"
              target="_blank"
              class="inline-block mt-auto text-purple-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>

<script setup>
useMotion()

const projects = [
  {
    id: 1,
    name: 'Drawing Website',
    description: 'A website with a simple Canvas.',
    link: 'https://github.com/notdarkkkk/DrawingThing',
    image: 'https://imgur.com/tagzj9S.png',
    weblink: 'http://test.notdarkkkk.xyz',
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'A clean and well designed website.',
    link: 'https://github.com/notdarkkkk/Dark-Profile',
    image: 'https://imgur.com/j1thl02.png',
    weblink: 'http://www.notdarkkkk.xyz',
  },
  {
    id: 3,
    name: 'Portfolio Website',
    description: 'A clean and well designed website.',
    link: 'https://github.com/notdarkkkk/Dark-Profile',
    image: 'https://imgur.com/j1thl02.png',
    weblink: 'http://www.notdarkkkk.xyz',
  },
  {
    id: 4,
    name: 'Portfolio Website',
    description: 'A clean and well designed website.',
    link: 'https://github.com/notdarkkkk/Dark-Profile',
    image: 'https://imgur.com/j1thl02.png',
    weblink: 'http://www.notdarkkkk.xyz',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'A clean and well designed website.',
    link: 'https://github.com/notdarkkkk/Dark-Profile',
    image: 'https://imgur.com/j1thl02.png',
    weblink: 'http://www.notdarkkkk.xyz',
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