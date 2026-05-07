import { useQuery } from "@tanstack/vue-query";
import type { NewsTag } from "~/types";

export const useTagsData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["tags", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: NewsTag[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: NewsTag) => ({
          name: item.name,
        })) ?? []
      );
    },
  });
};
