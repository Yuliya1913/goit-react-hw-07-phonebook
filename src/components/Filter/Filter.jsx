import css from 'components/Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  // инфа с инпута пришла и записываем в глобальный стейт
  const handleFilter = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <label htmlFor="" className={css.label}>
      Find contacts by name
      <input
        className={css.filter}
        type="text"
        value={filter}
        onChange={handleFilter}
      />
    </label>
  );
};
