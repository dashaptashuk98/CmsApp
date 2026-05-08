import { useQuery } from "@tanstack/vue-query";

export interface EmployeeCard {
  id: number;
  name: string;
  description: string;
  logo?: { url: string };
  words: string;
  position: string;
}

export const useEmployeesData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: ["employees", endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: EmployeeCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: EmployeeCard) => ({
          id: item.id,
          name: item.name ?? null,
          description: item.description ?? null,
          words: item.words ?? null,
          position: item.position ?? null,
          logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
        })) ?? []
      );
    },
  });
};
