import Link from "next/link";
import styles from "./register.module.scss";
import { useForm } from "react-hook-form";
import { ICountry, IRegister } from "../../interfaces/register.interfaces";
import { BsApple, BsFacebook } from "react-icons/bs";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaDotCircle } from "react-icons/fa";
import { clsx } from "@/shared/lib/clsx";

interface UserInfo {
  firstName: string;
  lastName: string;
  identification: string;
  email: string;
  country: string;
  city: string;
  address: string;
  mobile: string;
  sex: string;
  sponsorCode: string;
}

export function RegisterForm({
  handleUserRegister,
  countries
}: {
  handleUserRegister: (userinfo: IRegister) => Promise<void>;
  countries: ICountry[];
}) {
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { isValid, errors }
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      identification: "",
      email: "",
      country: "",
      city: "",
      address: "",
      mobile: "",
      sex: "",
      sponsorCode: ""
    }
  });

  const handleRegister = async (userInfo: UserInfo) => {
    console.log("userInfo");
    
    console.log({userInfo});
    
    if (!isValid) return;
    
    const request = {
      ...userInfo,
      address: userInfo.country,
      sex: Number(userInfo.sex),
      country: userInfo.country.slice(0, 2).toUpperCase()
    };
    await handleUserRegister(request);
    reset();
  };

  return (
    <form className={styles.form} 
      onSubmit={
        handleSubmit(handleRegister)
      }>
      <span className={styles.title}>RÉGISTRATE CON</span>
      <div className={styles.links}>
        <span>
          <BsFacebook />
        </span>
        <span>
          <BsApple />
        </span>
        <span>
          <AiOutlineGoogle />
        </span>
      </div>
      <span className={styles.other}>
        <FaDotCircle />
      </span>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <label>Nombre(s)</label>
          <input 
            type="text" 
            placeholder="Ingresa tu(s) nombre(s)"
            {...register("firstName", {
              required: 'El nombre es requerido'
            })} 
            onChange={() => clearErrors("firstName")}
          />
          <span className={styles.error}>{errors.firstName && errors.firstName.message}</span>
        </div>
        <div className={styles.field}>
          <label>Apellido(s)</label>
          <input 
            type="text" 
            placeholder="Ingresa tu(s) apellido(s)"
            {...register("lastName", {
              required: 'El apellido es requerido'
            })} 
            onChange={() => clearErrors("lastName")}
          />
          <span className={styles.error}>{errors.lastName && errors.lastName.message}</span>
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <label htmlFor="sex">Sexo</label>
          <select
            id="sex"
            {...register("sex", {
              required: 'El sexo es necesario'
            })}
          >
            <option value={""} hidden>
              Selecionar
            </option>
            <option value={"0"}>Femenino</option>
            <option value={"1"}>Masculino</option>
          </select>
          <span className={styles.error}>{errors?.sex?.message}</span>
        </div>
        <div className={styles.field}>
          <span>DNI</span>
          <input
            type="text"
            placeholder="Ingresa tu número de DNI"
            {...register("identification", {
              required: 'El DNI es requerido'
            })}
            onChange={() => clearErrors("identification")}
          />
          <span className={styles.error}>{errors?.identification?.message}</span>
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            placeholder="Ingresa tu correo electronico"
            {...register("email", {
              required: 'El correo electronico es requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electronico invalido"
              }
            })}
            onChange={() => clearErrors("email")}
          />
          <span className={styles.error}>{errors?.email?.message}</span>
        </div>
        <div className={styles.field}>
          <span>Teléfono</span>
          <input
            type="text"
            placeholder="Ingresa tu número de teléfono"
            {...register("mobile", {
              required: 'El telefono es requerido',
            })}
            onChange={() => clearErrors("mobile")}
          />
          <span className={styles.error}>{errors?.mobile?.message}</span>
        </div>
      </div>
      <div className={styles.input_group}>
        <div className={styles.field}>
          <span>Pais</span>
          <select
            {...register("country", {
              required: 'El pais es requerido'
            })}
          >
            <option value="" hidden>
              Seleccionar
            </option>
            {countries.map((item) => (
              <option key={item.countryId} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
          <span className={styles.error}>{errors?.country?.message}</span>
        </div>
        <div className={styles.field}>
          <span>Ciudad</span>
          <input
            type="text"
            placeholder="Ingresa tu ciudad"
            {...register("city", {
              required: 'La ciudad es requerida',
            })}
            onChange={() => clearErrors("city")}
          />
          <span className={styles.error}>{errors?.city?.message}</span>
        </div>
      </div>
      <div className={styles.input_group}>
        <button
          type="submit"
          className={clsx(styles.btn)}
        >
          Registrarme
        </button>
      </div>
      <div className={styles.extra}>
        <span>¿Ya tienes cuenta?</span>
        <Link href={"/r/login"}>Inicia tu sesión</Link>
      </div>
    </form>
  );
}
