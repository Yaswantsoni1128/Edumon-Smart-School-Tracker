import { Link } from "react-router-dom";

const LoginOptions = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-green-100 p-5">
      <h2 className="absolute top-5 left-5 text-green-600 text-lg">
          <Link to="/" className="px-4 py-2 bg-white shadow-md rounded-lg hover:bg-green-200 transition">
            ← Back to Home
          </Link>
        </h2>
      <h1 className="text-4xl font-bold text-green-600 mb-10">Choose Login Type</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
        
        {/* Student Login Card */}
        <Link to="/student/login" className="hover:scale-105 transition-transform">
          <div className="p-6 flex flex-col items-center bg-green-50 rounded-xl shadow-[0px_0px_12px_rgba(0,0,0,0.20)] z-10 border-gray-300">
            <img src="/schoolStudent.png" alt="Student" className="rounded-full w-48 h-48 mb-4" />
            <h2 className="text-2xl font-semibold text-green-700">Login as Student</h2>
            <p className="text-gray-600 mt-2 text-center">Access your dashboard, track attendance, and stay updated.</p>
          </div>
        </Link>
        
        {/* School Login Card */}
        <Link to="/school/login" className="hover:scale-105 transition-transform">
          <div className="p-6 flex flex-col items-center bg-green-50 rounded-xl shadow-[0px_0px_12px_rgba(0,0,0,0.20)] z-10 border-gray-300">
            <img src="/schoolPrnciple.png" alt="School" className="rounded-full w-48 h-48 mb-4" />
            <h2 className="text-2xl font-semibold text-green-700">Login as School</h2>
            <p className="text-gray-600 mt-2 text-center">Manage student records, update attendance, and more.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginOptions;
