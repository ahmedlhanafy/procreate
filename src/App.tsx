import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

export default function App() {
  const [menuShown, setMenuShown] = React.useState(-1);
  const [{ x, y }, setXY] = React.useState({ x: 0, y: 0 });

  const openMenu = (target: HTMLElement, menu: number) => {
    const { x, y, width } = target.getBoundingClientRect();
    setXY({ x: x + width / 2, y: y + 30 });
    setMenuShown(menu);
  };

  return (
    <AnimateSharedLayout>
      <div className="App">
        <div>
          <a
            style={{ marginRight: 80 }}
            href="#"
            onClick={(event) => {
              openMenu(event.target as HTMLElement, 0);
            }}
          >
            Home
            {menuShown === 0 && (
              <MenuWrapper animate height={170} layoutId="menu" x={x} y={y}>
                <AnimatePresence>
                  <motion.h2
                    animate
                    style={{
                      color: "white",
                      zIndex: 1,
                      margin: 0,
                      padding: 8,
                      alignSelf: "start"
                    }}
                  >
                    Canvas
                  </motion.h2>

                  <Row
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    different shit
                  </Row>
                  <Row
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    Ahmed
                  </Row>
                  <Row
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.05 }}
                  >
                    Info
                  </Row>
                </AnimatePresence>
                <BG1 />
              </MenuWrapper>
            )}
          </a>
          <a
            href="#"
            style={{ marginRight: 80 }}
            onClick={(event) => {
              openMenu(event.target as HTMLElement, 1);
            }}
          >
            About
            {menuShown === 1 && (
              <MenuWrapper
                animate
                width={240}
                height={340}
                layoutId="menu"
                x={x}
                y={y}
              >
                <motion.h2
                  animate
                  style={{
                    color: "white",
                    zIndex: 1,
                    margin: 0,
                    padding: 8,
                    alignSelf: "start"
                  }}
                >
                  Canvas
                </motion.h2>

                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  Hello World
                </Row>
                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  Cool
                </Row>
                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  How amazing
                </Row>
                <BG1 />
              </MenuWrapper>
            )}
          </a>
          <a
            href="#"
            onClick={(event) => {
              openMenu(event.target as HTMLElement, 2);
            }}
          >
            Bruhhh!!
            {menuShown === 2 && (
              <MenuWrapper
                animate
                width={160}
                height={140}
                layoutId="menu"
                x={x}
                y={y}
              >
                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  Hello World
                </Row>
                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  Cool
                </Row>
                <Row
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  How amazing
                </Row>
                <BG1 />
              </MenuWrapper>
            )}
          </a>
        </div>

        <img src="https://therightsofnature.org/wp-content/uploads/2018/01/turkey-3048299_1920.jpg" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </AnimateSharedLayout>
  );
}

const MenuWrapper = styled(motion.div)<{
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}>`
  height: ${(props) => props.height ?? 180}px;
  width: ${(props) => props.width ?? 200}px;
  border-radius: 6px;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // padding-top: 8px;
  border: 0.4px solid rgba(0, 0, 0, 0.1);
  ${(props) => css`
    top: ${props.y ?? 0}px;
    left: ${(props.x ?? 0) - (props.width ?? 200) / 2}px;
  `}
  overflow-y: auto;
`;
const BG1 = styled.div`
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const Row = styled(motion.span)`
  color: rgba(255, 255, 255, 0.7);
  background-color: black;
  height: 42px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  align-items: center;
  z-index: 1;
`;
