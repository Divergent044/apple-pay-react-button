import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Index = ({ text }) => {
  const [x, setX] = useState(88);

  useEffect(() => {
    setX(395689734673453465438376348678346);
  }, []);

  return (
    <div style={{ color: 'green' }}>
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
