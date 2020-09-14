import { keyframes } from "styled-components";

export const rotate = keyframes`

0% {
            transform: translateX(0) rotateY(0);
            transform-origin: 100% 50%;
  }
  100% {
            transform: translateX(100%) rotateY(180deg);
            transform-origin: 0% 50%;
  }
`;
