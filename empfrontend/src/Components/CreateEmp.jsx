import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

const BASE_URL = import.meta.env.VITE_API_URL;

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
 const onFormSubmit = async (newEmpObj) => {
  try {
    setLoading(true);

    let res = await fetch(`${BASE_URL}/employee-api/employees`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEmpObj),
    });

    console.log("STATUS:", res.status);

    if (!res.ok) {
      throw new Error("Request failed");
    }

    let data = await res.json();
    console.log("Response:", data);

    navigate("/list");

  } catch (err) {
    console.log("err in catch", err);
    setError(err.message);
  } finally {
    setLoading(false);
  }
};

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <h1 className="text-5xl text-center text-gray-700 mb-6 font-bold drop-shadow">Create New Employee</h1>
      <form className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-1 border-2 p-3 w-full rounded-xl focus:outline-none focus:border-blue-400 transition"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-1 border-2 p-3 w-full rounded-xl focus:outline-none focus:border-blue-400 transition"
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-1 border-2 p-3 w-full rounded-xl focus:outline-none focus:border-blue-400 transition"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-1 border-2 p-3 w-full rounded-xl focus:outline-none focus:border-blue-400 transition"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-1 border-2 p-3 w-full rounded-xl focus:outline-none focus:border-blue-400 transition"
        />
        {error && <p className="text-red-500 text-center text-lg font-semibold mt-2">{error}</p>}
        <button type="submit" className="text-2xl rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 text-white block mx-auto p-4 shadow-lg transition">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;