import { ref } from 'vue'
import { open_image, filter, putImageData } from '@silvia-odwyer/photon'
import init from '@silvia-odwyer/photon'

let photonReady: Promise<Awaited<ReturnType<typeof init>>> | null = null

export default function useCanvas() {
  const canvasElement = ref<HTMLCanvasElement | null>(null)
  let canvasContext: CanvasRenderingContext2D | null = null
  const imageElement = new Image()

  function loadImage(url: string) {
    if (!canvasElement.value) return
    canvasContext = canvasElement.value.getContext('2d')
    imageElement.onload = () => {
      if (!canvasElement.value) return
      const ctx = canvasElement.value.getContext('2d')
      if (!ctx) return
      // Clear the canvas before drawing the new image
      canvasElement.value.width = imageElement.naturalWidth
      canvasElement.value.height = imageElement.naturalHeight
      ctx.drawImage(imageElement, 0, 0, imageElement.naturalWidth, imageElement.naturalHeight)
    }
    imageElement.src = ''
    setTimeout(() => {
      imageElement.src = url
    }, 0)
  }

  async function filterImage(filterName: string) {
    if (!canvasContext || !canvasElement.value) return
    if (!photonReady) {
      photonReady = init()
    }
    await photonReady
    const photonImage = open_image(canvasElement.value, canvasContext)
    if (filterName.length) {
      filter(photonImage, filterName)
    }
    putImageData(canvasElement.value, canvasContext, photonImage)
  }

  return {
    canvasElement,
    loadImage,
    filterImage,
  }
}
