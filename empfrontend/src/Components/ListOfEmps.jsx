import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import Employee from "./Employee";

const BASE_URL = import.meta.env.VITE_API_URL;

function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/view", { state: empObj });
  };

  const gotoEditEmployee = (empObj) => {
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp",{state:empObj});
  };



      const deleteEmpByID = async (id) => {
    let res = await axios.delete(`${BASE_URL}/employee-api/employees/${id}`)
    if(res.status===200){
        getEmps();
    }
  }
    async function getEmps() {
      let res = await fetch(`${BASE_URL}/employee-api/employees`);
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }

    useEffect(() => {
        getEmps();
    }, []);


  return (
    <div>
      <h1 className="text-4xl text-center pb-10 font-bold text-gray-700">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white p-6 text-center rounded-2xl shadow-xl border border-gray-100"
          >
            <p className="text-lg font-semibold text-blue-700 mb-1">{empObj.name}</p>
            <p className="mb-4 text-gray-500">{empObj.email}</p>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-blue-500 hover:bg-blue-600 p-2 rounded-xl text-white font-medium"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-green-400 hover:bg-green-500 p-2 rounded-xl text-white font-medium"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmpByID(empObj._id)}
                className="bg-red-500 hover:bg-red-600 p-2 rounded-xl text-white font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;