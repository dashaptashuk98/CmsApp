import { useQuery } from "@tanstack/vue-query";
import { QUERY_KEYS } from "~/constants/api";

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
    queryKey: [QUERY_KEYS.EMPLOYEES, endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: EmployeeCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: EmployeeCard) => ({
          id: item.id,
          name: item.name ?? "",
          description: item.description ?? "",
          words: item.words ?? "",
          position: item.position ?? "",
          logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
        })) ?? []
      );
    },
  });
};
