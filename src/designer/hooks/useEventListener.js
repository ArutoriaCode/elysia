import { onBeforeUnmount } from 'vue'

/**
 * @param {WindowEventMap} type
 * @param {EventListenerOrEventListenerObject} listener
 */
export default function useEventListener (type, listener) {
  if (typeof listener !== 'function') {
    return
  }

  const eventListener = () => listener()
  window.addEventListener(type, eventListener)

  onBeforeUnmount(() => {
    window.removeEventListener(type, eventListener)
  })
}