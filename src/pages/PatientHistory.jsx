import { useParams } from 'react-router-dom';

const PatientPage = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default PatientPage;
