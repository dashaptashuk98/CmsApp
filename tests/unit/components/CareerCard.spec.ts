import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CareerCard from "~/components/CareerCard.vue";

describe("CareerCard", () => {
  const defaultProps = {
    title: "Delivery",
    employmentType: "Fulltime",
    location: "London",
    workType: "Onsite",
    description: "Get essential equipment",
    postedDate: "December 12, 2024",
  };

  it("renders all props correctly", () => {
    const wrapper = mount(CareerCard, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("Delivery");
    expect(wrapper.text()).toContain("Fulltime");
    expect(wrapper.text()).toContain("London");
    expect(wrapper.text()).toContain("Onsite");
    expect(wrapper.text()).toContain("Get essential equipment");
    expect(wrapper.text()).toContain("December 12, 2024");
  });

  it("has LEARN MORE button", () => {
    const wrapper = mount(CareerCard, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("LEARN MORE");
  });

  it("displays Posted on date", () => {
    const wrapper = mount(CareerCard, {
      props: defaultProps,
    });

    expect(wrapper.text()).toContain("Posted on");
  });

  it("has correct structure with flex layout", () => {
    const wrapper = mount(CareerCard, {
      props: defaultProps,
    });

    expect(wrapper.classes()).toContain("flex");
    expect(wrapper.classes()).toContain("flex-col");
    expect(wrapper.classes()).toContain("h-full");
  });
});
