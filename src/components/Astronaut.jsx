import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      {/* Component content removed */}
    </group>
  );
}
