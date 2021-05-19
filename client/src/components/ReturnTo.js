import { useHistory } from 'react-router-dom';
import FilterButton from './FilterButton';

const ReturnTo = () => {
  let history = useHistory();
  const prevPath = () => history.goBack();
  return (
    <>
      <FilterButton onClick={prevPath}>zurück</FilterButton>
    </>
  );
};

export default ReturnTo;
