import { Router } from "express";
import { eventsController } from "../Controllers/eventsController.mjs";
import express from "express";
import { checkSchema } from "express-validator";
import { valid_schema } from "../Utils/Schema/schema.mjs";
import exists from "../Utils/Helper/exists.mjs";



const route = Router();

route.use(express.json());

route.route("/").get(eventsController.listEvents);

route
  .route("/events")
  .post(checkSchema(valid_schema), eventsController.addEvent);

route
  .route("/events/:id")
  .get(exists, eventsController.getOne)
  .put(exists, checkSchema(valid_schema), eventsController.updateEvent)
  .delete(eventsController.removeEvent);

export default route;
