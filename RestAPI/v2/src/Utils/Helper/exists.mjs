import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function exists(req, res, next) {
  const {
    params: { id },
  } = req;

  const getId = await prisma.events.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (getId == null) {
    res.status(404).json({
      error: "User does not exist!!!",
    });
  } else {
    next();
  }
}

export default exists;
