export interface UserModel {
	name: string;
	email: string;
	password: string;
}

export interface UserUpdateModel extends UserModel {
	id: string;
}