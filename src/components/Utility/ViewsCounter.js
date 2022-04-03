import React from "react";
import { useState } from "react";
import axios from "axios";
import { dbr } from "./firebase";
import { onValue, ref, set, update } from "firebase/database";
import styled from "styled-components";
const P1 = styled.p`
  font-size: 2rem;
  color: aliceblue;
`;
export default function ViewsCounter() {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
    var viewers_ip = ip;
    var ip_to_string = viewers_ip.toString();
    for (var i = 0; i < ip_to_string.length; i++) {
      ip_to_string = ip_to_string.replace(".", "-");
    }
    if (viewers_ip !== "") {
      set(ref(dbr, "page_views/" + ip_to_string), {
        viewers_ip: ip_to_string,
      })
        .then(() => {
          // Data saved successfully!
        })
        .catch((error) => {
          alert(error);
        });
    }
    const count_Views = ref(dbr, "page_views/");

    onValue(count_Views, (snapshot) => {
      document.getElementById("view_count_text").innerHTML = snapshot.size;
    });
  };

  getData();
  return (
    <div>
      <P1 id="view_count_text"></P1>
    </div>
  );
}
