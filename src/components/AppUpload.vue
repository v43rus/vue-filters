<template>
  <div class="text-center my-8 py-32 text-slate-700 italic rounded border-4 border-double border-slate-700/25"
    @drag.prevent.stop="" @dragstart.prevent.stop="" @dragend.prevent.stop="" @dragover.prevent.stop=""
    @dragenter.prevent.stop="" @dragleave.prevent.stop="" @drop.prevent.stop="store.upload" @click="triggerFileInput">
    Drag and drop image<br />
    <span class="block mt-2 text-sm text-slate-500">or click to select from device</span>
    <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="onFileChange" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useImageStore } from '@/stores/image';

const store = useImageStore();
const fileInput = ref<HTMLInputElement | null>(null);

function triggerFileInput() {
  fileInput.value?.click();
}

function onFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    store.file = target.files[0];
  }
}
</script>
