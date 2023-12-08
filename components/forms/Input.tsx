"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";

interface Props {
  labelId: string;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  children: React.ReactNode;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

export default function Input({ labelId, type, onChange, value, children, link, required = false }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.closest(`#${labelId}`)) {
        validateEmail();
        setIsHovered(false);
        setIsClicked(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [labelId, value]);

  const isInputFilled = value.trim() !== "";

  const validateEmail = () => {
    if (type.toLowerCase() === "password") {
      setIsValidEmail(true);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(value);
    setIsValidEmail(isValid);

    if (!isValid) {
      setIsClicked(false);
    }
  };

  return (
    <>
      <div
        className={`relative my-8 text-textlight border-b border-textlight border-opacity-50 ${isHovered || isClicked ? "hovered" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setIsClicked(!isClicked);
        }}
        style={{
          borderColor: isValidEmail ? (isClicked ? "#4A7AFF" : "") : "#F72E25",
        }}
      >
        <label
          htmlFor={labelId}
          className={`absolute left-1.5 text-sm leading-6 font-normal pointer-events-none transition-transform ${isClicked ? "transform-translate" : ""}`}
          style={{
            color: isHovered || isClicked ? "rgba(246, 246, 246, 0.7)" : "rgba(246, 246, 246, 0.4)",
            fontSize: isClicked || isInputFilled ? "12px" : "inherit",
            transform: isClicked ? "translateY(-20px)" : isInputFilled ? "translateY(-20px)" : "translateY(12px)",
          }}
        >
          {children}
        </label>
        <input
          id={labelId}
          className={`bg-transparent w-full text-sm leading-6 font-normal border-none outline-none focus:ring-0 ${!isValidEmail ? "border-red-500" : ""}`}
          name={labelId}
          type={type}
          onChange={(e) => {
            onChange(e);
          }}
          value={value}
          required={required}
        />
      </div>
      {link && (
        <div className="text-sm">
          <Link className="font-normal text-textlight hover:text-texthover" href={link.linkUrl}>
            {link.linkText}
          </Link>
        </div>
      )}
      <style jsx>{`
        .hovered label {
          color: rgba(246, 246, 246, 0.7);
        }

        .transform-translate {
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </>
  );
}
