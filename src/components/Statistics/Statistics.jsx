import PropTypes from 'prop-types';
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, calculator }) => {
    const { total: total, percentage: positive } = calculator();
    return (
    <div>
        {good || neutral || bad ? (
        <>        
            <span>Good: {good} </span>
            <span>Neutral: {neutral} </span>
            <span>Bad: {bad} </span>
            <span>Total: {total} </span>
            <span>Positive feedback: {positive}% </span>
        </>        
        ) : (
        <Notification message="There is no feedback" />
        )}
    </div>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    calculator: PropTypes.func.isRequired
}
export default Statistics; 
