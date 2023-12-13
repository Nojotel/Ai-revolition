"use client";

import React, { useState } from "react";
import { Spinner } from "@/components/common";
import { Input } from "@/components/forms";
import { ChangeEvent, FormEvent } from "react";

interface Config {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

interface Props {
  config: Config[];
  isLoading: boolean;
  btnText: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export default function Form({ config, isLoading, btnText, onChange, onSubmit }: Props) {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event);

    if (event.target.name === "email") {
      setIsEmailValid(isValidEmail(event.target.value));
    } else if (event.target.name === "password") {
      setIsPasswordValid(event.target.value.length > 6);
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isButtonActive = config.every((input) => input.value.trim() !== "" && (input.type.toLowerCase() !== "email" || isEmailValid) && (input.type.toLowerCase() !== "password" || isPasswordValid));

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {config.map((input) => (
        <Input
          key={input.labelId}
          labelId={input.labelId}
          type={input.type}
          onChange={handleInputChange}
          value={input.value}
          link={input.link}
          required={input.required}
          onValidationChange={(isValid) => {
            if (input.type.toLowerCase() === "email") {
              setIsEmailValid(isValid);
            } else if (input.type.toLowerCase() === "password") {
              setIsPasswordValid(isValid);
            }
          }}
        >
          {input.labelText}
        </Input>
      ))}

      <div>
        <button type="submit" className={`flex w-full h-11 justify-center items-center rounded-3xl px-5 py-3.5 text-sm font-semibold leading-6 ${isButtonActive ? "bg-button" : "bg-inactive-button"} text-textlight ${isButtonActive ? "hover:bg-buttonhover" : ""} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-buttonhover`} disabled={isLoading || !isButtonActive}>
          {isLoading ? <Spinner sm /> : `${btnText}`}
        </button>
      </div>
    </form>
  );
}
