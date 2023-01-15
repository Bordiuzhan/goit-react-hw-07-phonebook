import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Layout } from './Layout';

export function App() {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
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
