import { useForm } from "react-hook-form";
import Field from "../../components/Field";
import { useRef } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const { createUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const password = useRef();
  password.current = watch("password", "");

  const submitForm = (formData) => {
    const { email, password } = formData;
    
    createUser(email, password)
      .then((result) => {
        navigate("/");
        console.log(result.user.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[20px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field className="auth-label" label="Name" error={errors.name}>
        <input
          {...register("name", { required: "Name is required" })}
          className={`auth-input ${
            errors.error ? "border-red-500" : "border-gray-200"
          }`}
          type="text"
          name="name"
          id="name"
        />
      </Field>
      <Field className="auth-label" label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email is required" })}
          className={`auth-input ${
            errors.error ? "border-red-500" : "border-gray-200"
          }`}
          type="email"
          name="email"
          id="email"
        />
      </Field>
      <Field className="auth-label" label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`auth-input ${
            errors.error ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <Field
        className="auth-label"
        label="Password Repeat"
        error={errors.password_repeat}
      >
        <input
          {...register("password_repeat", {
            required: "Retype Password is required",
            validate: (value) =>
              value === password.current || "Password do not match",
          })}
          className={`auth-input ${
            errors.error ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password_repeat"
          id="password_repeat"
        />
      </Field>
      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default SignUpForm;
