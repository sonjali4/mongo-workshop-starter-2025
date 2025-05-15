const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Sends a POST request to the server to create a new contact.
 *
 * @param {*} contact the new contact
 *
 * @returns a promise which will either resolve to the new contact object returned by the server,
 *          or will reject with the response object if a response outside the 200-299 range is returned.
 */
export async function createContact(contact) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(contact),
    headers: { "content-type": "application/json" }
  });

  if (response.ok) return await response.json();
  throw { response };
}

/**
 * Sends a GET request to the server to get all contacts.
 *
 * @returns a promise which will resolve to an array of all contact info on the server.
 */
export async function retrieveContacts() {
  const response = await fetch(BASE_URL);
  return await response.json();
}

/**
 * Sends a PATCH request to the server to update a contact.
 *
 * @param {*} contact the contact to update
 *
 * @returns a promise which will either resolve if the update was successful, or reject with the
 *          response object if a response object outside the 200-299 range is returned.
 */
export async function updateContact(contact) {
  console.log("apiUpdateContact", contact);
  const response = await fetch(`${BASE_URL}/${contact._id}`, {
    method: "PATCH",
    body: JSON.stringify(contact),
    headers: { "content-type": "application/json" }
  });
  if (!response.ok) throw { response };
}

/**
 * Sends a DELETE request to the server to delete a contact.
 *
 * @param {string} id the id of the contact to delete
 *
 * @returns a promise which will either resolve if the deletion was successful, or reject with the
 *          response object if a response object outside the 200-299 range is returned.
 */
export async function deleteContact(id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
  if (!response.ok) throw { response };
}
