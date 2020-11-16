import React from "react";
import { FiChevronDown } from "react-icons/fi";
import {
  Dropdown,
  DropdownToggle,
  DropdownList,
  DropdownItem,
} from "./DropdownStyle";
const Select = ({ seasons, active, select }) => {
  const [open, setOpen] = React.useState(false);
  const toggle = (season) => {
    select(season);
    setOpen(false);
  };
  return (
    <Dropdown>
      <DropdownToggle
        open={open === true ? open : null}
        onClick={() => setOpen(!open)}
      >
        <div>Season {active}</div>
        <FiChevronDown
          style={{
            marginLeft: "3rem",
            transform: open ? `rotate(180deg)` : null,
          }}
        />
      </DropdownToggle>

      {open ? (
        <DropdownList open={open === true ? open : null}>
          {seasons.map((season) => (
            <DropdownItem key={season} onClick={() => toggle(season)}>
              Season {season}
            </DropdownItem>
          ))}
        </DropdownList>
      ) : null}
    </Dropdown>
  );
};

export default Select;
