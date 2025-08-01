<template>
  <div class="mt-7">
    <div class="mt-6 w-full">
      <ul
        role="list"
        class="grid auto-rows-fr place-content-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 1.5xl:grid-cols-4 gap-6 my-6"
      >
        <slot name="list-items" />
      </ul>
    </div>
  </div>
</template>
