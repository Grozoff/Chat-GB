import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import { memo } from "react";

export const Chat = memo(({ title, selected }) => {
  return (
    <ListItemButton selected={selected}>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>

      <div>
        <ListItemText primary={title} />
      </div>
    </ListItemButton>
  );
});
