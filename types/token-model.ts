export interface TokenData {
  id: number;
  nombre: string;
  correo: string;
  cambio_password: boolean;
  rolId: number | undefined;
  rol: string | undefined;
  foto?: string;
  tipoDocenteId?: number | undefined;
  tipoDocente?: string | undefined;
  exp?: number | undefined;
  supervisorArea?: number;
}

export interface TokenPayload {
  success: true;
  data: {
    exp: number;
    token: string;
    payload: TokenData;
  };
}