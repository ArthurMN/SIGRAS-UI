export type LoginType = {
  email: string;
  password: string;
};

export type ConfirmPasswordType = {
  user_id: number;
  password: string;
  password_confirmation: string;
};

export type LoginResponse = {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    role: string;
    remember_token: string;
    created_at: string;
    updated_at: string;
    must_change_password: boolean;
  };
};
