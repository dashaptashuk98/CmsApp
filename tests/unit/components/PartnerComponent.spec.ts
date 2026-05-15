import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import PartnerComponent from '~/components/PartnerComponent.vue'

describe('PartnerComponent', () => {
  const defaultProps = {
    title: 'Partner Title',
    subtitle: 'Partner Subtitle',
    description: 'Partner Description',
    logo: '/logo.png',
    backgroundImage: '/bg.jpg',
    buttonText: 'Learn More',
    buttonLink: '#',
  }

  it('renders all props correctly', () => {
    const wrapper = mount(PartnerComponent, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Partner Title')
    expect(wrapper.text()).toContain('Partner Subtitle')
    expect(wrapper.text()).toContain('Partner Description')
    expect(wrapper.text()).toContain('Learn More')
  })

  it('renders logo image', () => {
    const wrapper = mount(PartnerComponent, {
      props: defaultProps,
    })

    const logo = wrapper.find('.ocean__logo')
    expect(logo.attributes('src')).toBe('/logo.png')
  })

  it('renders background image', () => {
    const wrapper = mount(PartnerComponent, {
      props: defaultProps,
    })

    const bg = wrapper.find('.ocean__pic')
    expect(bg.attributes('src')).toBe('/bg.jpg')
  })

  it('emits buttonClick event when button is clicked', async () => {
    const wrapper = mount(PartnerComponent, {
      props: defaultProps,
    })

    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('buttonClick')).toBeTruthy()
    expect(wrapper.emitted('buttonClick')?.[0]).toEqual(['#'])
  })

  it('uses default button text', () => {
    const wrapper = mount(PartnerComponent, {
      props: {
        ...defaultProps,
        buttonText: undefined,
      },
    })

    expect(wrapper.text()).toContain('Learn more')
  })
})
