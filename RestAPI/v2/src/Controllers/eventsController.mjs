import { matchedData, validationResult } from "express-validator";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function listEvents(req, res) {
  res.send(await prisma.Events.findMany());
}

async function addEvent(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send(errors);
  } else {
    const body_data = matchedData(req);
    body_data.date = new Date(body_data.date);

    const created = await prisma.Events.create({
      data: {
        ...body_data,
      },
    });
    res.send(created);
  }
}

async function getOne(req, res) {
  const {
    params: { id },
  } = req;

  const user = await prisma.events.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.send(user);
}

async function updateEvent(req, res) {
  const {
    body,
    params: { id },
  } = req;

  if (body.date) {
    body.date = new Date(body.date);
  }

  const changed = await prisma.events.update({
    data: { ...body },
    where: {
      id: Number(id),
    },
  });
  res.send(changed);
}

async function removeEvent(req, res) {
  const {
    params: { id },
  } = req;

  const user = await prisma.events.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.send("Deleted Successfully");
}

export const eventsController = {
  listEvents,
  addEvent,
  getOne,
  updateEvent,
  removeEvent,
};
