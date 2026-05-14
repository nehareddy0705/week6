import { useLocation } from "react-router";


function Employee() {
  //read state received in navigation
  const { state } = useLocation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-gray-100">
        <div className="mb-6 flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <svg className="w-14 h-14 text-blue-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118A7.5 7.5 0 0112 15.75a7.5 7.5 0 017.5 4.368" /></svg>
          </div>
          <h2 className="text-3xl font-bold text-blue-700 mb-1">{state.name}</h2>
          <p className="text-gray-500 text-lg">{state.designation}</p>
        </div>
        <div className="space-y-2 text-left text-lg">
          <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Email:</span> <span className="text-gray-600">{state.email}</span></div>
          <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Mobile:</span> <span className="text-gray-600">{state.mobile}</span></div>
          <div className="flex items-center gap-2"><span className="font-semibold text-gray-700">Company:</span> <span className="text-gray-600">{state.companyName}</span></div>
        </div>
      </div>
    </div>
  );
}

export default Employee;