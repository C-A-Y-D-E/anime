import styled from "styled-components";
import { Container } from "../../globalStyles";
import mediaQ from "../../mediaQueries";
export const BannerContainer = styled(Container)`
  position: relative;
  ${mediaQ("xl")`
  padding-right: 0rem !important;
    padding-left: 0rem !important;
  `}
  @media only screen and (max-width: 600px) {
    & {
      margin-top: 0 !important;
    }
  }
`;
