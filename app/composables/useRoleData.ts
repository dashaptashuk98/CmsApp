import { useQuery } from "@tanstack/vue-query";
import { QUERY_KEYS } from "~/constants/api";

export interface RoleCard {
  id: number;
  title: string;
  description: string;
  employmentType: string;
  workType: string;
  location: string;
  date: string;
}

export const useRoleData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.ROLE, endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: RoleCard[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: RoleCard) => ({
          id: item.id,
          title: item.title ?? "",
          description: item.description ?? "",
          date: item.date ?? "",
          location: item.location ?? "",
          employmentType: item.employmentType ?? "",
          workType: item.workType ?? "",
        })) ?? []
      );
    },
  });
};
