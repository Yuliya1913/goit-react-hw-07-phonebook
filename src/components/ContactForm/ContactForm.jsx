import { useState } from 'react';
import css from 'components/ContactForm/ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { formSubmit } from 'redux/contacts/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  let nameId = nanoid();
  let numberId = nanoid();

  const handleChange = event => {
    //   при введении данных в инпут записываем эти значения в качестве свойств и их значений
    const { name, value } = event.currentTarget;

    if (name === 'name') setName(value);

    if (name === 'number') setNumber(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    // Забираем данные с контактами с глобального стэйта, и если имя уже было введено,
    // какое мы снова вводим в инпуте, то выведется сообщение и выходим

    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    // если вводим имя контакта, какое уже есть в телеф.книге, выводим сообщение, что имя такое есть такое и выходим
    if (isExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    //   иначе отправляем экшен с данными в глобальный стэйт контактов

    dispatch(formSubmit({ name, number, id: nanoid() }));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmitForm}>
      <label className={css.label} htmlFor={nameId}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChange}
          id={nameId}
        />
      </label>
      <label className={css.label} htmlFor={numberId}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
          id={numberId}
        />
      </label>
      <button type="submit" className={css.btn}>
        Add contact
      </button>
    </form>
  );
};
