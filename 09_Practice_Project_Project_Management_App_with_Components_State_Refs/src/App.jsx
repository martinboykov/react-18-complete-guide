import Aside from './components/Aside/Aside.jsx';
import Main from './components/Main/Main.jsx';
import { useState, useRef } from 'react';
function App() {
  const [projects, setProject] = useState([{
    title: 'Test',
    description: 'Test',
    date: '04.12.2023'
  }]);
  const [formState, setFormState] = useState(false);
  const addProjectHandler = (newProject) => {
    setProject((state) => {
      console.log("🚀 ~ file: App.jsx:10 ~ setProject ~ [...state, newProject]:", [...state, newProject])
      return  [...state, newProject];
    });
  };
  const setFormStatetHandler = (state) => {
    setFormState(state);
  };

  return (
    <div className="u-df u-fg-4">
      <Aside onSetFormState={setFormStatetHandler}></Aside>
      <Main formState={formState} onSetFormState={setFormStatetHandler} projects={projects} onAddProject={addProjectHandler}></Main>
    </div>
  );
}

export default App;
