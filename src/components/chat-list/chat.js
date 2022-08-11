import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import DraftsIcon from '@mui/icons-material/Drafts';
import SettingsIcon from '@mui/icons-material/Settings';
import ArchiveIcon from '@mui/icons-material/Archive';
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider
} from '@mui/material';

export const ChatList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return <Box>
        <List component="nav" aria-label="main mailbox folders">
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                    <ChatIcon />
                </ListItemIcon>
                <ListItemText primary="Main chat" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 1}
                onClick={(event) => handleListItemClick(event, 1)}
            >
                <ListItemIcon>
                    <DraftsIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
            </ListItemButton>
        </List>
        <Divider />
        <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}
            >
                <ListItemIcon>
                    <ArchiveIcon />
                </ListItemIcon>
                <ListItemText primary="Archive" />
            </ListItemButton>
            <ListItemButton
                selected={selectedIndex === 3}
                onClick={(event) => handleListItemClick(event, 3)}
            >
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </ListItemButton>
        </List>
    </Box>;
};