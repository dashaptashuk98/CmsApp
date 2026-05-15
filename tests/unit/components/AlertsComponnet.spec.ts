import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import AlertsComponnet from '~/components/AlertsComponnet.vue'

describe('AlertsComponnet', () => {
  const defaultProps = {
    title: 'Alert Title',
    description: 'Alert Description',
    buttonText: 'Click Here',
  }

  it('renders title, description and button', () => {
    const wrapper = mount(AlertsComponnet, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Alert Title')
    expect(wrapper.text()).toContain('Alert Description')
    expect(wrapper.text()).toContain('Click Here')
  })

  it('applies custom background color', () => {
    const wrapper = mount(AlertsComponnet, {
      props: {
        ...defaultProps,
        bgColor: 'bg-red-500',
      },
    })

    expect(wrapper.classes()).toContain('bg-red-500')
  })

  it('applies default background color when not provided', () => {
    const wrapper = mount(AlertsComponnet, {
      props: defaultProps,
    })

    expect(wrapper.classes()).toContain('bg-[#EAF0F1]')
  })

  it('applies light text color', () => {
    const wrapper = mount(AlertsComponnet, {
      props: {
        ...defaultProps,
        textColor: 'light',
      },
    })

    const title = wrapper.find('h2')
    expect(title.classes()).toContain('text-white')
  })

  it('applies dark text color by default', () => {
    const wrapper = mount(AlertsComponnet, {
      props: defaultProps,
    })

    const title = wrapper.find('h2')
    expect(title.classes()).toContain('text-[#222E31]')
  })
})
