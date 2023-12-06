import { useState, useRef } from 'react';
import Form from '../Form/Form.jsx';

import './Main.scss';

export default function Main(props) {
  const onDelete = () => {

  };
  const setFormStatetHandler = (status) => {
    props.onSetFormState(status);
  };
  const addProjectHandler = (newProject) => {
    props.onAddProject(newProject);
  };

  return (
    <main className="u-df u-fdc u-jfs u-aic u-w-100">
      {!props.formState && props.projects.length === 0 && (
        <div className="empty u-df u-fdc u-aic u-fg-2 u-mt-10">
          <img src="/logo.png" alt="" />
          <h2>No Project Selected</h2>
          <p>Select a project or get started with a new one</p>
          <button className="btn" onClick={setFormStatetHandler}>
            Create new project
          </button>
        </div>
      )}
      {!props.formState && props.projects.length > 0 && (
        <ul className="u-mt-10 u-w-100">
          {props.projects.map((project) => (
            <div key={project.id}>
              <button className="btn btn-link" onClick={onDelete}>
                Delete
              </button>
              <h2 className="u-color-black-light u-fs-30">{project.title}</h2>
              <p className="u-mb-2">{project.date}</p>
              <p>{project.description}</p>
            </div>
          ))}
        </ul>
      )}
      {props.formState && (
        <Form onSetFormState={setFormStatetHandler} onAddProject={addProjectHandler}></Form>
      )}
    </main>
  );
}
