<template>
  <div class="font-['Quicksand'] lg:w-[50%] bg-white p-8 shadow-2xl rounded left-0 right-0 m-4">
    <h1 class="text-center text-3xl text-indigo-700">Vue Filters</h1>
    <AppUpload v-if="!store.file" />
    <AppEditor v-else />
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/image';

const store = useImageStore();
</script>
