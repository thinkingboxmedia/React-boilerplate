import React, { Component } from 'react';
import ReactF1 from 'react-f1';

import { UserLoginButton, UserLikeButton } from '../';

import { states, IDLE, SHOW } from './HeaderF1States';
import transitions from './HeaderF1Transitions';
import styles from './Header.css';

/**
 * Header component
 */

export default class Header extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      go: SHOW,
    };
  }

  /**
   * componentDidMount
   */
  componentDidMount() {
    window.setTimeout(() => {
      this.setState({ go: IDLE });
    }, 0);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    return (
      <ReactF1
        className={styles.Header}
        go={this.state.go}
        states={states()}
        transitions={transitions()}
      >
        <div data-f1="container" className={styles.container}>
          <UserLikeButton />
          <span className={styles.login}>
            <UserLoginButton />
          </span>
        </div>
      </ReactF1>
    );
  }
}
