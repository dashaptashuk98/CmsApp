import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import headlineComponent from "~/components/HeadlineComponent.vue";

describe("headlineComponent", () => {
  const defaultProps = {
    imageSrc: "/news.jpg",
    authorName: "John Doe",
    date: "2024-01-01",
    description: "News description",
    title: "News",
  };

  it("renders with all props", () => {
    const wrapper = mount(headlineComponent, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("January 1, 2024");
    expect(wrapper.text()).toContain("News description");
    expect(wrapper.text()).toContain("News");
  });
  it("renders image when imageUrl is provided ", () => {
    const wrapper = mount(headlineComponent, {
      props: {
        ...defaultProps,
        imageUrl: "/news.jpg",
      },
    });

    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("/news.jpg");
  });
});
