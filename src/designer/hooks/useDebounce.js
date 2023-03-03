import { ref } from "vue";

export default function useDebounce(fn, deply = 250) {
  const timer = ref(null);

  function debounce(...args) {
    if (timer.value) {
      clearTimeout(timer.value);
    }
    debugger
    timer.value = setTimeout(() => {
      fn(...args);
      timer.value = null;
    }, deply || 250);
  }

  return debounce;
}
