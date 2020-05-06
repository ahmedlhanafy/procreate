import * as React from "react";
import styled from "styled-components";
import { BlurView } from "./Menu";
import { ImageContainer } from "./ImageCell";
import { motion } from "framer-motion";
import { useHistory } from "react-router";
import { getRandomImages } from "./utils";

export function RenameView({ id }: { id: string }) {
  const history = useHistory();
  const { author } = getRandomImages().find((i) => i.id === id);

  return (
    <Container>
      <BlurView
        onClick={() => history.goBack()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <Content>
        <ImageContainer  id={id} />
        <Input
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          placeholder="Rename image"
          value={author}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              history.goBack();
            }
          }}
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 70px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

const Input = styled(motion.input)`
  padding: 10px 27px;
  border-radius: 8px;
  background: #aeaeae33;
  outline: none;
  border: 1px solid rgb(56, 56, 56);
  color: white;
  font-size: 15px;
`;
