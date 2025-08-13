import styled from "styled-components";
import { Col } from "../../grid/Col/Col";
import { size } from "../../../config/size";

export const Container = styled(Col)`
  padding: ${size.default}px;
  border: 1px solid gray;
  border-radius: ${size.small}px;
  gap: ${size.default}px;
`;

export const Title = styled.h2``;

export const Price = styled.div``;

export const NotInStock = styled.button``;
