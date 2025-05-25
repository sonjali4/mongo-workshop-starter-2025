import { Router } from "express";
import {
  createContact,
  deleteContact,
  retrieveContacts,
  updateContact
} from "../../data/contacts-dao.js";

const router = Router();

/**
 * GET /api/contacts: Retrieves a JSON array of all contacts, with a 200 OK response.
 */
router.get("/", async (req, res) => {
  return res.json(await retrieveContacts());
});

/**
 * POST /api/contacts: Creates a new contact with the info in the request body.
 * - If successful, returns a 201 Created response with the new contact as JSON, and the contact's id in the Location header.
 * - Returns a 422 error if trying to create a contact without a name, or with a non-unique name.
 */
router.post("/", async (req, res) => {
  try {
    const contact = await createContact(req.body);
    return res.status(201).location(`/contacts/${contact._id}`).json(contact);
  } catch (err) {
    // TODO Error case: Duplicate name
    if (err.code === 11000) {
      return res.status(422).send("Contact name must be unique");
    }

    // TODO Error case: Missing name
    if (err.name === "ValidationError" && err.message.includes("name")) {
      return res.status(422).send("Contact name is required");
    }

    // TODO Error case: Invalid _id
    if (err.name === "CastError") {
      return res.status(422).send("Invalid contact id");
    }

    // Unexpected error
    console.error(err); // For debugging
    return res.status(500).send("Unexpected error when GETting contacts");
  }
});

/**
 * PATCH /api/contacts/:id: Updates one or more properties of the contact with the given id (in the path param).
 * - If a contact with that id doesn't exist, returns a 404 response.
 * - If trying to update a contact's name to a non-unique name, returns a 422 response.
 * - Otherwise, returns a 200 success response, with the JSON of the updated contact.
 */
router.patch("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updated = await updateContact(id, req.body);
    if (!updated) return res.status(404).send(`Contact ${id} not found`);
    return res.json(updated);
  } catch (err) {
    // TODO Error case: Duplicate name
    if (err.code === 11000) {
      return res.status(422).send("Contact name must be unique");
    }

    // TODO Error case: Invalid _id
    if (err.name === "CastError") {
      return res.status(422).send("Invalid contact id");
    }

    // Unexpected error
    console.error(err); // For debugging
    return res.status(500).send("Unexpected error when PATCHing contact");
  }
});

/**
 * DELETE /api/contacts/:id: Deletes the contact with the given id, if it exist. Returns a 204 response
 * either way.
 */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deleteContact(id);
    return res.sendStatus(204);
  } catch (err) {
    // TODO Error case: Invalid _id
    if (err.name === "CastError") {
      return res.status(422).send("Invalid contact id");
    }

    // Unexpected error
    console.error(err); // For debugging
    return res.status(500).send("Unexpected error when PATCHing contact");
  }
});

export default router;
