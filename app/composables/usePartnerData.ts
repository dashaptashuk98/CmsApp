import type { Partner, PartnerResponse } from "~/types";

export const usePartnerData = async (endpoint: string) => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(`${config.public.strapiUrl}/api/${endpoint}?populate=*`, {
    transform: (res: PartnerResponse) =>
      res.data?.map((item: Partner) => ({
        id: item.id,
        title: item.title ?? "",
        subtitle: item.desc ?? "",
        description: item.text ?? "",
        logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
        backgroundImage: item.bg?.url ? `${config.public.strapiUrl}${item.bg.url}` : "",
      })) ?? [],
  });

  if (error.value) {
    showError({
      statusCode: error.value.statusCode,
      statusMessage: "Не удалось загрузить данные",
      fatal: true,
    });
  }
  return { data };
};
