<template>
  <p>Test</p>
  <div class="flex items-center justify-center">
    <GlareCard class="flex flex-col items-center justify-center">
      <NuxtImg src="https://tailwindcss.com/img/card-top.jpg" />
      <p className="text-black font-bold text-xl mt-4">Inspira UI</p>
    </GlareCard>
  </div>
  <ClientOnly>
    <BlurReveal
      :delay="0.2"
      :duration="0.75"
      class="p-8"
    >
      <h2 class="text-3xl font-bold tracking-tighter xl:text-6xl/none sm:text-5xl">Hey there 👋</h2>
      <span class="text-pretty text-xl tracking-tighter xl:text-4xl/none sm:text-3xl">
        How is it going?
      </span>
    </BlurReveal>
  </ClientOnly>
</template>