import { computed, type Ref } from "vue";
import type { TransformedHeroItem } from "~/types";

export function useFindHero(data: Ref<TransformedHeroItem[] | undefined>, searchTitle: string) {
  return computed(() => {
    if (!data.value || !searchTitle) return null;
    return data.value.find((item) => item.title === searchTitle) ?? null;
  });
}
