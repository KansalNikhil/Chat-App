import { Router } from "express";
import { verifyToken } from "../middlewares/AuthMiddleWare.js";
import { searchContacts, getContactsForDmList, getAllContacts } from "../controllers/ContactController.js";


const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/get-contacts-for-dm", verifyToken, getContactsForDmList);
contactsRoutes.get("/get-all-contacts", verifyToken, getAllContacts);

export default contactsRoutes;