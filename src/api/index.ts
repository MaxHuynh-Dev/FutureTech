import { API_URL } from '@Constants/envs';
import axios, { type AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';

export interface TDefaultResponse<T> {
  status: number;
  message?: string;
  data: T;
}

class HttpClient {
  requestConfig: AxiosInstance;
  constructor() {
    this.requestConfig = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        accept: 'application/json',
      },
      withCredentials: true,
    });
    this.requestConfig.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
        const errorResponse: unknown = error.response?.data;
        if (
          errorResponse &&
          typeof errorResponse === 'object' &&
          'message' in errorResponse &&
          typeof (errorResponse as { message: unknown }).message === 'string'
        ) {
          // Replace with a real logging system if needed
        }
        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<TDefaultResponse<T>> {
    const response = await this.requestConfig.get<TDefaultResponse<T>>(url, config);
    return response.data;
  }

  async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<TDefaultResponse<T>> {
    const response = await this.requestConfig.post<TDefaultResponse<T>>(url, data, config);
    return response.data;
  }

  async put<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<TDefaultResponse<T>> {
    const response = await this.requestConfig.put<TDefaultResponse<T>>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<TDefaultResponse<T>> {
    const response = await this.requestConfig.delete<TDefaultResponse<T>>(url, config);
    return response.data;
  }
}

const HTTP_REQUEST = new HttpClient();
export default HTTP_REQUEST;
