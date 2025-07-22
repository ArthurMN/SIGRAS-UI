import type { ConfirmPasswordType, LoginType } from "../../types/auth";
import { postRequest } from "../../utils/axiosRequest";

export const login = async (payload: LoginType) => {
  return await postRequest("/login", payload);
};

export const definirSenha = async (payload: ConfirmPasswordType) => {
  return await postRequest("/definir-senha", payload);
};

export const logout = async () => {
  return await postRequest("/logout");
};