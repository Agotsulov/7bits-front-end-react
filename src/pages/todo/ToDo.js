import React from 'react';

import Task from '../../components/task/TaskToDo';
import AddTask from '../../components/add/Add';

import './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getTodoTaskList from "../../actions/taskList/getTodoTaskList";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    if (!this.props.authorized) {
      this.props.history.replace('/login');
    }
    this.props.getTodoTaskList();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.doneList !== this.props.doneList) {
      this.setState({tasks: [...this.props.doneList]})
    }
  }

  uuid = require('uuid/v4');

  addTask = (title) => {
    if (title !== "") {
      const newTask = {
        id: this.uuid(),
        text: title
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
              title={item.text}
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
}

const mapDispatchToProps = (dispatch) => ({
  getTodoTaskList: bindActionCreators(getTodoTaskList, dispatch)
});

const mapStateToProps = (state) => ({
  doneList: state.todoTaskListReducer.todoList,
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
