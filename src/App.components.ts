import styled from "styled-components";
import { Col } from "./components/grid/Col/Col";
import { size } from "./config/size";

export const Container = styled(Col)`
  gap: ${size.large}px;
`;
