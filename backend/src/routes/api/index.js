import express from "express";

const router = express.Router();

import contactsRoutes from "./api-contacts.js";
router.use("/contacts", contactsRoutes);

export default router;
