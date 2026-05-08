import { useQuery } from "@tanstack/vue-query";

export interface CareerCard {
  id: number;
  title: string;
  description: string;
  liItem: string;
}

export const useCareerData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["careers", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: CareerCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: CareerCard) => ({
          id: item.id,
          name: item.title ?? null,
          description: item.description ?? null,
          liItem: item.liItem ?? null,
        })) ?? []
      );
    },
  });
};
