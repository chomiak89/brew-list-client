import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth.context";
import "../styles/profilepage.css";

export default function ProfilePage() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [changeImage, setChangeImage] = useState(false);

  const previewImage = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setProfileImage(reader.result);
    };
  };

  return (
    <div>
      {isLoggedIn && <p>Hello {user.username}, welcome to your profile page</p>}
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-image-container">
            <button onClick={() => setChangeImage(!changeImage)}>
              <i className="fa-solid fa-pen-to-square"></i>
            </button>
          </div>
          {changeImage && (
            <div className="change-image-container">
              <img src={profileImage}></img>
              <input
                type="file"
                id="fileInput"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  console.log(e.target.files);
                  setImageFile(e.target.files[0]);
                  previewImage(e.target.files[0]);
                }}
              ></input>
            </div>
          )}
          <p className="profile-username">
            {isLoggedIn && <span>{user.username}</span>}
          </p>
        </div>
        <div className="profile-sub-header"></div>
      </div>
    </div>
  );
}
