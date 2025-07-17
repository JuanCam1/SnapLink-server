export interface LinkModel {
  title: string;
  description: string;
  userId: string;
  originalUrl: string;
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