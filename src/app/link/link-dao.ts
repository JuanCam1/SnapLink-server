import type { Link } from "../../../prisma/generated/prisma/client";
import { NotFoundError } from "../../error/not-found-error";
import { capitalizeText } from "../../lib/capitalize";
import { currentDate } from "../../lib/current-date-hour";
import { prisma } from "../../lib/prisma";
import { generateSlug } from "../../util/generate-slug";

export const createLinkDao = async (link: LinkModelI) => {
  const currentNow = currentDate();
  const userDb = await prisma.user.findUnique({
    where: {
      id: link.userId,
    },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  const slug = generateSlug(9);
  const data: Omit<Link, "id"> = {
    time: Number(link.time),
    title: capitalizeText(link.title),
    description: capitalizeText(link.description),
    originalUrl: link.originalUrl,
    userId: link.userId,
    createdAt: currentNow,
    updatedAt: currentNow,
    totalClicks: 0,
    isActive: true,
    expiresAt: new Date(link.expiresAt),
    password: link.password,
    shortCode: slug,
  };

  console.log("data", data);
  const linkCreated = await prisma.link.create({
    data
  });
  return linkCreated;
};


export const updateLinkDao = async (link: LinkUpdateModelI) => {
  const currentNow = currentDate();
  const userDb = await prisma.user.findUnique({
    where: {
      id: link.userId,
    },
  });

  if (!userDb) throw new NotFoundError("Usuario no encontrado");

  const linkDb = await prisma.link.findUnique({
    where: {
      id: link.id,
    },
  });

  if (!linkDb) throw new NotFoundError("Enlace no encontrado");

  const titleNew = capitalizeText(link.title) !== linkDb.title ? capitalizeText(link.title) : linkDb.title;
  const descriptionNew = capitalizeText(link.description) !== linkDb.description ? capitalizeText(link.description) : linkDb.description;
  const originalUrlNew = link.originalUrl !== linkDb.originalUrl ? link.originalUrl : linkDb.originalUrl;
  const expiresAtNew = link.expiresAt !== linkDb.expiresAt ? new Date(link.expiresAt) : linkDb.expiresAt;
  const passwordNew = link.password !== linkDb.password ? link.password : linkDb.password;
  const timeNew = Number(link.time) !== Number(linkDb.time) ? Number(link.time) : Number(linkDb.time);

  const LinkUpdate = await prisma.link.update({
    where: {
      id: link.id,
    },
    data: {
      id: link.id,
      time: timeNew,
      title: titleNew,
      description: descriptionNew,
      originalUrl: originalUrlNew,
      userId: link.userId,
      updatedAt: currentNow,
      expiresAt: expiresAtNew,
      password: passwordNew,
    }
  });
  return LinkUpdate;
};

export const getLinkByIdUserDao = async (query: getLinksByIdUserModelI) => {
  const { id, limit = 10, page = 1, originalUrl, title } = query;
  const pageNum = Number(page);
  const limitNum = Number(limit);
  const skip = (pageNum - 1) * limitNum;

  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const filters: any = {
    userId: id,
    isActive: true,
  };

  if (originalUrl) filters.originalUrl = originalUrl;
  if (title) filters.title = title;


  const [Links, total] = await Promise.all([
    prisma.link.findMany({
      where: filters,
      skip,
      take: limitNum,
      orderBy: { createdAt: "desc" },
    }),
    prisma.link.count({
      where: filters,
    }),
  ]);

  return {
    Links,
    total,
    currentPage: pageNum,
    totalPages: Math.ceil(total / limitNum),
  };
};

export const countLinksDao = async (id: string) => {
  const linksDb = await prisma.link.count({
    where: { id },
  });

  const link = await prisma.link.update({
    where: { id },
    data: {
      totalClicks: linksDb + 1
    }
  })

  return link;
}

export const getByIdLinkDao = async (id: string) => {
  const linksDb = await prisma.link.findUnique({
    where: { id },
  });

  if (!linksDb) throw new NotFoundError("Enlace no encontrado");

  return linksDb;
};

export const stateChangeLinkDao = async (id: string) => {
  const linkDb = await prisma.link.findUnique({
    where: { id },
  });

  if (!linkDb) throw new NotFoundError("Enlace no encontrado");

  const link = await prisma.link.update({
    where: { id },
    data: {
      isActive: !linkDb.isActive,
    },
  });

  return link;
};

export const deleteLinkDao = async (id: string) => {
  const linkDb = await prisma.link.findUnique({
    where: { id },
  });

  if (!linkDb) throw new NotFoundError("Enlace no encontrado");

  const link = await prisma.link.delete({
    where: { id },
  });

  return link;
};
