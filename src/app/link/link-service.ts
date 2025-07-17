import { countLinksDao, createLinkDao, deleteLinkDao, getLinkByIdUserDao, stateChangeLinkDao, updateLinkDao } from "./link-dao";


export const createLinkService = async (link: LinkModelI) => {
  return await createLinkDao(link);
};

export const updateLinkService = async (link: LinkUpdateModelI) => {
  return await updateLinkDao(link);
};

export const getLinkByIdUserService = async (query: getLinksByIdUserModelI) => {
  return await getLinkByIdUserDao(query);
}

export const countLinksService = async (id: string) => {
  return await countLinksDao(id);
};

export const stateChangeLinkService = async (id: string) => {
  return await stateChangeLinkDao(id);
};

export const deleteLinkService = async (id: string) => {
  return await deleteLinkDao(id);
};
