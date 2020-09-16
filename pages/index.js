import Head from "next/head";
import styles from "../styles/Home.module.css";

import StarryBackground from "../r3f/StarryBackground";

import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

export default function Home() {
  return (
    <>
      <StarryBackground />
      <Header />
      <HomeMenu />
    </>
  );
}
