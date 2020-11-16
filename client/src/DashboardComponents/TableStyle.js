import styled from "styled-components";
import { FiSearch, FiPlus } from "react-icons/fi";

import mediaQ from "../mediaQueries";
export const TableHeading = styled.h2`
  font-size: 3rem;
`;

export const TableAction = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const TableSearch = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled(FiSearch)`
  font-size: 2rem;
  margin-right: 1rem;
  color: #a3a3a3;
`;
export const SearchInput = styled.input`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  border: none;
  width: ${({ width }) => (width ? width : "20rem")};
  &:focus {
    outline: none;
  }
`;
export const TableAdd = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const AddIcon = styled(FiPlus)`
  font-size: 3.5rem;
  color: #fff;
`;

// export const Table = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin-top: 1.5rem;
// `;
// export const TableHeaders = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr) 0.5fr 1fr;
//   gap: 2rem;
//   padding: 2rem;
//   font-size: 2rem;
//   background-color: var(--primary-color);
//   color: #fff;
//   text-transform: uppercase;

//   ${mediaQ("lg")`
//     font-size:1.5rem;
//   `}

//   ${mediaQ(`md`)`
//   grid-template-columns: repeat(3, 1fr) 0.5fr 0.5fr;
//   `}

// ${mediaQ(`sm`)`
//   font-size:1rem;
//   `}
// `;
// export const TableRow = styled.div`
//   grid-column: ${({ span }) => (span ? `span ${span}` : null)};
//   align-self: center;
//   ${mediaQ(`md`)`

//   `}
// `;
// export const TableItems = styled(TableHeaders)`
//   background-color: transparent;
//   color: black;
//   text-transform: capitalize;
//   border-bottom: 1px solid #c4c4c4;
//   position: relative;
// `;

export const ActionButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 2px;

  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  outline: none;
  &:first-child {
    margin-right: 1rem;
  }
`;

export const TableContainer = styled.div``;
export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 2rem;
  background-color: #fff;
  border-collapse: collapse;
  font-size: 2rem;
  > thead,
  > tbody {
    > tr {
      > th,
      > td {
        text-align: left;
        padding: 1.6rem;
        vertical-align: middle;
        border-top: 0;
        border-bottom: 1px solid #c4c4c4;
      }
    }
  }

  ${mediaQ("sm")`
  
  margin-bottom: 0;
      background-color: transparent;
      > thead{
        display: none;
      }

      > tbody {
        display: block;

        > tr {
          display: block;
          border: 1px solid #e0e0e0;
          border-radius: 2px;
          margin-bottom: 1.6rem;

          > td {
            background-color: #fff;
            display: block;
            vertical-align: middle;
            text-align: right;
            border-bottom: none;
            
          }
          > td[data-title]:before {
            content: attr(data-title);
            float: left;
            font-size: inherit;
            font-weight: 400;
            color: #757575;
            
          }
        }
      }
    
  `}
`;
export const TableHead = styled.thead`
  font-weight: 400;
  color: #fff;
  background-color: #fa9d3e;
  vertical-align: bottom;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`;
export const TableHeadItem = styled.th``;
export const TableBody = styled.tbody``;
export const TableBodyItem = styled.td`
  text-transform: capitalize;
`;
export const TableRow = styled.tr``;
