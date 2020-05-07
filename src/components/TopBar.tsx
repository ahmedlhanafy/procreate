import * as React from "react";
import styled from "styled-components";
import { BlurView } from "./BlurView";

type Props = { children?: React.ReactNode };

export function TopBar(props: Props) {
  const { children } = props;

  return (
    <Container>
      <BlurView />
      <Name>Procreate</Name>
      <Spacer />
      <IconsContainer>{children}</IconsContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 16px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Name = styled.h2`
  z-index: 1;
  margin: 0;
`;

const IconsContainer = styled.div`
  z-index: 1;
  display: flex;
`;

const Spacer = styled.span`
  flex: 1;
`;
