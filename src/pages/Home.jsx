import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
// import { useCallback } from "react";
import API from "../api/axios";

export default function Home() {
  const { user, logout } = useAuth();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await API.get("/auth/profile");
      setProfile(data);
    };
    if (user) fetchProfile();
  }, [user]);

  // const fetchProfile = useCallback(async () => {
  //   const { data } = await API.get("/auth/profile");
  //   setProfile(data);
  // }, []);

  // useEffect(() => {
  //   if (user) {
  //     fetchProfile();
  //   }
  // }, [user, fetchProfile]);

  // const fetchProfile = async () => {
  //   const { data } = await API.get("/auth/profile");
  //   setProfile(data);
  // };

  // useEffect(() => {
  //   if (user) {
  //     fetchProfile();
  //   }
  // }, [user]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome Home Page</h1>
      <div
        style={{
          margin: "0px",
          padding: "0px",
          borderRadius: "2px",
          border: "2px solid red",
          display: "flex",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nemo
        temporibus voluptate voluptatum et rem ratione aut blanditiis quas ullam
        reprehenderit assumenda a fugit omnis cumque recusandae dolores! Neque
        rerum placeat illo ex similique necessitatibus eos consequuntur aliquam
        quos, dolores magnam nostrum sint tenetur quibusdam doloribus, ea atque,
        iure maiores aliquid! Odio eaque omnis distinctio quae dicta veniam
        voluptatibus similique praesentium. Doloribus, iusto exercitationem!
        Nihil dolore, nam quos illum modi cum dignissimos ipsam quasi aut ipsum,
        fugiat ducimus labore esse ab. Vero maiores, esse numquam repudiandae
        accusamus tenetur quisquam tempora quasi soluta veniam, necessitatibus
        officiis provident libero aliquid voluptatum temporibus!
      </div>
      <h3>welcome {profile?.name}</h3>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
