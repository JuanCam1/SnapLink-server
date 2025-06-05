export interface ResidenteCreateModel {
  id_residente: number;
  nombre_residente: string;
  cedula_residente: string;
  telefono_residente: string;
  id_apartamento: number;
  id_tipo_vehiculo: number;
  placa_vehiculo: string | null;
  descripcion_vehiculo: string | null;
  id_tipo_vehiculo2: number;
  placa_vehiculo2: string | null;
  descripcion_vehiculo2?: string | null;
}

export interface PaginationResidentesResponse {
  data: ResidenteModel[];
  currentPage: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

export interface ResidenteModel {
  id_residente: string;
  nombre_residente: string;
  cedula_residente: string;
  telefono_residente: string;
  apartamento: ApartamentoModelI;
  vehiculo: VehiculoModelI | null;
  vehiculo_otro: VehiculoModelI | null;
}
