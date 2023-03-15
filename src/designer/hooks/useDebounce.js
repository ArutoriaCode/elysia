import { ref } from "vue";

export default function useDebounce(fn, deply = 250) {
  let timer = null;

  function debounce(...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, deply || 250);
  }

  return debounce;
}
