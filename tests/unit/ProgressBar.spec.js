import { shallowMount } from "@vue/test-utils";
import ProgressBar from '@/components/ProgressBar.vue'


describe('ProgressBar', () => {
    const wrapper = shallowMount(ProgressBar, {
        propsData: {
            step: 1,
            maxSteps: 2
        }
    })
    const progressBar = wrapper.find('progress')
    it('The value of the component matches the value of the prop step', () => {
        expect(progressBar.element.value).toBe(1)
    })
    it('The maximum value of the component matches the value of the maxSteps prop', () => {
        expect(progressBar.element.max).toBe(2)
    })
})