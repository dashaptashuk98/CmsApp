import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ContactPage from '~/pages/contact.vue'

describe('Contact Page', () => {
  it('renders contact page title', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('Contact Us')
  })

  it('renders Get in Touch section', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('Get in Touch')
  })

  it('displays phone number', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('+44 (0) 123 456 7890')
  })

  it('displays email', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('info@edmundsonelectrical.co.uk')
  })

  it('has contact form', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('Send us a message')
  })

  it('has form inputs', () => {
    const wrapper = mount(ContactPage)
    expect(wrapper.text()).toContain('Send Message')
  })
})
