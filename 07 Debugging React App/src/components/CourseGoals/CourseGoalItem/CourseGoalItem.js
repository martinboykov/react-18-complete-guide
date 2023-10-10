import React from '../../../../../03 React Basics & Working With Components/node_modules/@types/react';

import './CourseGoalItem.css';

const CourseGoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default CourseGoalItem;
