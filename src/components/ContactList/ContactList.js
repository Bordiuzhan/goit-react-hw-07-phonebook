import { List, Item, Text, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filters = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const deleteData = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getFilteredName = () => {
    const normalizedFilter = filters.toLowerCase();
    if (contacts === []) {
      return;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const items = getFilteredName();

  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Text>
            {item.name}: {item.number}
          </Text>
          <Btn onClick={() => deleteData(item.id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};
