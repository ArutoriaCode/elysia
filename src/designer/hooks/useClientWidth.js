import { onMounted, ref } from "vue";
import useEventListener from "./useEventListener";

export default function useClientWidth() {
  const width = ref(0);
  onMounted(() => {
    width.value = document.body.clientWidth;
  });

  useEventListener("resize", () => {
    width.value = document.body.clientWidth;
  });

  return width;
}
