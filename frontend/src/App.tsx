import React from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import Data from "./components/data.json";

function App() {
  const [language, setLanguage] = useState<string>("");
  const [drink, setDrink] = useState<string>("");
  const [data, setData] = useState<any>({})
  
  // dummy data
  // const data = Data.drinks;
  
  // console.log(data)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setDrink(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    getData()
  };
  
  const getData = async () => {
    var config = {
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      params: { s: drink },
      // data: data,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col w-full items-center relative space-y-5">
        <div className="pl-2 mt-5 md:w-1/2">
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="w-11/12">
          {
            data && <List drinks={data.drinks} />
          }
        </div>
      </div>
    </>
  );
}

export default App;
