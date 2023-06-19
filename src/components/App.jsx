import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import css from 'components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operation/operation';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isContacts = contacts.length > 0;

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {isContacts && <Filter />}

      {isContacts && <ContactsList />}
      {isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
};
