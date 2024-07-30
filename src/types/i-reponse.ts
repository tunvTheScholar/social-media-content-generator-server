export interface IResponse<T> {
  isSuccess: boolean;
  data: T;
  errorCode?: string;
  errorMessage?: string;
}
