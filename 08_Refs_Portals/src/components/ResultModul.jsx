import { useState, forwardRef } from 'react';

const ResultModal = forwardRef(function ResultModul({  result, targetTime }, ref) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form method="dialog" action="">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
