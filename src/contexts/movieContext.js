import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [datas, setDatas] = useState([]);
  const [searchTarm, setSearchTarm] = useState("");
  const [title, setTitle] = useState([]);
  return (
    <MovieContext.Provider
      value={{
        data: [datas, setDatas],
        searchTarms: [searchTarm, setSearchTarm],
        titles: [title, setTitle],
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
