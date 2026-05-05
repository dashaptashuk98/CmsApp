import type { StrapiResponse, StrapiHeroItem } from "~/types";

export const useHeroData = async (endpoint: string) => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(`${config.public.strapiUrl}/api/${endpoint}?populate=*`, {
    transform: (res: StrapiResponse) => {
      return (
        res.data?.map((item: StrapiHeroItem) => ({
          title: item.title?.[0]?.children?.[0]?.text ?? null,
          description: item.decription?.[0]?.children?.[0]?.text ?? null,
          imgUrl: item.img?.[0]?.url ? `${config.public.strapiUrl}${item.img[0].url}` : null,
        })) ?? []
      );
    },
  });

  if (error.value) {
    showError({
      statusCode: error.value.statusCode,
      statusMessage: "Не удалось загрузить данные",
      fatal: true,
    });
  }
  return {
    data,
    error,
    imageUrl: computed(() => data.value?.[0]?.imgUrl),
  };
};
