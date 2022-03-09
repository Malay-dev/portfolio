import React from "react";
import { db_VC } from "./firebase";
import { onValue, ref, set } from "firebase/database";
import styled from "styled-components";

const P1 = styled.p`
  font-size: 2rem;
  color: aliceblue;
`;
export default function ViewsCounter() {
  var http = require("http");

  http.get({ host: "api.ipify.org", port: 80, path: "/" }, function(resp) {
    resp.on("data", function(ip) {
      var viewers_ip = ip;
      var ip_to_string = viewers_ip.toString();
      for (var i = 0; i < ip_to_string.length; i++) {
        ip_to_string = ip_to_string.replace(".", "-");
      }
      set(ref(db_VC, "page_views/" + ip_to_string), {
        viewers_ip: viewers_ip,
      })
        .then(() => {
          // Data saved successfully!
        })
        .catch((error) => {
          alert(error);
        });
      const count_Views = ref(db_VC, "page_views/");
      var temp = [];
      onValue(count_Views, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          temp.push(childKey);
        });
        document.getElementById("view_count_text").innerHTML = temp.length;
      });
    });
  });
  return (
    <div>
      <P1 id="view_count_text"></P1>
    </div>
  );
}
