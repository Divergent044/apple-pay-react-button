import { useState } from 'react';
import ReactDOM from 'react-dom';

const Index = ({ text }) => {
  const [x] = useState(77);

  return (
    <div style={{ color: 'red' }}>
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
