import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const gonder = (data) => console.log(data);

  return (
    <div className="max-w-[250px] mx-auto">
      <h1 className="text-3xl font-bold text-amber-700 text-center">
        Giriş Yap
      </h1>

      <form onSubmit={handleSubmit(handleSubmit(gonder))}>
        <label className="flex flex-col  gap-1 py-1">
          <span className="flex justify-between items-baseline">
            email{" "}
            {errors.email && (
              <span className="text-red-600 text-sm">Bu alan gerekli</span>
            )}
          </span>
          <input
            className=" h-8 px-3 rounded"
            type="email"
            {...register("email", { required: true })}
          />
          {/* errors will return when field validation fails  */}
        </label>

        <label className="flex flex-col  gap-1 py-1">
          <span className="flex justify-between items-baseline">
            Password{" "}
            {errors.password && (
              <span className="text-red-600 text-sm">Bu alan zorunlu</span>
            )}
          </span>
          <input
            className=" h-8 px-3 rounded"
            type="password"
            {...register("password", { required: true })}
          />
        </label>

        <div className="text-center">
          <button
            type="submit "
            className="flex-[2] bg-amber-600 py-2 px-4 rounded text-white"
          >
            Giriş Yap
          </button>
        </div>
      </form>
    </div>
  );
}
