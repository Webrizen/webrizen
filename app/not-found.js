'use client';
import Link from 'next/link';
import { Box, Container, Typography, Button } from '@mui/material';
 
export default function NotFound() {
  return (
    <>
      <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f2f5',
      }}
    >
      <Container maxWidth="sm">
        <Box textAlign="center">
          <Typography variant="h1" component="h1" sx={{ fontSize: 120, fontWeight: 700 }}>
            404
          </Typography>
          <Typography variant="h5" component="p" sx={{ marginBottom: 4 }}>
            Oops! Page not found.
          </Typography>
          <Typography variant="body1" component="p" sx={{ marginBottom: 4 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </Typography>
          <Link href='/'>
          <Button variant="contained" color="primary" >
            Go Back Home
          </Button>
          </Link>
        </Box>
      </Container>
    </Box>
    </>
  )
}