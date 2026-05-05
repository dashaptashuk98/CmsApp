import type { NewsResponse, NewsItem } from "~/types";

export const useNotionData = async (endpoint: string) => {
  const config = useRuntimeConfig();
  const { data, error } = await useFetch(`${config.public.strapiUrl}/api/${endpoint}?populate=*`, {
    transform: (res: NewsResponse) =>
      res.data?.map((item: NewsItem) => ({
        id: item.id,
        authorName: item.authorName ?? "",
        data: item.data ?? "",
        description: item.description ?? "",
        logo: item.logo?.url ? `${config.public.strapiUrl}${item.logo.url}` : "",
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
