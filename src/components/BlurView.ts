import styled from "styled-components";
import { motion } from "framer-motion";

export const BlurView = styled(motion.div)`
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
