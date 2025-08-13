import styled from "styled-components";
import { Row } from "../../grid/Row/Row";
import { size } from "../../../config/size";

export const Container = styled(Row)`
  align-items: center;
  gap: ${size.small}px;
`;

export const Quantity = styled.div`
  padding: 0 ${size.default}px;
`;

export const Button = styled.button``;
