import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [datas, setDatas] = useState([]);
  const [filteredData, setFilteredData] = useState("");
  const [title, setTitle] = useState([]);
  return (
    <MovieContext.Provider
      value={{
        data: [datas, setDatas],
        filteredDatas: [filteredData, setFilteredData],
        titles: [title, setTitle],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
