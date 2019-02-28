import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
  render() {
    return (
      <article className="article">
        <p className="article__title">{this.props.title}</p>
      </article>
    );
  };
};

Article.propTypes = {
  title: PropTypes.string
};

Article.defaultProps = {
  title: '',
  description: ''
};
