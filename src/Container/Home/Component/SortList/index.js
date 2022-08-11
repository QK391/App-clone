import React from "react";
import { SortListWrapper } from "./style";
import SelectSort from "../../../../Component/SelectSort";

const SortList = ({selectSort, handleSelectSort}) => {
  const sortItem = [
    {
      id: "option-0",
      title: "Select",
      value: 0,
    },
    {
      id: "option-1",
      title: "Giá tăng dần",
      value: 1,
    },
    {
      id: "option-2",
      title: "Giá giảm dần",
      value: 2,
    },
    {
      id: "option-3",
      title: "Thứ tự A-Z",
      value: 3,
    },
    {
      id: "option-4",
      title: "Thứ Tự Z-A",
      value: 4,
    },
  ];

  return (
    <SortListWrapper>
      <SelectSort
      options={sortItem} 
      name="sort"
      className="select-sort"
      value={selectSort}
      onChange={handleSelectSort}
      className="select"
      />
    </SortListWrapper>
  );
};

export default SortList;
