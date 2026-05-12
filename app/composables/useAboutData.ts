import { useQuery } from "@tanstack/vue-query";
import type { AboutCard } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const useAboutData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.ABOUTS, endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: AboutCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: AboutCard) => ({
          id: item.id,
          name: item.name ?? "",
          description: item.description ?? "",
          buttonText: item.buttonText ?? "",
        })) ?? []
      );
    },
  });
};
