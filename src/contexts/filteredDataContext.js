import { createContext, useState } from "react";

export const FilteredDataContext = createContext();

export const FilteredDataProvider = (props) => {
  const [filteredData, setFilteredData] = useState("");
  return (
    <FilteredDataContext.Provider value={[filteredData, setFilteredData]}>
      {props.children}
    </FilteredDataContext.Provider>
  );
};
