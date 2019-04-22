import React from 'react';

import Task from '../../components/task/TaskToDo';
import TaskEdit from '../../components/task/TaskEdit';
import AddTask from '../../components/add/Add';

import './style.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getTodoTaskList from "../../actions/taskList/getTodoTaskList";

import addTask from "../../actions/task/addTask";
import delTask from "../../actions/task/deleteTask";
import doneTask from "../../actions/task/doneTask";
import patchTask from "../../actions/task/patchTask";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      editId: ''
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
      this.setState({tasks: [...this.props.doneList]});
    }
  }

  uuid = require('uuid/v4');

  addTask = (title) => {
    this.props.addTask(title).then(
        () => this.props.getTodoTaskList() //Как вернуть Header из ответа на запрос создание? У меня через reducer не получилось.
    );
  };

  deleteTask = (id) => {
    this.props.delTask(id);
    this.setState({
      tasks: this.state.tasks.filter(i => {
        return i.id !== id
      })
    }); //Не эффективно, но быстрее чем к серверу TODO: переделать
  };

  editTask = (id) => {
    this.setState({editId: id})
  };

  changeTaskText = (id, text) => {
    this.setState({editId: ''});
    this.props.patchTask(id, text).then(
        () => this.props.getTodoTaskList()
    )
  };

  completeTask = (id) => {
    this.props.doneTask(id);
    this.setState({
      tasks: this.state.tasks.filter(i => {
        return i.id !== id
      })
    });
  };

  renderList = () => {
    console.log(this.state.editId);
    return this.state.tasks.map((item, index) => {
      if (item.id !== this.state.editId) {
        return (
          <Task key={index}
                title={item.text}
                id={item.id}
                deleteTask={this.deleteTask}
                editTask={this.editTask}
                completeTask={this.completeTask}
          />
        );
      } else {
        console.log("OOOOOOOOOOOOOOOOOOO");
        return (
            <TaskEdit key={index}
                  title={item.text}
                  id={item.id}
                  changeTaskText={this.changeTaskText}
            />
        );
      }
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
  getTodoTaskList: bindActionCreators(getTodoTaskList, dispatch),
  addTask: bindActionCreators(addTask, dispatch),
  delTask: bindActionCreators(delTask, dispatch),
  doneTask: bindActionCreators(doneTask, dispatch),
  patchTask: bindActionCreators(patchTask, dispatch)
});

const mapStateToProps = (state) => ({
  doneList: state.todoTaskListReducer.todoList,
  authorized: state.userReducer.authorized
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
