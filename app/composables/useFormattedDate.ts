import { computed } from "vue";

export function useFormattedDate(date: Date | string | undefined) {
  return computed(() => {
    if (!date) return "";

    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  });
}
