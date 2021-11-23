import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';

import styles from './styles.module.css';
//const cx = classNames.bind(styles);


const Index = ({ text }) => {
  const [x, setX] = useState(88);

  useEffect(() => {
    setX('kjbdvkjervkjev');
    const block = document.querySelector('#div');
    block.className = styles.component;
  }, []);

  return (
    <div id="div">
      Index {x}
      <br />
      {text}
    </div>
  );
};

ReactDOM.render(
  <Index text="Some text" />,
  document.getElementById('react-main')
);
