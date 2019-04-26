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

  addTask = (title) => {
    this.props.addTask(title).then(() => {// + еще в backend'е возвращяется строка /tasks/{id}. Это не удобно.
      const newTask = {
        id: this.props.location.split('/')[2],
        text: title
      };
      console.log(newTask);
      this.setState({ tasks: [newTask, ...this.state.tasks]})
    });
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
    console.log(this.state.tasks);
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
  authorized: state.userReducer.authorized,
  location: state.taskReducer.location
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
