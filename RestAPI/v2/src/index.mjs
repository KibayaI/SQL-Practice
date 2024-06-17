import route from "./Routes/eventsRouter.mjs";
import express from "express";

const app = express();

app.use(route);

app.listen(3000, () =>
  console.log("The port is running on port 3000")
);
