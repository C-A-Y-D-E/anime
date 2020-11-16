import styled from "styled-components";

import { Link } from "react-router-dom";
import mediaQ from "../../mediaQueries";

export const Nav = styled.nav`
  height: 8rem;
  width: 100%;
`;
export const NavContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  padding: 0 5rem;
  @media screen and (max-width: 99.1rem) {
    padding-right: 3rem;
    padding-left: 3rem;
  }
  @media only screen and (max-width: 600px) {
    & {
      padding: 0 1rem;
    }
  }
`;
export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
`;
export const NavItem = styled.li`
  margin-right: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;

  & span {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 600px) {
    & {
      font-size: 1.5rem;
    }
  }
`;
export const NavLogo = styled(Link)`
  ${mediaQ("sm")`
   & svg {
      width: 18rem;
    }
  `}
  ${mediaQ("xs")`
   & svg {
      width: 16rem;
    }
  `}
  ${mediaQ("xxs")`
   & svg {
      width: 14rem;
    }
  `}
`;

export const DropDownContainer = styled.div`
  height: auto;
  width: 30rem;
  border: 1px solid;
  position: absolute;
  top: 5rem;
  right: 0;
  background-color: #fff;
`;

export const DropDownMenu = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  border-bottom: 1px solid;
`;

export const DropItem = styled.div`
  border-bottom: ${({ active }) => (active ? ".8rem solid #FA9D3E" : "none")};
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const SignUp = styled.form``;
export const Login = styled.form``;
