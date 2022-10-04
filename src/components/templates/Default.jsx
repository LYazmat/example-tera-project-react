import React from "react";

import DrawerMenu from "../molecules/DrawerMenu";

import AppHeader from "../organisms/AppHeader";
import AppFooter from "../organisms/AppFooter";

export default function Default(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="wrapper">
      <DrawerMenu open={open} setOpen={setOpen} />
      <AppHeader setOpen={setOpen} />
      {props.children}
      <AppFooter />
    </div>
  );
}
