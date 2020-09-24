import { Canvas } from "react-three-fiber";

import { OrbitControls } from "drei";

import HomeMenu from "../components/HomeMenu/HomeMenu";

import Link from "next/link";

import Earth from "./Earth";
import StarryBackground from "./StarryBackground";

function Background() {
  const PageLink = <Link href="/" />;
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      {PageLink != PageLink && <Earth />}
      <StarryBackground />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default Background;
/*azymuthal angle*/
