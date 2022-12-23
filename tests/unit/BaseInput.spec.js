import { shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/BaseInput.vue'

describe('BaseInput', () => {
    it('displays the label if it is passed a label property', () => {
        const wrapper = shallowMount(BaseInput, {
            propsData: {
                label: 'Mi etiqueta',
            },
        });
        expect(wrapper.find('label').text()).toBe('Mi etiqueta');
    });

    it('Checks if the data is correctly entered in the input.', () => {
        const wrapper = shallowMount(BaseInput);
        const input = wrapper.find('input')
        input.setValue("Valor introducido")

        expect(input.element.value).toBe("Valor introducido")
    });
});