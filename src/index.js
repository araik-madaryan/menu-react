import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faUserPlus, faPowerOff, faBriefcase, faBell, faSearch, faCalendarAlt, faFileWord, faEdit } from '@fortawesome/free-solid-svg-icons';
import { dom } from '@fortawesome/fontawesome-svg-core';
import * as serviceWorker from './serviceWorker';

dom.watch()

library.add(
  faPlus,
  faUserPlus,
  faPowerOff,
  faBriefcase,
  faBell,
  faSearch,
  faCalendarAlt,
  faFileWord,
  faEdit
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
