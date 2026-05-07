import { useQuery } from "@tanstack/vue-query";
import type { AboutCard } from "~/types";

export const useAboutData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["abouts", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: AboutCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: AboutCard) => ({
          id: item.id,
          name: item.name ?? null,
          description: item.description ?? null,
          buttonText: item.buttonText ?? null,
        })) ?? []
      );
    },
  });
};
