import { useState } from "react";
import { Camera, Edit } from "lucide-react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Riya Gupta",
    email: "riya.kumari@example.com",
    phone: "+91 9876543210",
    dob: "1990-05-12",
    gender: "Female",
    bloodGroup: "B+",
    allergies: "None",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXRsEwpFFX0OKKI2dQwdnS3hsLq_2Bogf2g&s",
  });

  const handleEditField = (field) => {
    const newValue = prompt(`Edit ${field}`, user[field]);
    if (newValue !== null) setUser({ ...user, [field]: newValue });
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      {/* Header */}
      <h1 className="text-3xl font-bold text-purple-700 mb-10 text-center">
        My Profile
      </h1>

      <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* Profile Photo */}
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-40 h-40 rounded-full shadow-md object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition rounded-full cursor-pointer"
                 onClick={() => alert("Open file picker to change photo")}>
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-purple-700">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Profile Info */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Personal Info */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-purple-700 mb-4 flex items-center justify-between">
              Personal Information
              <Edit className="w-5 h-5 cursor-pointer hover:text-blue-500" onClick={() => handleEditField("name")} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Date of Birth</p>
                <p className="font-medium">{user.dob}</p>
              </div>
              <div>
                <p className="text-gray-500">Gender</p>
                <p className="font-medium">{user.gender}</p>
              </div>
              <div>
                <p className="text-gray-500">Blood Group</p>
                <p className="font-medium">{user.bloodGroup}</p>
              </div>
              <div>
                <p className="text-gray-500">Allergies</p>
                <p className="font-medium">{user.allergies}</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-purple-700 mb-4 flex items-center justify-between">
              Contact Information
              <Edit className="w-5 h-5 cursor-pointer hover:text-blue-500" onClick={() => handleEditField("phone")} />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Phone</p>
                <p className="font-medium">{user.phone}</p>
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-medium">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="bg-blue-500 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-transform transform hover:scale-105 shadow-md">
              Save Changes
            </button>
            <button className="bg-white border border-purple-700 text-purple-700 px-6 py-2 rounded-lg hover:bg-purple-700 hover:text-white transition-transform transform hover:scale-105 shadow-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
