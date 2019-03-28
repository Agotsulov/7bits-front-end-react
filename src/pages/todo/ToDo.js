import React from 'react';

import Task from '../../components/task/TaskToDo';

import list from './list';

import './style.css';

export default class ToDo extends React.Component {

  deleteTask = (id) => {
      console.log("delete" + id)
  };

  editTask = (id) => {
      console.log("edit" + id)
  };

  completeTask = (id) => {
      console.log("complete" + id)
  };

  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Task key={index}
              title={item.title}
              id={item.id}
              deleteTask={this.deleteTask}
              editTask={this.editTask}
              completeTask={this.completeTask}
        />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
