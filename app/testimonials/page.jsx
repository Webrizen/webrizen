'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/app/styles/services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Button, Card, CardContent, CardMedia, Typography, Skeleton } from '@mui/material';
import { Star } from '@mui/icons-material';

export default function Page() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();
        setTestimonials(data.testimonials);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderStars = (stars) => {
    const filledStars = Math.floor(stars);
    const hasHalfStar = stars - filledStars >= 0.5;

    const starsArray = [];

    for (let i = 0; i < filledStars; i++) {
      starsArray.push(<Star key={i} />);
    }

    if (hasHalfStar) {
      starsArray.push(<Star key={filledStars} />);
    }

    return starsArray;
  };

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
            {testimonials.map((testimonial, index) => (
              <div className={styles.card} key={index}>
                <Image
                  src={testimonial.image}
                  alt="Testimonial Image"
                  loading="lazy"
                  width={200}
                  height={200}
                  style={{ height: '200px', width: '200px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <div className={styles.stars}>
                  {renderStars(testimonial.stars)}
                </div>
                <h3>{testimonial.name}</h3>
                <p>{testimonial.message}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}