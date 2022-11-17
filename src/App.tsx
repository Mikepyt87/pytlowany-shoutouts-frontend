import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllShoutouts } from "./services/shoutoutApiService";
import Shoutout from "./models/Shoutouts";

function App() {
  const [allShoutouts, setAllShououts] = useState<Shoutout[]>();

  useEffect(() => {
    getAllShoutouts().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <ul>
        {allShoutouts?.map((item) => (
          <li key={item._id}>
            <p>To: {item.to}</p>
            <p>From: {item.from} </p>
            <p>"{item.text}"</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
