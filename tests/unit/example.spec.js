import { shallowMount } from '@vue/test-utils'
import BaseButton from '@/components/BaseButton.vue'

describe('BaseButton.vue', () => {
  it('renders a button with inner text and click it', () => {
    const onClick = jest.fn();
    const buttonText = 'button';
    const wrapper = shallowMount(BaseButton, {
      props: { onClick },
      slots: { default: buttonText },
    });

    wrapper.trigger('click');

    expect(wrapper.text()).toBe(buttonText);
    expect(onClick).toHaveBeenCalledTimes(1);
  })
})
