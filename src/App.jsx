import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [stockSearchList, setstockSearchList] = useState([]);

  // const headers = {
  //   "Content-Type": "application/x-www-form-urlencoded",
  //   Authorization: "Token c2f2aa3024fb7027f3d7ca69f586edb60761661f",
  // };

  const fetchAPI = async () => {
    const response = await axios.get("http://127.0.0.1:8080/api/stocks/aapl");
    setstockSearchList(response);
  };

  console.log(typeof stockSearchList);
  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {
          JSON.stringify(stockSearchList)
          /* {stockSearchList.map((stock, index) => (
          <div key={index}>
            <span>{stock.strinify()}</span>
            <br></br>
          </div>
        ))} */
        }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
