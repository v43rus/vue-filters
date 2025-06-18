import { ref } from 'vue'
import { open_image, filter, putImageData } from '@silvia-odwyer/photon'
import init from '@silvia-odwyer/photon'

let photonReady: Promise<Awaited<ReturnType<typeof init>>> | null = null

export default function useCanvas() {
  const canvasElement = ref<HTMLCanvasElement | null>(null)
  let canvasContext: CanvasRenderingContext2D | null = null
  const imageElement = new Image()
  const originalWidth = ref(0)
  const originalHeight = ref(0)

  function loadImage(url: string) {
    if (!canvasElement.value) return

    canvasContext = canvasElement.value.getContext('2d')

    imageElement.addEventListener('load', drawOriginalImage)

    imageElement.src = url
  }

  function drawOriginalImage() {
    if (!canvasContext || !canvasElement.value) return
    originalWidth.value = imageElement.naturalWidth
    originalHeight.value = imageElement.naturalHeight

    canvasElement.value.width = originalWidth.value
    canvasElement.value.height = originalHeight.value

    canvasContext.drawImage(imageElement, 0, 0, originalWidth.value, originalHeight.value)
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
    drawOriginalImage,
    filterImage,
    originalWidth,
    originalHeight,
  }
}
