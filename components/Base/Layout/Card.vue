<script lang="ts" setup></script>

<template>
  <div
    class="relative grid grid-rows-[1fr,1fr,1fr,1fr, 1fr] border rounded-lg border-blue-900 p-4"
  >
    <div class="flex flex-col items-center gap-2">
      <h1 class="text-3xl italic font-semibold">
        <slot name="name" />
      </h1>
      <p class="text-sm"><slot name="id" /></p>
      <slot name="image" />
      <div class="flex gap-2">
        <slot name="characteristics" />
      </div>
      <div class="flex gap-2">
        <slot name="type" />
      </div>
    </div>
  </div>
</template>
