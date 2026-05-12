import { useQuery } from "@tanstack/vue-query";
import { QUERY_KEYS } from "~/constants/api";

export interface CareerCard {
  id: number;
  title: string;
  description: string;
  liItem: string;
}

export const useCareerData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.CAREERS, endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: CareerCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: CareerCard) => ({
          id: item.id,
          name: item.title ?? "",
          description: item.description ?? "",
          liItem: item.liItem ?? "",
        })) ?? []
      );
    },
  });
};
