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

declare global {
	type SendResponseI<T> = SendResponse<T>;
	type StateModelI = StateModel;
	type StateTypeModelI = StateTypeModel;
	type ThemeI = Theme;
	type TokenPayloadI = TokenPayload;
	type PaginationAllI = PaginationAll;
	type TokenDataI = TokenData;
	type LoginModelI = LoginModel;
	type RegisterModelI = RegisterModel;
	type PayloadModelI = PayloadModel;
	type ResponseLoginModelI = ResponseLoginModel;
}
