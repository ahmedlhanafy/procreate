import React from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { BlurView } from "./BlurView";

type MenuProps = {
  x: number;
  y: number;
  children: React.ReactNode;
  width?: number;
  height?: number;
  open: boolean;
  onClose?: () => void;
};

export function Menu(props: MenuProps) {
  const { x = 0, y = 0, width = 280, children, open = true, onClose = () => {} } = props;
  const ref = React.useRef<HTMLDivElement>();
  const xOffset = x + width - window.innerWidth;
  
  useOnClickOutside(ref, onClose);

  return (
    <AnimatePresence>
      {open && (
        <>
          <MenuBeak x={x - 12} y={y + 14} layoutId="menuBeak" animate>
            <BlurView />
          </MenuBeak>
          <MenuWrapper ref={ref} animate layoutId="menu" width={width} x={x - (xOffset >= 0 ? xOffset / 2 : 0)} y={y + 22}>
            <BlurView />
            {children}
          </MenuWrapper>
        </>
      )}
    </AnimatePresence>
  );
}

const MenuWrapper = styled(motion.div)<{
  x: number;
  y: number;
  width: number;
}>`
  width: ${(props) => props.width}px;
  border-radius: 6px;
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 0.4px solid rgba(0, 0, 0, 0.1);
  ${(props) => css`
    top: ${props.y ?? 0}px;
    left: ${(props.x ?? 0) - props.width / 2}px;
  `}
  overflow-y: auto;
`;

const MenuBeak = styled(motion.div)<{ x: number; y: number }>`
  position: absolute;
  overflow: hidden;
  box-sizing: border-box;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(0, 0, 0, 0.5);
  ${(props) => css`
    top: ${props.y ?? 0}px;
    left: ${props.x ?? 0}px;
  `}
`;

export const MenuTitle = styled(motion.h2)`
  color: white;
  margin: 0;
  padding: 16px;
  align-self: start;
  z-index: 1;
`;

export const MenuRow = styled(motion.span)`
  color: rgba(255, 255, 255, 0.7);
  height: 42px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  font-size: 16px;
  display: flex;
  padding: 8px;
  box-sizing: border-box;
  align-items: center;
  cursor: pointer;
  z-index: 1;
`;
