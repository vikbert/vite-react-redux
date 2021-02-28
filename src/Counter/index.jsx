import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterAction';

export default function Counter() {
  const reduxCounter = useSelector((state) => state.reduxCounter);
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>
        Count is: {reduxCounter}
      </button>
    </>
  );
}
