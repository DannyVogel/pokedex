<script lang="ts" setup></script>

<template>
  <div
    class="relative min-h-screen h-full flex flex-col items-center overflow-x-hidden"
  >
    <TheHeader />
    <main
      class="mt-20 flex-grow mx-auto max-w-screen px-2 sm:px-6 md:px-8 lg:max-w-screen-2xl lg:px-24 w-screen"
    >
      <slot />
    </main>
  </div>
</template>
