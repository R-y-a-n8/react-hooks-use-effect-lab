import React, { useEffect } from 'react';

function Question({ onAnswered }) {
  const [timeRemaining, setTimeRemaining] = React.useState(10); // Initial time remaining

  useEffect(() => {
    const timer = setTimeout(() => {
      // Decrease the time remaining by 1 every second
      setTimeRemaining(prevTime => prevTime - 1);
    }, 1000);

    // Cleanup function to clear the timer if the component unmounts or the effect re-runs
    return () => clearTimeout(timer);
  }, [timeRemaining]); // Re-run effect whenever timeRemaining changes

  useEffect(() => {
    // Check if timeRemaining hits 0
    if (timeRemaining === 0) {
      // Reset timeRemaining back to 10 seconds
      setTimeRemaining(10);
      // Call the onAnswered callback prop with a value of false
      onAnswered(false);
    }
  }, [timeRemaining, onAnswered]); // Re-run effect whenever timeRemaining or onAnswered changes

  return (
    <div>
      <h2>Question Component</h2>
      <p>Time Remaining: {timeRemaining} seconds</p>
      {/* Your component content goes here */}
    </div>
  );
}

export default Question;

