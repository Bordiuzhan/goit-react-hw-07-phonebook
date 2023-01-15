import { List, Item, Text, Btn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisiblePhone } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectVisiblePhone);

  const deleteData = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <List>
      {items.map(item => (
        <Item key={item.id}>
          <Text>
            {item.name}: {item.phone}
          </Text>
          <Btn onClick={() => deleteData(item.id)}>Delete</Btn>
        </Item>
      ))}
    </List>
  );
};
