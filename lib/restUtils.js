import prisma, { errorFormat } from "./prisma";

export async function processGetAndPost(dbEntity, req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      await handleGet(dbEntity, res);
      break;
    case "POST":
      await handlePost(dbEntity, req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export async function handleGet(dbEntity, res) {
  try {
    const data = await dbEntity.findMany();
    res.end(JSON.stringify(data, null, "\t"));
  } catch (e) {
    res.status(400).end(errorFormat(e.message));
  }
}

export async function handlePost(dbEntity, req, res) {
  try {
    const data = await dbEntity.create({ data: { ...req.body } });
    res.setHeader("Content-Type", "application/json");
    const record = data;
    res.end(JSON.stringify(record, null, "\t"));
  } catch (e) {
    res.status(400).end(errorFormat(e?.message));
  }
}

export async function processGetOnePutAndDelete(dbEntity, req, res) {
  const { method } = req;
  switch (method) {
    case "GET":
      await handleGetOne(dbEntity, req, res);
      break;
    case "PUT":
      await handlePut(dbEntity, req, res);
      break;
    case "DELETE":
      await handleDelete(dbEntity, req, res);
      break;
    default:
      res.setHandler("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export async function handleGetOne(dbEntity, req, res) {
  try {
    const primaryKeyId = req?.query?.id ?? "ID-REQUIRED-NOT-FOUND";
    const data = await dbEntity.findMany({
      where: { id: primaryKeyId },
    });
    if (parseInt(primaryKeyId) < 100) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data, null, "\t"));
    }
  } catch (e) {
    res.status(400).end(errorFormat(e?.message));
  }
}

async function handlePut(dbEntity, req, res) {
  try {
    const primaryKeyId = req?.query?.id ?? "ID_REQUIRED_NOT_FOUND";
    const data = await dbEntity.findMany({
      where: { id: primaryKeyId },
    });
    res.status(200).end(data, null, "\t");
  } catch (e) {
    res.status(400).end(errorFormat(e?.message));
  }
}

async function handleDelete(dbEntity, req, res) {
  try {
    const primaryKeyId = req?.query?.id ?? "ID_REQUIRED_NOT_FOUND";
    const data = await dbEntity.delete({
      where: { id: primaryKeyId },
    });
    res.status(200).end(data, null, "\t");
  } catch (e) {
    res.status(400).end(errorFormat(e?.message));
  }
}
