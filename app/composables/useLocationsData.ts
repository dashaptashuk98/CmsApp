import { useQuery } from "@tanstack/vue-query";
import type { LocationResponse, Location } from "~/types";
import { QUERY_KEYS } from "~/constants/api";

export const useMapLocations = (endpoint: string) => {
  const config = useRuntimeConfig();

  return useQuery({
    queryKey: [QUERY_KEYS.LOCATIONS, endpoint],
    queryFn: async () => {
      const response = await $fetch<LocationResponse>(
        `${config.public.strapiUrl}/api/${endpoint}?populate=*`
      );
      return (
        response.data?.map((item: Location) => ({
          id: item.id,
          manager: item.Manager,
          phone: item.Phone,
          email: item.Email,
          name: item.Name,
          address: item.Address,
          distance: item.Distance || "0.5 mi",
          lat: item.Latitude,
          lng: item.Longitude,
        })) ?? []
      );
    },
  });
};
