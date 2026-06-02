import { useQuery } from "@tanstack/vue-query";
import type { Partner, PartnerResponse } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const usePartnerData = async (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.PARTNER, endpoint],
    queryFn: async () => {
      const response = await $fetch<PartnerResponse>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );

      return (
        response.data?.map((item: Partner) => ({
          id: item.id,
          title: item.title ?? "",
          subtitle: item.desc ?? "",
          description: item.text ?? "",
          logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
          backgroundImage: item.bg?.url ? `${config.public.strapiUrl}${item.bg.url}` : "",
        })) ?? []
      );
    },
  });
};
