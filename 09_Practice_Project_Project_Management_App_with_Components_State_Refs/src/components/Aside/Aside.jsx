import { useState, useRef } from 'react';

import './Aside.scss';

export default function Aside(props) {
  const setFormStatetHandler = (status) => {
    props.onSetFormState(status);
  };
  return (
    <aside>
      <h2 className="u-mb-5">YOUR PROJECTS</h2>
      <button className="btn" onClick={() => setFormStatetHandler(true)}>
        + Add Project
      </button>
    </aside>
  );
}
