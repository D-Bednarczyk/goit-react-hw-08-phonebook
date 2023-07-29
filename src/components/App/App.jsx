import css from './app.module.css';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.main_div}>
      <h2>Phonebook</h2>
      <Form />
      <h2>Contacts</h2>
      <Filter />

      <ContactList></ContactList>
    </div>
  );
};
