import { useQuery } from "@tanstack/vue-query";
import type { StrapiHeroItem } from "~/types";

export const useHeroData = async (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["hero", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: StrapiHeroItem[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: StrapiHeroItem) => ({
          title: item.title?.[0]?.children?.[0]?.text ?? null,
          description: item.decription?.[0]?.children?.[0]?.text ?? null,
          imgUrl: item.img?.[0]?.url ? `${config.public.strapiUrl}${item.img[0].url}` : null,
        })) ?? []
      );
    },
  });
};
