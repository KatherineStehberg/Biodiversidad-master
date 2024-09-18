import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {

    navigate('/Frontend/src/pages/Dashboard.jsx');
  };

  return <button onClick={handleSubmit}>Go to Dashboard</button>;
};
