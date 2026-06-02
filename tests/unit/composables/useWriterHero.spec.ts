import { describe, it, expect } from "vitest";
import { ref } from "vue";
import { useFindHero } from "~/composables/useWriterHero";
import type { TransformedHeroItem } from "~/types";

describe("useFindHero", () => {
  const mockData: TransformedHeroItem[] = [
    {
      title: "Powering Innovation, Delivering Excellence",
      description: "Description 1",
      imgUrl: "/img1.png",
    },
    {
      title: "Our People, Our Strength",
      description: "Description 2",
      imgUrl: null,
    },
  ];

  it("should find the element by title", () => {
    const dataRef = ref<TransformedHeroItem[]>(mockData);
    const searchTitle = "Our People, Our Strength";

    const result = useFindHero(dataRef, searchTitle);

    expect(result.value).toEqual(mockData[1]);
  });

  it("should retun null, if the element with such title does not exist", () => {
    const dataRef = ref<TransformedHeroItem[]>(mockData);
    const searchTitle = "Non-existent Title";

    const result = useFindHero(dataRef, searchTitle);

    expect(result.value).toBeNull();
  });

  it("should retun null, if passed [] or undefined", () => {
    const dataRef = ref<TransformedHeroItem[] | undefined>(undefined);
    const searchTitle = "Our People, Our Strength";

    const result = useFindHero(dataRef, searchTitle);

    expect(result.value).toBeNull();
  });

  it("should retun null, if desired line empty", () => {
    const dataRef = ref<TransformedHeroItem[]>(mockData);
    const searchTitle = "";

    const result = useFindHero(dataRef, searchTitle);

    expect(result.value).toBeNull();
  });

  it("should stay reactive while data is changed", () => {
    const dataRef = ref<TransformedHeroItem[] | undefined>(undefined);
    const searchTitle = "Powering Innovation, Delivering Excellence";

    const result = useFindHero(dataRef, searchTitle);

    expect(result.value).toBeNull();

    dataRef.value = mockData;

    expect(result.value).toEqual(mockData[0]);
  });
});
