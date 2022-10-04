import React from "react";
import { Drawer } from "@mui/material";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => {
        props.setOpen(false);
      }}
    >
      <List>
        <ListItem>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <Link to="/users">Usuários</Link>
        </ListItem>
        <ListItem>
          <Link to="/users/5">Meus Posts</Link>
        </ListItem>
        <ListItem>
          <Link to="/users/5/posts/new">Criar Post</Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
