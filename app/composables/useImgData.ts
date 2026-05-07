import { useQuery } from "@tanstack/vue-query";
import type { StrapiHeroItem } from "~/types";
export const useImgData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["images", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: StrapiHeroItem[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item) => ({
          id: item.id,
          img:
            item.img?.map((image) => ({
              url: image.url ? `${config.public.strapiUrl}${image.url}` : null,
            })) ?? [],
        })) ?? []
      );
    },
  });
};
