import * as React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import DraftsIcon from '@mui/icons-material/Drafts';
import ArchiveIcon from '@mui/icons-material/Archive';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Home from '@mui/icons-material/Home';
import Settings from '@mui/icons-material/Settings';

export const ChatList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return <Box>
        <ListItem component="div" disablePadding>
            <ListItemButton sx={{ height: 56 }}>
                <ListItemIcon>
                    <Home color="primary" />
                </ListItemIcon>
                <ListItemText
                    primary="Project Overview"
                    primaryTypographyProps={{
                        color: 'primary',
                        fontWeight: 'medium',
                        variant: 'body2',
                    }}
                />
            </ListItemButton>
            <Tooltip title="Project Settings">
                <IconButton
                    size="large"
                    sx={{
                        '& svg': {
                            color: 'rgba(255,255,255,0.8)',
                            transition: '0.2s',
                            transform: 'translateX(0) rotate(0)',
                        },
                        '&:hover, &:focus': {
                            bgcolor: 'unset',
                            '& svg:first-of-type': {
                                transform: 'translateX(-4px) rotate(-20deg)',
                            },
                            '& svg:last-of-type': {
                                right: 0,
                                opacity: 1,
                            },
                        },
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            height: '80%',
                            display: 'block',
                            left: 0,
                            width: '1px',
                            bgcolor: 'divider',
                        },
                    }}
                >
                    <Settings />
                    <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                </IconButton>
            </Tooltip>
        </ListItem>
        <Divider />
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
        </List>
    </Box>;
};