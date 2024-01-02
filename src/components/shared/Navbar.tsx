"use client"

import React from "react";
import {
  Navbar as NavbarEl,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "./material-tailwind";

export default function Navbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  

  return <></>
}
