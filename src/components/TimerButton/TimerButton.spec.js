import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import TimerButton from '.'

describe('<TimerButton />', () => {
  it('should renders a button', () => {
    const {container} = render(<TimerButton buttonValue="Save" buttonAction={jest.fn()}/>);
    
    expect(screen.getByText('Save')).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.firstChild).toMatchSnapshot();
  })

  it('should call a method when button is clicked', () => {
    const saveAction = jest.fn();

    render(<TimerButton buttonAction={saveAction} buttonValue="Save"/>);

    userEvent.click(screen.getByText('Save'));

    expect(saveAction).toBeCalledTimes(1);
  })
})