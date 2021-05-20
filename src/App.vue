<template>
  <header class="bg-blue-600">
    <div class="flex justify-center">
      <span class="font-sans text-lg font-semibold text-white"
        >VueJS + Tailwind Components</span
      >
    </div>
    <div class="flex justify-center gap-4 mr-6">
      <a href="/">
        <span class="font-sans text-sm text-white">Home</span>
      </a>
      <a href="/Cards">
        <span class="font-sans text-sm text-white">Cards</span>
      </a>
    </div>
  </header>
  <router-view />
</template>
