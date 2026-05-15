import { useLocation, useNavigate } from "react-router";

function ViewEmployee() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div className=" mt-10">
      <h1 className="text-5xl text-center mb-5">
        Employee Details
      </h1>
      <div className="text-center rounded-4xl py-10 text-xl border border-gray-500 mt-15 mx-96">
        <p>Name: {state.name}</p>
        <p>Email: {state.email}</p>
        <p>Mobile: {state.mobile}</p>
        <p>Designation: {state.designation}</p>
        <p>Company: {state.companyName}</p>
        </div>
    </div>
  );
}

export default ViewEmployee