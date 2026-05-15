import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CardComponent from '~/components/CardComponent.vue'

describe('CardComponent', () => {
  it('renders properly with props', () => {
    const wrapper = mount(CardComponent, {
      props: {
        imageSrc: '/test-image.jpg',
        title: 'Test Title',
        description: 'Test Description',
      },
    })

    expect(wrapper.text()).toContain('Test Title')
    expect(wrapper.text()).toContain('Test Description')
    expect(wrapper.find('img').attributes('src')).toBe('/test-image.jpg')
  })

  it('renders with correct classes', () => {
    const wrapper = mount(CardComponent, {
      props: {
        imageSrc: '/test.jpg',
        title: 'Title',
        description: 'Desc',
      },
    })

    expect(wrapper.classes()).toContain('bg-white')
    expect(wrapper.classes()).toContain('rounded-lg')
  })

  it('displays title in correct color', () => {
    const wrapper = mount(CardComponent, {
      props: {
        imageSrc: '/test.jpg',
        title: 'Test',
        description: 'Desc',
      },
    })

    const title = wrapper.find('h3')
    expect(title.classes()).toContain('text-[#00708B]')
  })
})
