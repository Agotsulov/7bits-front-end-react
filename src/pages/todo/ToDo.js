import React from 'react';

import Task from '../../components/task/TaskToDo';
import AddTask from '../../components/add/Add';

import list from './list';

import './style.css';

import { createStore } from 'redux';
import { connect } from 'react-redux';

const store = createStore(() => {});

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [...list.data]
    };
  }

  uuid = require('uuid/v4');

  addTask = (title) => {
    if (title !== "") {
      const newTask = {
        id: this.uuid(),
        title: title
      };
      this.setState({ tasks: [newTask, ...this.state.tasks]})
    }
  };

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
    console.log(this.state.tasks);
    return this.state.tasks.map((item, index) => {
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
          <AddTask addTask={this.addTask}/>
        {this.renderList()}
      </React.Fragment>
    );
  };
};

export default connect(null, null)(ToDo);


