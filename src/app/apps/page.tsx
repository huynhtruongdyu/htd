import React from "react";
import Cards from "./_components/modules/cards";
import Image from "next/image";

const Page = () => {
  return (
    <div style={{ position: "relative" }}>
      <div style={{ height: "300px" }}>Test</div>
      <div
        style={{ height: "300px", backgroundColor: "red", position: "sticky" }}
      >
        Test
      </div>
      <div style={{ height: "300px" }}>Test</div>
      <div style={{ height: "300px" }}>Test</div>
      <div style={{ height: "300px" }}>Test</div>
    </div>
  );
};

export default Page;
