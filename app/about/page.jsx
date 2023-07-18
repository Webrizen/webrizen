"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/styles/about.module.css";
import Image from "next/image";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Tooltip, Card, Skeleton, CardContent, Typography } from "@mui/material";
import Link from "next/link";

export default function page() {
  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api");
        const data = await response.json();
        setAbout(data.about);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className={styles.about}>
        {loading ? (
          // Display skeleton cards while loading
          Array.from({ length: 2 }).map((_, index) => (
            <Card key={index} sx={{ height: "400px" }}>
              <Skeleton
                variant="rectangular"
                animation="wave"
                sx={{ height: 200 }}
              />
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
            {about.map((about, index) => (
              <>
                <div className={styles.banner}>
                  <Image
                    src={about.image}
                    width={0}
                    height={0}
                    alt="Banner Image"
                    style={{ width: "100%", height: "400px" }}
                    loading="lazy"
                  />
                </div>
                <div className={styles.mainAbout}>
                  <h2>About Us</h2>
                  <p>{about.text}</p>
                </div>
                <div className={styles.icons}>
                  <Link href={`tel:+${about.phone}`}>
                    <Tooltip title="Call Us">
                      <div className={styles.ico}>
                        <a href="mailto:"></a>
                        <CallIcon />
                      </div>
                    </Tooltip>
                  </Link>
                  <Link href={`mailto:${about.email}`}>
                  <Tooltip title="Email Us">
                    <div className={styles.ico}>
                      <MailIcon />
                    </div>
                  </Tooltip>
                  </Link>
                  <Link href={about.instagram}>
                  <Tooltip title="Connect on Instagram">
                    <div className={styles.ico}>
                      <InstagramIcon />
                    </div>
                  </Tooltip>
                  </Link>
                  <Link href={about.whatsapp}>
                  <Tooltip title="Connect via whatsapp">
                    <div className={styles.ico}>
                      <WhatsAppIcon />
                    </div>
                  </Tooltip>
                  </Link>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </>
  );
}
