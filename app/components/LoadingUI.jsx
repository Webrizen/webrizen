'use client';
import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Skeleton } from '@mui/material';

export default function LoadingUI() {
  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Skeleton variant="text" width={100} height={30} />
          </Typography>
          <Skeleton variant="rectangular" width={100} height={40} />
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box sx={{ paddingTop: '64px', paddingBottom: '64px', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={400} height={30} />
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '24px' }}>
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="rectangular" width="100%" height={200} />
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="body2" sx={{ flexGrow: 1 }}>
              <Skeleton variant="text" width={200} height={20} />
            </Typography>
            <Typography variant="body2">
              <Skeleton variant="text" width={100} height={20} />
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}