import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilterData } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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
