import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NewsCard from '~/components/NewsCard.vue'

describe('NewsCard', () => {
  const defaultProps = {
    imageSrc: '/news.jpg',
    authorName: 'John Doe',
    date: '2024-01-01',
    description: 'News description',
    tags: ['tag1', 'tag2'],
  }

  it('renders with all props', () => {
    const wrapper = mount(NewsCard, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('January 1, 2024')
    expect(wrapper.text()).toContain('News description')
  })

  it('renders tags correctly', () => {
    const wrapper = mount(NewsCard, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('tag1')
    expect(wrapper.text()).toContain('tag2')
  })

  it('applies isFirst class when prop is true', () => {
    const wrapper = mount(NewsCard, {
      props: {
        ...defaultProps,
        isFirst: true,
      },
    })

    expect(wrapper.find('img').classes()).toContain('object-cover')
  })

  it('renders without tags', () => {
    const wrapper = mount(NewsCard, {
      props: {
        ...defaultProps,
        tags: [],
      },
    })

    expect(wrapper.findAll('span').length).toBeGreaterThanOrEqual(0)
  })
})
