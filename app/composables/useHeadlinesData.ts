import { useQuery } from "@tanstack/vue-query";
import type { Headline } from "~/types";

export const useHeadlinesData = (endpoint: string, page: Ref<number> = ref(1)) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["headlines", endpoint, page],
    queryFn: async () => {
      const pageSize = 3;
      const response = await $fetch<{ data: Headline[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*&pagination[page]=${page.value}&pagination[pageSize]=${pageSize}`
      );

      return (
        response.data?.map((item: Headline) => ({
          id: item.id,
          title: item.title ?? null,
          author: item.author ?? null,
          date: item.date ?? null,
          description: item.description ?? null,
          logo: item.logo,
          imageUrl: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : null,
          tags: item.tags ?? [],
          ContentBlock: item.ContentBlock ?? [],
        })) ?? []
      );
    },
  });
};
