import React from 'react';

import Article from '../../components/article/Article';

import list from './list';

import './style.css';

export default class Home extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Article key={index} title={item.title}/>
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
