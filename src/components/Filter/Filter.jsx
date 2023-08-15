import { useDispatch, useSelector } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <input
      type="text"
      placeholder="Filter Todo"
      onChange={event => dispatch(addFilter(event.target.value))}
      value={useSelector(selectFilter)}
    />
  );
};
