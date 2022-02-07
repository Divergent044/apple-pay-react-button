import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';

import styles from './styles.module.css';
const cx = classNames.bind(styles);


const Index = ({ text }) => {
  const [x, setX] = useState(22);

  useEffect(() => {
    setX('kjbdvkjervkjev');
  }, []);

  return (
    <div id="div" className={cx('component')}>
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
