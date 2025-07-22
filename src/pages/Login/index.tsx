import Formulario from "../../components/form";
import brasao from "../../assets/brasao3_horizontal_branco.svg";
import { useState } from "react";
import { CiCircleAlert, CiCircleCheck } from "react-icons/ci";
import { useForm } from "react-hook-form";
import { definirSenha, login } from "../../services/auth";
import type { LoginResponse, LoginType } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  password: string;
  novaSenha?: string;
  confirmarSenha?: string;
};

const Login = () => {
  const [primeiroAcesso, setPrimeiroAcesso] = useState<boolean>(false);
  const [userId, setUserId] = useState<number | null>(null);
  const navigate = useNavigate();
  const {
    // control,
    handleSubmit,
    watch,
    reset,
    register,
    // formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
      novaSenha: "",
      confirmarSenha: "",
    },
  });

  const novaSenha = watch("novaSenha");
  const confirmarSenha = watch("confirmarSenha");
  const senhaValida = (novaSenha?.length ?? 0) >= 8;
  const confirmacaoValida = novaSenha === confirmarSenha && senhaValida;
  const contemNumero = /\d/.test(novaSenha || "");

  const onSubmit = async (data: FormData) => {
    if (!primeiroAcesso) {
      try {
        const payload: LoginType = {
          email: data.email,
          password: data.password,
        };

        const response: LoginResponse = await login(payload);

        if (response.token) {
          localStorage.setItem("@admin_Token", response.token);
          localStorage.setItem("@user_id", response.user.id.toString());
          localStorage.setItem("@user_role", response.user.role);
          localStorage.setItem("@user_name", response.user.name);

          if (response.user.must_change_password) {
            setUserId(response.user.id);
            setPrimeiroAcesso(true);
            reset({
              email: data.email,
              password: "",
              novaSenha: "",
              confirmarSenha: "",
            });
            toast.info("Defina sua senha para continuar.");
          } else {
            toast.success("Login realizado com sucesso!");
            navigate("/");
          }
        } else {
          toast.error("Usuário ou senha inválidos.");
        }
      } catch (error) {
        toast.error("Erro ao tentar logar.");
      }
    } else {
      if (confirmacaoValida && userId !== null) {
        try {
          await definirSenha({
            user_id: userId,
            password: data.novaSenha!,
            password_confirmation: data.confirmarSenha!,
          });

          toast.success("Senha definida com sucesso!");
          setPrimeiroAcesso(false);
          setUserId(null);
          reset();
          navigate("/");
        } catch (error) {
          toast.error("Erro ao definir nova senha.");
        }
      }
    }
  };

  return (
    <div className="h-screen min-h-screen bg-primary flex flex-col justify-center items-center px-4 sm:px-6">
      <img
        src={brasao}
        alt="Brasão da UFC"
        className="w-28 sm:w-32 md:w-36 lg:w-56 mb-6"
      />

      <div className="w-full max-w-sm sm:max-w-sm md:max-w-md bg-white rounded-2xl shadow-lg flex flex-col gap-6 p-6 sm:p-8 md:p-10">
        <div className="text-center px-4 sm:px-10">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary">
            {primeiroAcesso ? "Primeiro acesso" : "Acesse o SIGRAS"}
          </h1>
          <h2 className="text-sm sm:text-base text-gray-400 mt-1">
            {primeiroAcesso
              ? "Primeira vez aqui? Vamos criar a sua senha para finalizar seu cadastro."
              : "Solicite reservas de salas e acompanhe seu histórico."}
          </h2>
        </div>

        <Formulario onSubmit={handleSubmit(onSubmit)} align="start">
          {!primeiroAcesso ? (
            <>
              <Formulario.InputText
                name="email"
                label="Email"
                opcional
                placeholder="Digite seu email"
                lowercase
                type="email"
                register={register}
              />

              <Formulario.InputText
                name="password"
                label="Senha"
                opcional
                lowercase
                placeholder="Digite sua senha"
                type="password"
                register={register}
              />
              <a
                href="#"
                className="text-sm text-blue-600 hover:underline text-left"
              >
                Esqueceu sua senha?
              </a>
            </>
          ) : (
            <>
              <Formulario.InputText
                name="novaSenha"
                label="Digite sua senha"
                opcional
                placeholder="Digite uma senha"
                type="password"
                register={register}
              />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1 items-center">
                  {senhaValida ? (
                    <CiCircleCheck className="text-green-600 w-5 h-5" />
                  ) : (
                    <CiCircleAlert className="text-red-600 w-5 h-5" />
                  )}
                  <p className="text-xs text-gray-400">
                    Mínimo de 8 caracteres.
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  {contemNumero ? (
                    <CiCircleCheck className="text-green-600 w-5 h-5" />
                  ) : (
                    <CiCircleAlert className="text-red-600 w-5 h-5" />
                  )}
                  <p className="text-xs text-gray-400">
                    Deve conter pelo menos um número (0–9).
                  </p>
                </div>
                <div className="flex gap-1 items-center">
                  {confirmacaoValida ? (
                    <CiCircleCheck className="text-green-600 w-5 h-5" />
                  ) : (
                    <CiCircleAlert className="text-red-600 w-5 h-5" />
                  )}
                  <p className="text-xs text-gray-400">
                    As senhas devem coincidir.
                  </p>
                </div>
              </div>

              <Formulario.InputText
                name="confirmarSenha"
                label="Confirme sua senha"
                placeholder="Digite sua senha novamente"
                type="password"
                register={register}
              />
            </>
          )}

          <div className="flex flex-col gap-2 w-full mt-4">
            <button
              type="submit"
              className={`${
                primeiroAcesso && !confirmacaoValida
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-blue-700"
              } text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
              disabled={primeiroAcesso && !confirmacaoValida}
            >
              {primeiroAcesso ? "Finalizar cadastro" : "Entrar"}
            </button>
          </div>
        </Formulario>
      </div>

      <div className="mt-6 text-xs sm:text-sm text-white flex gap-3 flex-wrap justify-center text-center">
        <a href="#" className="hover:underline">
          Termo de uso
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Políticas de Privacidade
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Conheça a UFC
        </a>
      </div>
    </div>
  );
};

export default Login;
