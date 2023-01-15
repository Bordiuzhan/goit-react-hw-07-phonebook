import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Layout } from './Layout';

export function App() {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm>
        <h2>Contacts</h2>
      </ContactForm>
      <Filter />
      <ContactList />
    </Layout>
  );
}
