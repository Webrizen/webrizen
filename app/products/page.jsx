'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className={styles.Services}>
        {loading ? (
          // Display skeleton cards while loading
          Array.from({ length: 4 }).map((_, index) => (
            <Card key={index} sx={{ height: '400px' }}>
              <Skeleton variant="rectangular" animation="wave" sx={{ height: 200 }} />
              <CardContent>
                <Typography variant="h5">
                  <Skeleton animation="wave" width="60%" />
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  <Skeleton animation="wave" width="80%" />
                  <Skeleton animation="wave" width="60%" />
                </Typography>
              </CardContent>
            </Card>
          ))
        ) : (
          <>
          {products.map((products, index) => (
            <div className={styles.card} key={index}>
              <Image src={products.image} alt='Services Image' loading='lazy' width={0} height={0} style={{ height: '200px', width: 'auto', borderRadius: '10px' }} />
              <h3>{products.title}</h3>
              <p>{products.description}...</p>
              <Link href={products.link}>
                <Button className={styles.Button}>Know More</Button>
              </Link>
            </div>
          ))}
          </>
        )}
      </div>
    </>
  );
}