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

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        placeholder={``}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Users
        </a>
      </Typography>
    </ul>
  );

  return <></>
}
