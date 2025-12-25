import React from "react";

const AccountSettings = () => {
  return (
    <>
      {/* ================= NAVIGATION (ADD YOUR NAV HERE) ================= */}
      {/* NAVIGATION */}
      {/* ================================================================== */}

      <div className="container">
        <h2>Account Settings</h2>
        <p className="email">contact@fcourg.com</p>

        <div className="card">
          <div className="left">
            <label>Organization Bio</label>
            <p className="bio">
              A community-driven environmental group focused on reforestation
              and waste reduction projects.
            </p>

            <label>Email Address</label>
            <input type="email" placeholder="e.g necessary cleaner" />

            <label>Organization Full Name</label>
            <input type="text" placeholder="e.g necessary cleaner" />

            <label>Address</label>
            <div className="address">
              <input type="text" placeholder="Country" />
              <input type="text" placeholder="State" />
              <input type="text" placeholder="City" />
            </div>

            <input type="text" placeholder="Street" />
          </div>

          <div className="right">
            <label>Profile Picture</label>
            <div className="profile-pic">
              <span>
                Update <br /> Profile Picture
              </span>
            </div>
          </div>
        </div>

        <h3>Legal Documents</h3>
        <div className="documents">
          <div className="upload-box">
            <p>
              Drop your image here or <span>Browse</span>
            </p>
          </div>

          <div className="upload-box">
            <p>
              Drop your image here or <span>Browse</span>
            </p>
          </div>
        </div>

        <button className="save-btn">SAVE CHANGES</button>

        <div className="danger">
          <p className="delete">Delete Account</p>
          <p>Log out</p>
        </div>
      </div>

      {/* ===================== STYLES ===================== */}
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        body {
          background: #f5f6f4;
          margin: 0;
        }

        .container {
          max-width: 900px;
          margin: 40px auto;
          padding: 20px;
        }

        h2 {
          text-align: center;
        }

        .email {
          text-align: center;
          color: #666;
          margin-bottom: 30px;
        }

        .card {
          background: #fff;
          border-radius: 10px;
          padding: 20px;
          display: flex;
          gap: 30px;
        }

        .left {
          flex: 2;
        }

        .right {
          flex: 1;
          text-align: center;
        }

        label {
          font-weight: bold;
          display: block;
          margin-top: 15px;
        }

        .bio {
          background: #f1f1f1;
          padding: 10px;
          border-radius: 6px;
          font-size: 14px;
        }

        input {
          width: 100%;
          padding: 10px;
          margin-top: 5px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        .address {
          display: flex;
          gap: 10px;
        }

        .profile-pic {
          width: 160px;
          height: 160px;
          background: #ddd;
          border-radius: 50%;
          margin: 20px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: #555;
          text-align: center;
          cursor: pointer;
        }

        .documents {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .upload-box {
          flex: 1;
          background: #fff;
          border: 2px dashed #ccc;
          padding: 40px;
          text-align: center;
          border-radius: 10px;
        }

        .upload-box span {
          color: green;
          cursor: pointer;
        }

        .save-btn {
          background: #1f4d2b;
          color: #fff;
          border: none;
          padding: 12px 25px;
          border-radius: 8px;
          margin-top: 25px;
          float: right;
          cursor: pointer;
        }

        .danger {
          margin-top: 60px;
        }

        .delete {
          color: red;
          font-weight: bold;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .card {
            flex-direction: column;
          }

          .documents {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default AccountSettings;
