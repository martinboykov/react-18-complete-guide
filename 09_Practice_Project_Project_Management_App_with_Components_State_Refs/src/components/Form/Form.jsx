import { useState, useRef } from 'react';
import './Form.scss';

export default function Form(props) {
  let formRef = useRef();
  const setFormStatetHandler = (val) => {
    props.onSetFormState(val);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const formData = new FormData(formRef.current);
    const fields = Object.fromEntries(formData);
    fields.id = Date.now();
    console.log();
    for (var pair of formData.entries()) {
      if (!pair[1]) {
        isValid = false;
      }
    }
    console.log("🚀 ~ file: Form.jsx:23 ~ onSubmit ~ isValid:", isValid)
    if (isValid) {
      props.onAddProject(fields);
      props.onSetFormState(false);
    }
    formRef.current.reset();
  };
  return (
    <form ref={formRef} className="u-mt-5" onSubmit={onSubmit}>
      <div className="u-df u-fg-1 u-jcfe">
        <button
          className="btn btn-link u-color-black-light"
          type="button"
          onClick={() => setFormStatetHandler(false)}>
          Cancel
        </button>
        <button type="submit" className="btn u-color-white">
          Save
        </button>
      </div>
      <label className="form-group">
        <h3 className="u-mb-0-5">TITLE</h3>
        <input type="text" name="title" />
      </label>
      <label className="form-group">
        <h3 className="u-mb-0-5">DESCRIPTION</h3>
        <textarea name="description" id="" cols="30" rows="5"></textarea>
      </label>
      <label className="form-group">
        <h3 className="u-mb-0-5">DUE DATE</h3>
        <input type="date" name="date" />
      </label>
    </form>
  );
}
