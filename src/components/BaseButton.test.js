import {render, fireEvent, screen} from '@testing-library/vue'
import BaseButton from './BaseButton.vue';

describe('BaseButton', () => {
  test('clicking the function is called', async () => {
    const onClick = jest.fn(() => (console.log('click!!')));
    const text = 'button';
    const slots = {
      default: text,
    };
    const props = {
      onClick,
    };

    render(BaseButton, { props, slots });
    await fireEvent.click(screen.getByTestId('button-id'))
    screen.debug(screen.getByText('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
})
});