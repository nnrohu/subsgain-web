import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useAuth } from '../context/AuthContext';
import Avatar from '@mui/material/Avatar';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

export default function home() {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  const router = useRouter();

  const db = getFirestore();

  const mdTheme = createTheme();

  const q = query(collection(db, 'videos'), where('userId', '==', user.uid));

  useEffect(async () => {
    const userSub = onSnapshot(doc(db, 'users', user.uid), (doc) => {
      console.log('User data: ', doc.data()); // TODO: get coins from here
    });

    const campaignSub = onSnapshot(q, (querySnapshot) => {
      const campaign = [];
      querySnapshot.forEach((doc) => {
        campaign.push(doc.data());
      });
      console.log('Campaign of user: ', campaign); //TODO: data of user campaign to show on dashboard
    });
  }, [user]);

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Avatar
            sx={{ m: 1, bgcolor: 'secondary.main' }}
            alt='user image'
            src={user.photoURL}
          >
            H
          </Avatar>
          <Typography component='h1' variant='h5'>
            {user.displayName}
          </Typography>
          <Typography component='h1' variant='h5'>
            {user.email}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
