import React, { Component } from 'react';

import styles from './styles.css' 

/**
 * Background component
 */
class Background extends Component {

  constructor(props) {

    super(props);

  }

  /**
   * componentDidMount
   */

  componentDidMount() {


  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {

    return (
      <div className={styles.wrapper}>
        Background
      </div>
    );
  }
}

module.exports = Background;