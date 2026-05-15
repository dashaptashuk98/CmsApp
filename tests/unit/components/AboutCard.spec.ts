import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AboutCard from '~/components/AboutCard.vue'

describe('AboutCard', () => {
  const defaultProps = {
    title: 'Our Mission',
    description: 'We deliver excellence',
    buttonText: 'Learn More',
  }

  it('renders title, description and button', () => {
    const wrapper = mount(AboutCard, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Our Mission')
    expect(wrapper.text()).toContain('We deliver excellence')
    expect(wrapper.text()).toContain('Learn More')
  })

  it('has correct background color', () => {
    const wrapper = mount(AboutCard, {
      props: defaultProps,
    })

    expect(wrapper.classes()).toContain('bg-[#F7F7F7]')
  })

  it('has max-width constraint', () => {
    const wrapper = mount(AboutCard, {
      props: defaultProps,
    })

    expect(wrapper.attributes('style')).toContain('456px')
  })

  it('title has correct color', () => {
    const wrapper = mount(AboutCard, {
      props: defaultProps,
    })

    const title = wrapper.find('h3')
    expect(title.classes()).toContain('text-[#00708B]')
  })
})
