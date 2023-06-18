import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // записываем в отдельный массив контакты, которые отфильтровали для поиска из всех контактов по условию в инпуте
  // , чтобы не менять исходный массив контактов
  const visibleTelephone = getVisibleContacts();

  return (
    <ul>
      {visibleTelephone.map(contact => {
        return <ContactItem contact={contact} key={contact.id} />;
      })}
    </ul>
  );
};
