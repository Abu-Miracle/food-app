import { ArrowLeft, Edit2, Save, X, Camera } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fname: "Oluwafemi",
    lname: "Johnson",
    email: "oluwafemi@email.com",
    phone: "+234 812 345 6789",
    address: "123 Victoria Island, Lagos, Nigeria",
    dateOfBirth: "1995-06-15",
  });

  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedProfile(profile);
  };

  const handleSave = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditedProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="pb-10">
      <header className="flex px-10 md:px-14 py-7 items-center justify-between">
        <div className="flex items-center">
          <ArrowLeft
            size={20}
            className="mr-2 cursor-pointer text-lily-green"
            onClick={() => navigate(-1)}
          />
          <h1 className="font-semibold text-xl text-lily-green">
            Your Profile
          </h1>
        </div>

        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="flex items-center px-4 py-2 bg-lily-green text-lily-light rounded-lg hover:bg-lily-green/90  text-sm font-medium"
          >
            <Edit2 size={16} className="mr-2" />
            Edit Profile
          </button>
        ) : (
          <div className="hidden md:flex space-x-2">
            <button
              onClick={handleCancel}
              className="flex items-center px-4 py-2 border border-gray-300 text-[#707070] rounded-lg hover:bg-gray-50  text-sm"
            >
              <X size={16} className="mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex items-center px-4 py-2 bg-lily-green text-lily-light rounded-lg hover:bg-lily-green/90  text-sm font-medium"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </header>

      <div className="w-full flex items-center justify-center bg-[url('assets/smeal5.jpg')] bg-cover bg-center h-[50vh]">
        <div className="w-full flex flex-col justify-center items-center h-full bg-white/60">
          <div className="relative">
            <img
              src="/images/omar.jpg"
              alt="pfp-image"
              className="w-36 h-36 rounded-full"
            />
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-lily-green p-2 rounded-full shadow-lg hover:bg-lily-green/90">
                <Camera size={16} className="text-lily-light" />
              </button>
            )}
          </div>
          <h1 className="mt-3 font-semibold text-[22px] text-lily-green">
            Oluwafemi Johnson
          </h1>
          <p className="text-[12px] font-semibold text-black/50 my-1">
            Nigerian • Member since 2021
          </p>
          <div className="flex flex-row space-x-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold text-xl text-lily-green">18</span>
              <span className="text-sm text-black/85">Orders</span>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span className="font-semibold text-xl text-lily-green">
                N42,420.00
              </span>
              <span className="text-sm text-black/85">Spent</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 px-10 md:pl-16 w-full md:w-[50%]">
        <h3 className="text-lg font-semibold text-lily-green mb-4 border-b border-gray-200 pb-3">
          Personal Information
        </h3>

        <div className="space-y-4 pl-4">
          <div className="flex flex-col">
            <label htmlFor="fname" className="text-sm text-black/70 mb-2">
              First Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="fname"
                id="fname"
                value={editedProfile.fname}
                onChange={(e) => handleInputChange("fname", e.target.value)}
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {profile.fname}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lname" className="text-sm text-black/70 mb-2">
              Surname
            </label>
            {isEditing ? (
              <input
                type="text"
                name="lname"
                id="lname"
                value={editedProfile.lname}
                onChange={(e) => handleInputChange("lname", e.target.value)}
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {profile.lname}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-black/70 mb-2">
              Email
            </label>
            {isEditing ? (
              <input
                type="text"
                name="email"
                id="email"
                value={editedProfile.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {editedProfile.email}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm text-black/70 mb-2">
              Phone
            </label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                id="phone"
                value={editedProfile.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {editedProfile.phone}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="address" className="text-sm text-black/70 mb-2">
              Delivery Address
            </label>
            {isEditing ? (
              <input
                type="text"
                name="address"
                id="address"
                value={editedProfile.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {editedProfile.address}
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="dob" className="text-sm text-black/70 mb-2">
              Date of Birth
            </label>
            {isEditing ? (
              <input
                type="text"
                name="dob"
                id="dob"
                value={editedProfile.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBIrth", e.target.value)
                }
                className="px-4 py-2 outline-none border-[1px] rounded-md border-black/60 "
              />
            ) : (
              <div className="px-4 py-2 bg-gray-200 text-black/90 rounded-md">
                {editedProfile.dateOfBirth}
              </div>
            )}
          </div>
        </div>

        {isEditing && (
          <div className="flex space-x-3 mt-8 md:hidden">
            <button
              onClick={handleCancel}
              className="flex-1 flex items-center justify-center px-4 py-3 border border-gray-300 text-[#707070] rounded-lg hover:bg-gray-100  text-sm"
            >
              <X size={16} className="mr-2" />
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="flex-1 flex items-center justify-center px-4 py-3 bg-lily-green text-lily-light rounded-lg hover:bg-lily-green/90  text-sm font-medium"
            >
              <Save size={16} className="mr-2" />
              Save Changes
            </button>
          </div>
        )}
      </div>

      <div className="bg-white rounded-lg w-full md:w-[50%] px-10 md:pl-16 py-8 mt-6">
        <h3 className="text-lg font-semibold text-lily-green mb-3 border-b border-gray-200 pb-3">
          Account Settings
        </h3>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg cursor-pointer ">
            <div>
              <p className="font-medium text-black/80">Change Password</p>
              <p className="text-sm text-[#707070]">
                Update your account password
              </p>
            </div>
            <ArrowLeft className="rotate-180 text-[#707070]" size={16} />
          </div>

          <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg cursor-pointer ">
            <div>
              <p className="font-medium text-black/80">
                Notification Preferences
              </p>
              <p className="text-sm text-[#707070]">
                Manage your notifications
              </p>
            </div>
            <ArrowLeft className="rotate-180 text-[#707070]" size={16} />
          </div>

          <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg cursor-pointer ">
            <div>
              <p className="font-medium text-black/80">Privacy Settings</p>
              <p className="text-sm text-[#707070]">
                Control your privacy options
              </p>
            </div>
            <ArrowLeft className="rotate-180 text-[#707070]" size={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
