import { div } from 'prelude-ls';
import React from 'react';
import ReactDom from 'react-dom';

const ToDoList = () => {
  return (
    <ul>
      <li>Learn react</li>
      <li>Build Awesome App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1> My Todo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder='search'></input>
};

const App = () => {
  return (
    <div>
    <AppHeader/>
    <SearchPanel/>
    <ToDoList/>
  </div>
  )
}


ReactDom.render(<App/>,
  document.getElementById('root'));