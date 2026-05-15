import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HeroComponent from '~/components/HeroComponent.vue'

describe('HeroComponent', () => {
  const defaultProps = {
    title: 'Test Title',
    description: 'Test Description',
  }

  it('renders title and description', () => {
    const wrapper = mount(HeroComponent, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('Test Description')
  })

  it('renders button when buttonText is provided', () => {
    const wrapper = mount(HeroComponent, {
      props: {
        ...defaultProps,
        buttonText: 'Click Me',
      },
    })

    expect(wrapper.text()).toContain('Click Me')
  })

  it('renders second button when buttonText2 is provided', () => {
    const wrapper = mount(HeroComponent, {
      props: {
        ...defaultProps,
        buttonText: 'Button 1',
        buttonText2: 'Button 2',
      },
    })

    expect(wrapper.text()).toContain('Button 1')
    expect(wrapper.text()).toContain('Button 2')
  })

  it('renders image when imageUrl is provided and hideImage is false', () => {
    const wrapper = mount(HeroComponent, {
      props: {
        ...defaultProps,
        imageUrl: '/test-image.jpg',
        hideImage: false,
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/test-image.jpg')
  })

  it('hides image when hideImage is true', () => {
    const wrapper = mount(HeroComponent, {
      props: {
        ...defaultProps,
        imageUrl: '/test-image.jpg',
        hideImage: true,
      },
    })

    const img = wrapper.find('img')
    expect(img.exists()).toBe(false)
  })

  it('has correct background color', () => {
    const wrapper = mount(HeroComponent, {
      props: defaultProps,
    })

    expect(wrapper.classes()).toContain('bg-[#00708B]')
  })
})
