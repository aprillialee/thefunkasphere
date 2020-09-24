import Head from "next/head";
import styles from "../styles/Home.module.css";

import React, { useState, useEffect } from "react";

import dynamic from "next/dynamic";

import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

const Background = dynamic(import("../r3f/Background"), {
  ssr: false,
});
export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <Background />}
      <Header />
      <HomeMenu />
    </>
  );
}
