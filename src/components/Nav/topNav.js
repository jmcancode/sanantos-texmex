import React from "react";
import { Image } from "react-bootstrap";
import logo from "../../assets/IMG_6440-removebg-preview.png";

export default function Navigation() {
  return (
    <nav style={{ backgroundColor: "#171717", borderColor: "transparent" }}>
      <div className="p-2 text-center">
        <Image src={logo} alt="logo" width={100} height={100} />
      </div>
    </nav>
  );
}
