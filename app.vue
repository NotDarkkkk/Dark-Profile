<template>
  <div class="min-h-screen">
    <ParticleBackground class="absolute min-h-screen backdrop-blur-extra-lg inset-0 -z-10" />
    <SiteHeader />
    <section class="flex flex-col items-center justify-start px-6 py-10 md:flex-row md:justify-center">
      <HeroSection />
    </section>
    <slot />
  </div>
</template>
