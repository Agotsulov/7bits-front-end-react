import React from 'react';

import Task from '../../components/task/TaskDone';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import getDoneTaskList from '../../actions/taskList/getDoneTaskList';

import './style.css';

class Done extends React.Component {

  componentDidMount() {
    this.props.getTaskList();
  }

  deleteTask = (id) => {
    console.log("delete" + id)
  };

  renderList = () => {
    return this.props.doneList.map((item, index) => {
      return (
        <Task key={index}
              title={item.title}
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
  };
}

const mapDispatchToProps = (dispatch) => ({
  getTaskList: bindActionCreators(getDoneTaskList, dispatch)
});

const mapStateToProps = (state) => ({
  doneList: state.doneTaskListReducer.doneList
});

Done.defaultProps = {
  doneList: []
};

export default connect(mapStateToProps, mapDispatchToProps)(Done);
