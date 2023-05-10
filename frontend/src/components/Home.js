import React from "react";
import Sidebar from "./Sidebar";
import HomeImage from "../images/homeImag.png";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section className="pl-[250px]">
        <div className="flex justify-center">
          <img width={700} src={HomeImage} alt="home-image" />
        </div>
      </section>
      ;
    </>
  );
}
