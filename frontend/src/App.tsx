import React from "react";
import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import Data from "./components/data.json"

function App() {
  const [language, setLanguage] = useState<string>("");
  const [drink, setDrink] = useState<string>("")

  const data = Data.drinks

  // console.log(data)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    return setDrink(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    return;
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full items-center relative space-y-5 mt-4">
        <div className="pl-2 md:w-1/2">
          <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className="w-11/12">
          <List drinks={data} />
        </div>
      </div>
    </>
  );
}

export default App;
