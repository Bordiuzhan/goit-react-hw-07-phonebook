import { useSelector } from 'react-redux';
import { getError, getIsLoading } from 'redux/selectors';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Layout } from './Layout';

export function App() {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm>
        <h2>Contacts</h2>
      </ContactForm>
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </Layout>
  );
}
