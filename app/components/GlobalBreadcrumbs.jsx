'use client';
import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

export default function GlobalBreadcrumbs() {
  const router = useRouter();
  const pathSegments = router.pathname.split('/').filter((segment) => segment);

  return (
    <>
    <Breadcrumbs aria-label="breadcrumb">
      <Link href="/">Home</Link>
      {pathSegments.map((segment, index) => {
        const isLastSegment = index === pathSegments.length - 1;
        const href = `/${pathSegments.slice(0, index + 1).join('/')}`;

        return isLastSegment ? (
          <Typography key={segment}>{segment}</Typography>
        ) : (
          <Link key={segment} href={href}>
            {segment}
          </Link>
        );
      })}
    </Breadcrumbs>
    </>
  );
}