import './styles.css';
import PropTypes from 'prop-types';

const TimerButton = ({ buttonAction, buttonValue}) => {

  return (
    <div className='button-container' onClick={() => buttonAction()}>
      <p>{buttonValue}</p>
    </div>
  )
}

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired
};

export default TimerButton;