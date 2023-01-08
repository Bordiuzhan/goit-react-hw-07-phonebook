import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilterData } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const changeFilter = e => {
    dispatch(setFilterData(e.currentTarget.value));
  };
  return (
    <Label>
      Find contacts by name
      <input type="text" value={filter} onChange={changeFilter}></input>
    </Label>
  );
};
