/* eslint-disable react/prop-types */
import clsx from "clsx";
import { getPhotoUrl } from "../util/image-utils";

/**
 * A card / link to appear on the sidebar. When clicked, will allow the user to view
 * detailed info about that contact.
 */
export default function ContactListItem({ contact, isActive, onContactClicked }) {
  return (
    <li
      className={clsx("contact-list-item", isActive && "active")}
      onClick={() => onContactClicked(contact)}
    >
      <img src={getPhotoUrl(contact.photoUrl)} alt={contact?.name} />
      {contact?.name ?? ""}
    </li>
  );
}
