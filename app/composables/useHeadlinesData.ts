import { useQuery } from "@tanstack/vue-query";
import type { Headline } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const useHeadlinesData = (endpoint: string, page: Ref<number> = ref(1)) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.HEADLINES, endpoint, page],
    queryFn: async () => {
      const pageSize = 6;
      const response = await $fetch<{ data: Headline[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*&pagination[page]=${page.value}&pagination[pageSize]=${pageSize}`
      );

      return (
        response.data?.map((item: Headline) => ({
          id: item.id,
          title: item.title ?? "",
          author: item.author ?? "",
          date: item.date ?? "",
          description: item.description ?? "",
          logo: item.logo,
          imageUrl: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
          tags: item.tags ?? [],
          ContentBlock: item.ContentBlock ?? [],
        })) ?? []
      );
    },
  });
};
