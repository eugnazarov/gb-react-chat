import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const ChatList = () => {
  const chatList = [
    { id: 1, name: "General" },
    { id: 2, name: "Games" },
    { id: 3, name: "Movies" },
    { id: 4, name: "Music" },
    { id: 5, name: "Javascript" },
    { id: 6, name: "React" },
    { id: 7, name: "Swift" },
    { id: 8, name: "C#" },
    { id: 9, name: "Python" },
    { id: 10, name: "Dart" },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List component="nav" aria-label="main mailbox folders">
        {chatList.map((chat) => (
          <ListItem disablePadding key={chat.id} disableGutters>
            <ListItemButton>
              {" "}
              <ListItemText primary={chat.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
