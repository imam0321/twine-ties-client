import { useForm } from "react-hook-form";
import Field from "../../components/Field";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[20px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field className="auth-label" label="Name" error={errors.name}>
        <input
          {...register("name", { required: "Name is Required" })}
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
        {...register('email', {required: 'Email is Required'})}
        className={`auth-input ${errors.error ? "border-red-500" : "border-gray-200"}`} type="email" name="email" id="email" />
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
          className={`auth-input ${errors.error ? "border-red-500" : "border-gray-200"}`} 
          type="password"
          name="password"
          id="password"
        />
      </Field>
      <Field className="auth-label" label="Retype Password" error={errors.password}>
        <input
          className={`auth-input ${errors.error ? "border-red-500" : "border-gray-200"}`} 
          type="password"
          name="Retype_Password"
          id="Retype_Password"
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
