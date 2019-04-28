import React from 'react';

import Task from '../../components/task/TaskDone';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDoneTaskList from '../../actions/taskList/getDoneTaskList';
import delTask from "../../actions/task/deleteTask";

import './style.css';

class Done extends React.Component {

  componentDidMount() {
    if (!this.props.authorized) {
      this.props.history.replace('/login');
    }
    this.props.getTaskList();
  }

  deleteTask = (id) => {
    this.props.delTask(id).then(
        () => this.props.getTaskList()
    );
  };

  renderList = () => {
    return this.props.doneList.map((item, index) => {
      return (
        <Task key={index}
              title={item.text}
              id={item.id}
              deleteTask={this.deleteTask}/>
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  delTask: bindActionCreators(delTask, dispatch),
  getTaskList: bindActionCreators(getDoneTaskList, dispatch)
});

const mapStateToProps = (state) => ({
  doneList: state.doneTaskListReducer.doneList,
  authorized: state.userReducer.authorized
});

Done.defaultProps = {
  doneList: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
