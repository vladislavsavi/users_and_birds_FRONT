import { createContext, FC, useContext } from "react";
import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:8081"
      : process.env.REACT_APP_API_URL,
  timeout: 2000,
});

const AxiosContext = createContext<{ axios: AxiosInstance } | {}>({});

export const AxiosContextProvider: FC = ({ children }) => {
  return (
    <AxiosContext.Provider
      value={{ axios: axiosInstance } as { axios: AxiosInstance }}
    >
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = (): AxiosInstance => {
  const { axios } = useContext(AxiosContext) as { axios: AxiosInstance };
  return axios;
};
