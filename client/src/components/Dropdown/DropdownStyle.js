import styled from "styled-components";
export const Dropdown = styled.div`
  display: inline-block;
  position: relative;
`;
export const DropdownToggle = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid var(--primary-color);
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  border-radius: ${({ open }) => (open ? "10px 10px 0 0" : "10px")};
  font-size: 1.8rem;
  align-items: center;
  border-bottom: ${({ open }) =>
    open ? "1px solid var(--primary-color)" : null};
  box-shadow: ${({ open }) =>
    open ? "0 6px 12px rgba(0, 0, 0, 0.175)" : null};
`;

export const DropdownList = styled.ul`
  list-style: none;
  position: absolute;
  width: 100%;
  top: 44px;
  left: 0;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  border-radius: ${({ open }) => (open ? "0px 0px 10px 10px" : "10px")};
`;
export const DropdownItem = styled.li`
  margin: 1rem 0 0.5rem 2rem;
  cursor: pointer;
`;
