import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CareerComponent from '~/components/CareerComponent.vue'
import EmployeeComponent from '~/components/EmployeeComponent.vue'

describe('CareerComponent', () => {
  const defaultProps = {
    title: 'Career Title',
    description: 'Career Description',
    liItem: 'Item 1. Item 2. Item 3',
  }

  it('renders title and description', () => {
    const wrapper = mount(CareerComponent, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Career Title')
    expect(wrapper.text()).toContain('Career Description')
  })

  it('splits and renders list items', () => {
    const wrapper = mount(CareerComponent, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('Item 1')
    expect(wrapper.text()).toContain('Item 2')
    expect(wrapper.text()).toContain('Item 3')
  })

  it('has correct background color', () => {
    const wrapper = mount(CareerComponent, {
      props: defaultProps,
    })

    expect(wrapper.classes()).toContain('bg-[#F7F7F7]')
  })
})

describe('EmployeeComponent', () => {
  const defaultProps = {
    imageSrc: '/employee.jpg',
    name: 'John Doe',
    words: 'Great company',
    description: 'Employee description',
    position: 'Manager',
  }

  it('renders all employee information', () => {
    const wrapper = mount(EmployeeComponent, {
      props: defaultProps,
    })

    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('Great company')
    expect(wrapper.text()).toContain('Employee description')
    expect(wrapper.text()).toContain('Manager')
  })

  it('renders employee image', () => {
    const wrapper = mount(EmployeeComponent, {
      props: defaultProps,
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/employee.jpg')
  })

  it('has rounded image', () => {
    const wrapper = mount(EmployeeComponent, {
      props: defaultProps,
    })

    const img = wrapper.find('img')
    expect(img.classes()).toContain('rounded-full')
  })
})
