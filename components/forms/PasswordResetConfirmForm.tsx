import React from "react";
import { Form } from "@/components/forms";
import { useResetPasswordConfirm } from "@/hooks";

interface PasswordResetConfirmFormProps {
  uid?: string;
  token?: string;
}

const PasswordResetConfirmForm: React.FC<PasswordResetConfirmFormProps> = ({ uid, token }) => {
  const { new_password, re_new_password, isLoading, onChange, onSubmit } = useResetPasswordConfirm(uid, token);

  const isButtonActive = new_password.trim() !== "" && re_new_password.trim() !== "" && !isLoading;

  const config = [
    {
      labelText: "Новый пароль",
      labelId: "new_password",
      type: "password",
      onChange,
      value: new_password,
      required: true,
    },
  ];

  return <Form config={config} isLoading={isLoading} btnText="Сохранить пароль" onChange={onChange} onSubmit={onSubmit} isButtonActive={isButtonActive} />;
};

export default PasswordResetConfirmForm;
