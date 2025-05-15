/* eslint-disable react/prop-types */
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useContacts } from "../context/ContactsContextProvider";

/**
 * A modal dialog allowing users to add contacts.
 */
export default function AddContactModal({ visible, onClose }) {
  const { addContact } = useContacts();

  // Raises the onAddContact event when the form is submitted.
  function handleSubmit(contact) {
    addContact(contact);
    onClose();
  }

  return (
    <Modal visible={visible} onClose={onClose}>
      <ContactForm title="Add Contact" onSubmit={handleSubmit} />
    </Modal>
  );
}
