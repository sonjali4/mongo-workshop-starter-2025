import { useContext, createContext, useState, useEffect } from "react";
import * as api from "../api/api.js";

const ContactsContext = createContext();

export function useContacts() {
  return useContext(ContactsContext);
}

export default function ContactsContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isLoadingContacts, setIsLoadingContacts] = useState(false);

  /**
   * Fetches contacts from the server.
   */
  async function fetchContacts() {
    setIsLoadingContacts(true);
    const data = await api.retrieveContacts();
    setContacts(data);
    setIsLoadingContacts(false);
    setSelectedContact(data[0]);
  }

  /**
   * On initial page mount, and every five minutes thereafter, fetch contacts.
   */
  useEffect(() => {
    // Initial fetch
    fetchContacts();

    // Setup refetch
    const fiveMinutes = 1000 * 60 * 5;
    const refetchData = setInterval(fetchContacts, fiveMinutes);
    return () => clearInterval(refetchData);
  }, []);

  /**
   * Adds a new contact. Uses optimistic updates - assumes the server operation will succeed;
   * rolls back if not.
   * @param {{name: string, phoneNumber: string, photoUrl: string, funFact: string}} contact the new contact
   */
  async function addContact(contact) {
    // Optimistically update local state
    const tempContacts = contacts;
    setContacts([...contacts, contact]);

    try {
      // Send the new contact to the server with a POST, then update our state
      // with the returned contact (which will now include its _id).
      const newContact = await api.createContact(contact);
      const updatedContacts = [...tempContacts, newContact];
      setContacts(updatedContacts);
      setSelectedContact(newContact);
    } catch (err) {
      // On any server error, rollback.
      setContacts(tempContacts);
    }
  }

  /**
   * Deletes a contact with the given id.  Uses optimistic updates - assumes
   * the server operation will succeed; rolls back if not.
   *
   * @param {string} id the id of the contact to delete
   */
  async function deleteContact(id) {
    // Optimistically update local state
    const tempContacts = contacts;
    const tempSelectedContact = selectedContact;
    const updatedContacts = contacts.filter((element) => element._id !== id);
    setContacts(updatedContacts);
    setSelectedContact(updatedContacts[0]);

    try {
      // Send DELETE to the server
      await api.deleteContact(id);
    } catch (err) {
      // On any server error, rollback.
      setContacts(tempContacts);
      setSelectedContact(tempSelectedContact);
    }
  }

  /**
   * Updates the given contact on the server. Uses optimistic updates - assumes
   * the server operation will succeed; rolls back if not.
   *
   * @param contact the contact to be updated on the server
   */
  async function editContact(contact) {
    // Optimistically update local state
    const tempContacts = contacts;
    const tempSelectedContact = selectedContact;
    setSelectedContact(contact);
    setContacts(
      contacts.map((element) => {
        if (element._id === contact._id) return contact;
        return element;
      })
    );

    try {
      // Send the contact PATCH to the server
      await api.updateContact(contact);
    } catch (err) {
      // On any server error, rollback.
      setContacts(tempContacts);
      setSelectedContact(tempSelectedContact);
    }
  }

  const context = {
    contacts,
    selectedContact,
    setSelectedContact,
    isLoadingContacts,
    addContact,
    deleteContact,
    editContact
  };

  return <ContactsContext.Provider value={context}>{children}</ContactsContext.Provider>;
}
