import { InputField, SelectField } from "../interfaces/profile.interfaces";
import { useState, useRef, useEffect } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { PiPencilSimpleDuotone } from "react-icons/pi";
import { clsx } from "@/shared/lib/clsx";
import styles from "./Field.module.scss";

export default function Field<T extends InputField | SelectField>({
  field,
  register,
  setValue,
}: {
  field: T;
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
}) {
  const fieldRef =
    useRef<T extends InputField ? HTMLInputElement : HTMLSelectElement>(null);

  const [disableField, setDisableField] = useState(field.disabled);

  function handleChangeEditable() {
    if (field.disabled) {
      setDisableField(!disableField);
      if (fieldRef.current && disableField) {
        fieldRef.current.focus();
      }
    }
  }

  function handleSetValue() {
    setValue(field.name, fieldRef.current?.value);
  }

  useEffect(()=> {
    setValue(field.name, field.value)
  },[field.name, field.value, setValue])

  return (
    <div className={clsx(styles.field, disableField && styles.disabled)}>
      <label htmlFor={field.id}>{field.label}</label>
      <div>
        {
          {
            INPUT: (
              <input
                placeholder={field.placeholder}
                id={field.id}
                type={field.type === "INPUT" ? field.variant : "text"}
                defaultValue={field.value}
                {...register(field.name, {
                  onBlur: handleChangeEditable,
                  required: field.required,
                })}
                ref={fieldRef as React.RefObject<HTMLInputElement>}
                onChange={handleSetValue}
              />
            ),
            SELECT: (
              <select
                id={field.id}
                defaultValue={field.value}
                {...register(field.name, {
                  onBlur: handleChangeEditable,
                  required: field.required,
                })}
                ref={fieldRef as React.RefObject<HTMLSelectElement>}
              >
                <option value="" hidden>
                  {field.placeholder}
                </option>
                {field.type === "SELECT" &&
                  field.options.map((item, index) => (
                    <option value={item.value} key={index}>
                      {item.label}
                    </option>
                  ))}
              </select>
            ),
          }[field.type]
        }
        {field.disabled && (
          <PiPencilSimpleDuotone onClick={handleChangeEditable} />
        )}
      </div>
    </div>
  );
}
