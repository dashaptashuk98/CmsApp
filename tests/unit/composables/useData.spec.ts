/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { useHeroData } from "~/composables/useHeroData";
import { usePartnerData } from "~/composables/usePartnerData";
import { useNotionData } from "~/composables/useNotionData";
import { useMapLocations } from "~/composables/useLocationsData";

interface StrapiLocation {
  id: number;
  Manager?: string;
  Phone?: string;
  Email?: string;
  Name?: string;
  Address?: string;
  Distance?: string | null;
  Latitude?: number;
  Longitude?: number;
}

interface StrapiHeroItem {
  title?: Array<{ children?: Array<{ text?: string }> }>;
  decription?: Array<{ children?: Array<{ text?: string }> }>;
  img?: Array<{ url?: string }>;
}

interface StrapiPartnerItem {
  id: number;
  title?: string;
  desc?: string;
  text?: string;
  logo?: { url?: string } | null;
  bg?: { url?: string } | null;
}

interface StrapiNotionItem {
  id: number;
  authorName?: string;
  description?: string;
  data?: string;
  logo?: { url?: string } | null;
  tags?: string[];
}

type QueryFn<T = unknown> = () => Promise<T>;

const originalFetch = global.$fetch;
global.$fetch = vi.fn(() => Promise.resolve({})) as unknown as typeof global.$fetch;

vi.mock("#app", () => ({
  useRuntimeConfig: () => ({
    public: {
      strapiUrl: "http://localhost:1337",
    },
  }),
}));

vi.mock("@tanstack/vue-query", () => ({
  useQuery: vi.fn(() => ({ data: null, error: null, isLoading: false })),
}));

vi.mock("~/constants/api", () => ({
  QUERY_KEYS: {
    LOCATIONS: "locations",
    HERO: "hero",
    PARTNERS: "partners",
    NOTIONS: "notions",
  },
}));

describe("Composables", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  afterAll(() => {
    global.$fetch = originalFetch;
  });

  describe("useMapLocations", () => {
    it("calls useQuery with correct parameters", async () => {
      const { useQuery } = await import("@tanstack/vue-query");

      await useMapLocations("london-endpoints");

      expect(useQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          queryKey: ["locations", "london-endpoints"],
          queryFn: expect.any(Function),
        })
      );
    });

    it("returns core data structure from useQuery", async () => {
      const result = await useMapLocations("test-zone");

      expect(result).toHaveProperty("data");
      expect(result).toHaveProperty("error");
      expect(result).toHaveProperty("isLoading");
    });

    it("transforms Strapi locations response correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useMapLocations("offices");
      expect(capturedQueryFn).toBeDefined();

      const mockStrapiResponse = {
        data: [
          {
            id: 42,
            Manager: "John Doe",
            Phone: "+1234567",
            Email: "john@company.com",
            Name: "Main Office",
            Address: "Baker St. 221B",
            Distance: "1.5 mi",
            Latitude: 51.5074,
            Longitude: -0.1278,
          },
        ] as StrapiLocation[],
      };

      vi.mocked(global.$fetch).mockResolvedValueOnce(mockStrapiResponse);

      const result = await capturedQueryFn?.();

      expect(result).toEqual([
        {
          id: 42,
          manager: "John Doe",
          phone: "+1234567",
          email: "john@company.com",
          name: "Main Office",
          address: "Baker St. 221B",
          distance: "1.5 mi",
          lat: 51.5074,
          lng: -0.1278,
        },
      ]);
      expect(global.$fetch).toHaveBeenCalledWith("http://localhost:1337/api/offices?populate=*");
    });

    it("fallback to default distance when item.Distance is missing", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useMapLocations("offices");

      vi.mocked(global.$fetch).mockResolvedValueOnce({
        data: [
          {
            id: 1,
            Distance: null,
            Name: "Remote Office",
          } as StrapiLocation,
        ],
      });

      const result = (await capturedQueryFn?.()) as any[];
      expect(result[0].distance).toBe("0.5 mi");
    });

    it("returns empty array when response.data is null or undefined", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useMapLocations("empty-offices");

      vi.mocked(global.$fetch).mockResolvedValueOnce({ data: null });

      const result = await capturedQueryFn?.();
      expect(result).toEqual([]);
    });
  });

  describe("useHeroData", () => {
    it("calls useQuery with correct parameters", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      await useHeroData("news");
      expect(useQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          queryKey: ["hero", "news"],
          queryFn: expect.any(Function),
        })
      );
    });

    it("returns data structure", async () => {
      const result = await useHeroData("news");
      expect(result).toHaveProperty("data");
      expect(result).toHaveProperty("error");
      expect(result).toHaveProperty("isLoading");
    });

    it("transforms Strapi response correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useHeroData("test");
      expect(capturedQueryFn).toBeDefined();

      const mockResponse = {
        data: [
          {
            title: [{ children: [{ text: "Hero Title" }] }],
            decription: [{ children: [{ text: "Hero Description" }] }],
            img: [{ url: "/uploads/hero.jpg" }],
          },
        ] as StrapiHeroItem[],
      };

      vi.mocked(global.$fetch).mockResolvedValueOnce(mockResponse);

      const result = await capturedQueryFn?.();
      expect(result).toEqual([
        {
          title: "Hero Title",
          description: "Hero Description",
          imgUrl: "http://localhost:1337/uploads/hero.jpg",
        },
      ]);
      expect(global.$fetch).toHaveBeenCalledWith("http://localhost:1337/api/test?populate=*");
    });

    it("returns empty array when response.data is empty", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useHeroData("empty");
      vi.mocked(global.$fetch).mockResolvedValueOnce({ data: [] });
      const result = await capturedQueryFn?.();
      expect(result).toEqual([]);
    });

    it("returns null for missing fields", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useHeroData("missing");
      vi.mocked(global.$fetch).mockResolvedValueOnce({
        data: [{ title: [], decription: undefined, img: null }],
      });
      const result = (await capturedQueryFn?.()) as any[];
      expect(result[0]).toEqual({
        title: null,
        description: null,
        imgUrl: null,
      });
    });

    it("builds correct image URL", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useHeroData("img-test");
      vi.mocked(global.$fetch).mockResolvedValueOnce({
        data: [
          { img: [{ url: "/images/pic.png" }], title: [], decription: [] },
        ] as StrapiHeroItem[],
      });
      const result = (await capturedQueryFn?.()) as any[];
      expect(result[0].imgUrl).toBe("http://localhost:1337/images/pic.png");
    });
  });

  describe("usePartnerData", () => {
    it("calls useQuery with correct parameters", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      await usePartnerData("partners");
      expect(useQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          queryKey: expect.arrayContaining(["partners"]),
          queryFn: expect.any(Function),
        })
      );
    });

    it("returns data structure", async () => {
      const result = await usePartnerData("partners");
      expect(result).toHaveProperty("data");
    });

    it("transforms Strapi response correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await usePartnerData("test");
      expect(capturedQueryFn).toBeDefined();

      const mockResponse = {
        data: [
          {
            id: 1,
            title: "Partner Title",
            desc: "Partner Subtitle",
            text: "Partner Description",
            logo: { url: "/uploads/logo.png" },
            bg: { url: "/uploads/bg.jpg" },
          },
        ] as StrapiPartnerItem[],
      };

      vi.mocked(global.$fetch).mockResolvedValueOnce(mockResponse);

      const result = await capturedQueryFn?.();
      expect(result).toEqual([
        {
          id: 1,
          title: "Partner Title",
          subtitle: "Partner Subtitle",
          description: "Partner Description",
          logo: "http://localhost:1337/uploads/logo.png",
          backgroundImage: "http://localhost:1337/uploads/bg.jpg",
        },
      ]);
      expect(global.$fetch).toHaveBeenCalledWith("http://localhost:1337/api/test?populate=*");
    });

    it("handles empty logo and bg url correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await usePartnerData("test");
      vi.mocked(global.$fetch).mockResolvedValueOnce({
        data: [
          {
            id: 1,
            title: "Test",
            desc: "Test desc",
            text: "Test text",
            logo: null,
            bg: null,
          } as StrapiPartnerItem,
        ],
      });

      const result = (await capturedQueryFn?.()) as any[];
      expect(result[0].logo).toBe("");
      expect(result[0].backgroundImage).toBe("");
    });
  });

  describe("useNotionData", () => {
    it("calls useQuery with correct parameters", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      await useNotionData("notions");
      expect(useQuery).toHaveBeenCalledWith(
        expect.objectContaining({
          queryKey: expect.arrayContaining(["notions"]),
          queryFn: expect.any(Function),
        })
      );
    });

    it("returns data structure", async () => {
      const result = await useNotionData("notions");
      expect(result).toHaveProperty("data");
    });

    it("transforms Strapi response correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useNotionData("test");
      expect(capturedQueryFn).toBeDefined();

      const mockResponse = {
        data: [
          {
            id: 1,
            authorName: "Partner",
            description: "Partner Subtitle",
            data: "December 12, 2025",
            logo: { url: "/uploads/logo.png" },
            tags: ["tag1", "tag2"],
          },
        ] as StrapiNotionItem[],
      };

      vi.mocked(global.$fetch).mockResolvedValueOnce(mockResponse);

      const result = await capturedQueryFn?.();
      expect(result).toEqual([
        {
          id: 1,
          authorName: "Partner",
          description: "Partner Subtitle",
          data: "December 12, 2025",
          logo: "http://localhost:1337/uploads/logo.png",
          tags: ["tag1", "tag2"],
        },
      ]);
      expect(global.$fetch).toHaveBeenCalledWith("http://localhost:1337/api/test?populate=*");
    });

    it("handles empty logo url correctly", async () => {
      const { useQuery } = await import("@tanstack/vue-query");
      let capturedQueryFn: QueryFn | undefined;

      vi.mocked(useQuery).mockImplementationOnce((options: any) => {
        capturedQueryFn = options.queryFn as QueryFn;
        return { data: null, error: null, isLoading: false } as any;
      });

      await useNotionData("test");
      vi.mocked(global.$fetch).mockResolvedValueOnce({
        data: [
          {
            id: 1,
            authorName: "Test",
            description: "Test desc",
            data: "2025-01-01",
            logo: null,
            tags: [],
          } as StrapiNotionItem,
        ],
      });

      const result = (await capturedQueryFn?.()) as any[];
      expect(result[0].logo).toBe("");
      expect(result[0].tags).toEqual([]);
    });
  });
});
