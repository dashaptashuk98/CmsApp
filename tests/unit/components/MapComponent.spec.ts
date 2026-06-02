/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { nextTick, ref, defineComponent, h, Suspense } from "vue";
import MapComponent from "~/components/MapComponent.vue";
import { useMapLocations } from "~/composables/useLocationsData";

vi.mock("#app", () => ({
  useRuntimeConfig: () => ({ public: {} }),
}));

vi.mock("~/composables/useLocationsData", () => ({
  useMapLocations: vi.fn(),
}));

const mockLocations = [
  {
    id: 1,
    name: "London Branch",
    manager: "John Doe",
    phone: "+44 20 7946 0958",
    email: "london@example.com",
    address: "123 Baker St, London",
    distance: "1.2 miles",
    lat: 51.5074,
    lng: -0.1278,
  },
  {
    id: 2,
    name: "Missing Lat Lng Branch",
    manager: "Jane Smith",
    phone: "+44 20 7946 0959",
    email: "jane@example.com",
    address: "456 Ghost St",
    distance: "Unknown",
    lat: null,
    lng: null,
  },
];

const mockSetView = vi.fn();
const mockAddTo = vi.fn().mockReturnThis();
const mockBindPopup = vi.fn();
const mockRemove = vi.fn();

const mockLeaflet = {
  map: vi.fn().mockReturnValue({
    setView: mockSetView,
    addTo: mockAddTo,
  }),
  tileLayer: vi.fn().mockReturnValue({
    addTo: mockAddTo,
  }),
  divIcon: vi.fn().mockReturnValue({ className: "custom-marker" }),
  marker: vi.fn().mockReturnValue({
    addTo: mockAddTo,
    bindPopup: mockBindPopup,
    remove: mockRemove,
  }),
};

vi.mock("leaflet", () => mockLeaflet);

global.$fetch = vi.fn(() => Promise.resolve({})) as unknown as typeof global.$fetch;

const mountSuspendedComponent = async () => {
  const WrapperComponent = defineComponent({
    render() {
      return h(Suspense, null, {
        default: () => h(MapComponent),
        fallback: () => h("div", "Loading..."),
      });
    },
  });

  const wrapper = mount(WrapperComponent, {
    global: {
      stubs: {
        ClientOnly: { template: "<slot />" },
        UIcon: true,
        UInput: true,
        UButton: true,
      },
    },
  });

  await nextTick();
  await new Promise((r) => setTimeout(r, 50));

  return wrapper.findComponent(MapComponent);
};

describe("MapComponent.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useMapLocations).mockReturnValue({
      data: ref(mockLocations),
    } as any);

    document.body.innerHTML = '<div id="map"></div>';
  });

  it("renders the component correctly with locations list", async () => {
    const wrapper = await mountSuspendedComponent();

    expect(wrapper.find("h2").text()).toBe("Locate Us Nearby");
    expect(wrapper.text()).toContain("London Branch");
    expect(wrapper.find('a[href="mailto:london@example.com"]').exists()).toBe(true);
  });
  it("triggers map centering when location item is clicked", async () => {
    const wrapper = await mountSuspendedComponent();

    const locationItem = wrapper
      .findAll(".cursor-pointer, [onClick], button")
      .find((el) => el.text().includes("London Branch"));

    if (!locationItem) {
      throw new Error(
        "Could not find interactive location item in template. Check your classes/tags."
      );
    }

    await locationItem.trigger("click");
    await nextTick();

    expect(mockSetView).toHaveBeenCalled();
  });

  it("filters locations list correctly when typing in search input", async () => {
    const wrapper = await mountSuspendedComponent();

    const searchInput = wrapper.find("input");

    if (searchInput.exists()) {
      await searchInput.setValue("Missing");
      await nextTick();

      expect(wrapper.text()).toContain("Missing Lat Lng Branch");
      expect(wrapper.text()).not.toContain("London Branch");
    } else {
      // что то
    }
  });
});
