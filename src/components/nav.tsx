import React from "react";
import logo1 from "@/components/images/nivetti-systems-logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "./theme-button";

function NavBar() {
  return (
    <div className="flex justify-between my-5">
      <Image src={logo1} alt="nivetti-systems-logo" height={100} width={100} />
      <div className="flex gap-2 items-center">
        <ModeToggle />
        <Button>Sign-in</Button>
      </div>
    </div>
  );
}

export default NavBar;
