import { shallowMount } from "@vue/test-utils";
import BaseSelect from '@/components/BaseSelect.vue'

describe('BaseSelect', () => {
    it('displays the label if it is passed a label property', () => {
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                label: 'Test Select Label',
            },
        });
        expect(wrapper.find('label').text()).toBe('Test Select Label')
    })

    it('Check if selected value is correct', () => {
        const wrapper = shallowMount(BaseSelect, {
            propsData: {
                options: ['valencia', 'sevilla']
            }
        })

        const select = wrapper.find('select')
        expect(select.element.value).toBe('valencia')

        select.setValue('sevilla')

        expect(select.element.value).toBe('sevilla')

    })
})