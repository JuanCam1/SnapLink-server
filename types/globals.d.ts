import type { SendResponse } from "./response-model";
import type { StateModel, StateTypeModel } from "./state-model";
import type { SettingModel, Theme } from "./setting-model";

import type { PaginationAll } from "./pagination-model";
import type { MultipleModel } from "./multiple-modal";
import type { TokenData, TokenPayload } from "./token-model";

import type {
  LoginModel,
  RegisterModel,
  PayloadModel,
  ResponseLoginModel,
} from "./auth-model";
import type { getLinksByIdUserModel, LinkModel, LinkUpdateModel } from "./link-model";
import type { UserModel, UserUpdateModel } from "./user-model";

declare global {
  type SendResponseI<T> = SendResponse<T>;
  type StateModelI = StateModel;
  type StateTypeModelI = StateTypeModel;
  type ThemeI = Theme;
  type TokenPayloadI = TokenPayload;
  type PaginationAllI = PaginationAll;
  type TokenDataI = TokenData;
  type LoginModelI = LoginModel;
  type PayloadModelI = PayloadModel;
  type ResponseLoginModelI = ResponseLoginModel;
  type UserModelI = UserModel;
  type UserUpdateModelI = UserUpdateModel;

  type LinkModelI = LinkModel;
  type LinkUpdateModelI = LinkUpdateModel;
  type getLinksByIdUserModelI = getLinksByIdUserModel;
}
