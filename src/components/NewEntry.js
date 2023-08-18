//
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function NewEntry(props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function addEntry(data) {
    const dataWithUserId = { ...data, owner_id: props.userId };
    //console.log("add new entry", dataWithUserId);

    const token = localStorage.getItem("insta");
    axios
      .post("https://wit-courses.onrender.com/entries", dataWithUserId, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("The image has been successfully added!!");
          reset();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="border border-white mb-8 py-6 rounded-lg">
      <form className="max-w-[320px] mx-auto" onSubmit={handleSubmit(addEntry)}>
        <h2 className="text-lg mb-2 font-bold">Yeni İçerik Ekle</h2>
        <label className="flex flex-col  gap-1 py-1">
          <span className="flex justify-between items-baseline">
            Açıklama{" "}
            {errors.body && (
              <span className="text-red-600 text-sm">Bu alan gerekli</span>
            )}
          </span>
          <textarea
            className=" px-3 rounded"
            rows={3}
            type="text"
            {...register("body", { required: true })}
          />
          {/* errors will return when field validation fails  */}
        </label>

        <label className="flex flex-col  gap-1 py-1">
          <span className="flex justify-between items-baseline">
            Görsel{" "}
            {errors.img_url && (
              <span className="text-red-600 text-sm">Bu alan zorunlu</span>
            )}
          </span>
          <textarea
            className=" px-3 rounded"
            rows={3}
            type="text"
            {...register("img_url", { required: true })}
          />
        </label>

        <div className="text-center mt-2">
          <button
            type="submit "
            className="flex-[2] bg-amber-600 py-2 px-4 rounded text-white"
          >
            Fotoğraf Ekle
          </button>
        </div>
      </form>
    </div>
  );
}
