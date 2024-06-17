import { Router } from "express";
import { eventsController } from "../Controllers/eventsController.mjs";
import express from "express";
import { checkSchema } from "express-validator";
import { valid_schema } from "../Utils/Schema/schema.mjs";

const route = Router();

route.use(express.json());

route.route("/").get(eventsController.listEvents);

route
  .route("/events")
  .post(checkSchema(valid_schema), eventsController.addEvent);

route
  .route("/events/:id")
  .get(eventsController.getOne)
  .put(checkSchema(valid_schema), eventsController.updateEvent)
  .delete(eventsController.removeEvent);

export default route;
