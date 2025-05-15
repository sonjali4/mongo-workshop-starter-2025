import { useState, useEffect } from "react";
import { AVATAR_IMAGES } from "../util/image-utils";
import { ImageSelect } from "./ImageSelect/ImageSelect";

export default function ContactForm({ title, contact, onSubmit, hasDeleteButton, onDelete }) {
  // Use bound inputs
  const [name, setName] = useState(contact?.name ?? "");
  const [phoneNumber, setPhoneNumber] = useState(contact?.phoneNumber ?? "");
  const [photoUrl, setPhotoUrl] = useState(contact?.photoUrl ?? "");
  const [funFact, setFunFact] = useState(contact?.funFact ?? "");

  // Whenever the contact prop changes, update the bound inputs to match.
  useEffect(() => {
    setName(contact?.name ?? "");
    setPhoneNumber(contact?.phoneNumber ?? "");
    setPhotoUrl(contact?.photoUrl ?? "");
    setFunFact(contact?.funFact ?? "");
  }, [contact?._id]);

  // Raises the onSubmit event when the form is submitted.
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ _id: contact?._id, name, phoneNumber, photoUrl, funFact });
  }

  // Raises the onDelete event when the delete button is clicked.
  function handleDelete(e) {
    e.preventDefault();
    onDelete(contact?._id);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3 className="centered">{title}</h3>

      <div className="group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="group">
        <label htmlFor="photoUrl">Photo URL</label>
        <ImageSelect imageUrls={AVATAR_IMAGES} value={photoUrl} onChange={setPhotoUrl} />
      </div>

      <div className="group">
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          id="phoneNumber"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div className="group">
        <label htmlFor="funfact">Fun fact</label>
        <textarea
          id="funFact"
          rows={4}
          value={funFact}
          onChange={(e) => setFunFact(e.target.value)}
        />
      </div>

      <div className="centered">
        <button className="button" type="submit">
          Save
        </button>
        {hasDeleteButton && (
          <button className="button red" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </form>
  );
}
