import ContactDisplay from "./components/ContactDisplay";
import Sidebar from "./components/Sidebar";
import AddContactModal from "./components/AddContactModal";
import EditContactModal from "./components/EditContactModal";
import { useState } from "react";
import { useContacts } from "./context/ContactsContextProvider";

export default function App() {
  const [isAddContactVisible, setAddContactVisible] = useState(false);
  const [isEditContactVisible, setEditContactVisible] = useState(false);

  const { selectedContact, deleteContact } = useContacts();

  function handleDeleteClick() {
    deleteContact(selectedContact._id);
  }

  function handleEditClick() {
    setEditContactVisible(true);
  }

  return (
    <>
      {/* Sidebar (nav) */}
      <Sidebar onAddContactClicked={() => setAddContactVisible(true)} />

      {/* Main area, displays detailed info about selected contact */}
      <main className="main-area">
        <ContactDisplay onEditClick={() => setEditContactVisible(true)} />

        {/* Buttons for editing / deleting selected contact */}
        <section style={{ display: "flex", gap: "1rem" }}>
          <button className="button" onClick={handleEditClick}>
            Edit
          </button>
          <button className="button red" onClick={handleDeleteClick}>
            Delete
          </button>
        </section>
      </main>

      {/* Modal for adding new contacts */}
      <AddContactModal visible={isAddContactVisible} onClose={() => setAddContactVisible(false)} />

      {/* Modal for editing existing contacts */}
      <EditContactModal
        visible={isEditContactVisible}
        onClose={() => setEditContactVisible(false)}
      />
    </>
  );
}
