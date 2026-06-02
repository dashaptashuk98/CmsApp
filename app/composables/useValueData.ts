import { useQuery } from "@tanstack/vue-query";
import type { Values } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const useValueData = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.VALUES || QUERY_KEYS.COMMITMENTS, endpoint],
    queryFn: async () => {
      const response = await $fetch<{ data: Values[] }>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return response.data ?? [];
    },
  });
};
