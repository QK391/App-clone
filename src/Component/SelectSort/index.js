import React from "react";
import { SelectSortWrapper } from "./style";

const SelectSort = ({
  name,
  options,
  value,
  onChange,
  className
}) => {
  return (
    <SelectSortWrapper>
      <select
        name={name}
        value={value}
        options={options}
        onChange={onChange}
        className={className}
      >
        {options.map((item) => (
          <option value={item.value} key={item.id}>
            {item.title}
          </option>
        ))}
      </select>
    </SelectSortWrapper>
  );
};

export default SelectSort;
