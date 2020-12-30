import styled from "styled-components";

export const ProgressBarRoot = styled.div<{ disabled: boolean }>`
  height: 12px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  background-color: lightgrey;
`;

export const ProgressBarProgress = styled.div`
  height: 100%;
  background-color: darkgrey;
`;
