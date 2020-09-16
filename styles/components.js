import styled from "styled-components";
import theme from "./theme";

const { spacing, colors } = theme;

const Container = styled.div`
  height: ${spacing.fullHeight};
  width: ${spacing.fullWidth};
  padding: ${spacing.extraLarge};
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  /* margin: 0 50px; */
  font-size: 32px;
`;

export { Container, Text };
