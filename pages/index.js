import Head from "next/head";
import styles from "../styles/Home.module.css";

import React, { useState, lazy, Suspense, useEffect } from "react";

import dynamic from "next/dynamic";

import Header from "../components/Header/Header";
import HomeMenu from "../components/HomeMenu/HomeMenu";

const StarryBackground = dynamic(import("../r3f/StarryBackground"), {
  ssr: false,
});
export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);
  return (
    <>
      {hasMounted && <StarryBackground />}
      <Header />
      <HomeMenu />
    </>
  );
}
