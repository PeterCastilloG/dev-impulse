import { useState, FormEvent, useEffect } from "react";
import styles from "./Select.module.scss";

export default function Select({
  options,
  curretnValue,
  onChange,
  placeholder,
  disabled = false,
  filter,
}: {
  options: Array<{ value: string | number; label: string }>;
  curretnValue: string | number;
  onChange: <T>(value: T) => void;
  placeholder: string;
  disabled: boolean;
  filter: boolean;
}) {
  const [search, setSearch] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const [filterOptions, setFilterOptions] = useState(options);

  const handleFocusInput = () => {
    setOnFocus(true);
    setFilterOptions(
      options.filter((item) =>
        filter
          ? item.label.toUpperCase().startsWith(search.toUpperCase())
          : item
      )
    );
  };

  const handleBlurInput = () => {
    setTimeout(() => {
      setOnFocus(false);
    }, 200);
  };

  const handleOnChangeSearch = (e: FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
    setFilterOptions(
      options.filter((item) =>
        item.label.toUpperCase().startsWith(value.toUpperCase())
      )
    );
  };
  useEffect(() => {
    const current = options.find(({ value }) => value === curretnValue);
    if (current) {
      setSearch(current.label);
    }
  }, [curretnValue, options]);

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        onChange={handleOnChangeSearch}
        disabled={disabled}
      />
      {onFocus && (
        <>
          {filterOptions.length ? (
            <ul>
              {filterOptions.map((item) => (
                <li key={item.value} onClick={() => onChange(item.value)}>
                  {item.label}
                </li>
              ))}
            </ul>
          ) : (
            <ul className={styles.noelemnts}>
              <li>No hay resultados</li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
