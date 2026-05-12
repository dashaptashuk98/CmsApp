import { useQuery } from "@tanstack/vue-query";
import type { NewsItem, NewsResponse } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const useNotionData = async (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.NOTIONS, endpoint],
    queryFn: async () => {
      const response = await $fetch<NewsResponse>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: NewsItem) => ({
          id: item.id,
          authorName: item.authorName ?? "",
          data: item.data ?? "",
          description: item.description ?? "",
          logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
          tags: item.tags ?? [],
        })) ?? []
      );
    },
  });
};
