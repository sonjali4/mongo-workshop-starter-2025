/* eslint-disable react/prop-types */
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import { useContacts } from "../context/ContactsContextProvider";

/**
 * A modal dialog allowing users to edit details of existing contacts.
 */
export default function EditContactModal({ visible, onClose }) {
  const { selectedContact, editContact, deleteContact } = useContacts();

  // Raises the onEditContact event when the form is submitted.
  function handleSubmit(contact) {
    editContact(contact);
    onClose();
  }

  // Raises the onDeleteContact event when the delete button is clicked.
  function handleDelete(id) {
    deleteContact(id);
    onClose();
  }

  return (
    <Modal visible={visible} onClose={onClose}>
      <ContactForm
        title="Edit Contact"
        contact={selectedContact}
        onSubmit={handleSubmit}
        hasDeleteButton={true}
        onDelete={handleDelete}
      />
    </Modal>
  );
}
