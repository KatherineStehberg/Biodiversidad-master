import { useHistory } from 'react-router-dom';

const MyComponent = () => {
  const history = useHistory();

  const handleSubmit = () => {

    history.push('/Frontend/src/pages/Dashboard.jsx');
  };

  return <button onClick={handleSubmit}>Go to Dashboard</button>;
};
