<template>
  <div class="my-8">
    <div class="flex justify-center">
      <canvas ref="canvasElement" width="400" height="400" class="rounded-lg shadow-2xl"
        style="width: 90%; height: auto; border: 1px solid #ccc;"></canvas>
    </div>
    <div class="text-white text-xl mt-4 w-[90%] text-center mx-auto">
      <div class="flex justify-center gap-4">
        <button v-for="(filter, index) in filters" :key="index"
          :class="{ 'bg-pink-600 rounded-lg': store.filter !== filter, 'bg-green-600 rounded-lg': store.filter === filter }"
          type="button" class="md:text-lg text-sm py-2 w-full hover:cursor-pointer transition duration-300" @click="
            store.filter = store.filter === filter ? '' : filter">
          {{ filter }}
        </button>
      </div>
      <div class="flex">
        <button class="bg-blue-400 md:text-lg text-sm p-2 mt-4 mr-1 w-full rounded-lg hover:cursor-pointer"
          type="button" @click="store.file = null; store.filter = ''">
          Upload New Image
        </button>
        <button
          class="bg-indigo-700 md:text-lg text-sm p-2 mt-4 ml-1 block w-full rounded-lg text-center hover:cursor-pointer"
          type="button" @click="downloadJpeg">
          Download {{
            store.file && store.file.name
              ? store.file.name.replace(/\.[^/.]+$/, '') + '-filtered.jpg'
              : 'filtered-image.jpg'
          }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useImageStore } from '@/stores/image';
import useCanvas from '@/composables/useCanvas';
import useReader from '@/composables/useReader';

const filters = ['oceanic', 'vintage', 'rosetint'];
const store = useImageStore();
const { canvasElement, loadImage, filterImage } = useCanvas();

const reader = useReader(store.file, () => {
  if (!reader.result) return;
  const dataUrl = reader.result.toString();
  loadImage(dataUrl);
  store.filter = '';
});

store.$subscribe((mutation, state) => {
  if (state.filter && store.file) {
    // Always reset to the original image before applying a filter
    const reader = new FileReader();
    reader.onload = () => {
      loadImage(reader.result as string);
      // Wait for the image to load, then apply the filter
      setTimeout(() => {
        filterImage(state.filter!);
      }, 50);
    };
    reader.readAsDataURL(store.file);
  } else if (store.file) {
    // If no filter, reload the image to reset to original
    const reader = new FileReader();
    reader.onload = () => {
      loadImage(reader.result as string);
    };
    reader.readAsDataURL(store.file);
  }
});
// Function to download the filtered image as JPEG
function downloadJpeg() {
  if (!canvasElement.value) return
  canvasElement.value.toBlob(
    (blob) => {
      if (!blob) return
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = store.file?.name?.replace(/\.[^/.]+$/, '') + '-filtered.jpg' || 'filtered-image.jpg'
      a.click()
      URL.revokeObjectURL(url)
    },
    'image/jpeg',
    0.9
  )
}
</script>
