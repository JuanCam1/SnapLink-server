export interface LinkModel {
  userId: string;
  originalUrl: string;
  shortCode: string;
  title: string;
  description: string;
  expiresAt: Date;
  password: string | null;
  time: string;
}

export interface LinkUpdateModel extends LinkModel {
  id: string;
}

export interface getLinksByIdUserModel {
  id: string;
  limit: number;
  page: number;
  title: string | null;
  originalUrl: string | null;
}