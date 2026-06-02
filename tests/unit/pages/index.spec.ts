import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { ref } from "vue";
import IndexPage from "../../../app/pages/index.vue";
vi.mock("~/composables/useHeroData", () => ({
  useHeroData: vi.fn(() => ({ data: ref([]) })),
}));

vi.mock("~/composables/usePartnerData", () => ({
  usePartnerData: vi.fn(() => ({ data: ref([]) })),
}));

vi.mock("~/composables/useNotionData", () => ({
  useNotionData: vi.fn(() => ({ data: ref([]) })),
}));

vi.mock("@tanstack/vue-query", () => ({
  useQuery: vi.fn(() => ({ data: ref([]) })),
  QueryClient: vi.fn(),
}));

vi.mock("~/components/HeroComponent.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/components/CardComponent.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/components/MapComponent.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/components/PartnerComponent.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/components/NewsCard.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/components/AlertsComponnet.vue", () => ({
  default: { template: "<div></div>" },
}));

vi.mock("~/constants/api", () => ({
  API_ENDPOINTS: {
    NEWS: "news",
    PARTNERS: "partners",
    NOTIONS: "notions",
    SERVICES: "services",
  },
  QUERY_KEYS: {
    SERVICES: "services",
  },
}));

vi.mock("#app", () => ({
  useRuntimeConfig: () => ({
    public: {
      strapiUrl: "http://localhost:1337",
    },
  }),
}));

describe("IndexPage", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders index page", () => {
    const wrapper = mount(IndexPage, {
      global: {
        stubs: {
          UMain: true,
          UButton: true,
        },
      },
    });
    expect(wrapper.exists()).toBe(true);
  });
});
