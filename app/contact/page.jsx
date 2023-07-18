"use client";
import React from "react";
import styles from "@/app/styles/contact.module.css";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { Call, Email, Instagram, LocationOn, WhatsApp } from "@mui/icons-material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Link from "next/link";

export default function Page() {
  return (
    <div className={styles.contactPage}>
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <div className={styles.twoCol}>
        <Box className={styles.contactInfo}>
          {/* Add Contact Info such as embed google map location, contact info's such as email, phone, etc. here  */}
          <div className={styles.mapContainer}>
            {/* Add Google Maps embed code or a Map component here */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30908.58753998167!2d89.18135249880446!3d26.54459176217511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a42f650ba637%3A0x4d4cfae5bafb2d2e!2sFalakata%2C%20West%20Bengal%20735211!5e1!3m2!1sen!2sin!4v1689684051477!5m2!1sen!2sin"
              style={{ border: 'none', borderRadius: '10px' }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.infoCont}>
              <Call/>
              <Link href="tel:+918761820422">+918761820422</Link>
            </div>
            <div className={styles.infoCont}>
              <Email/>
              <Link href="mailto:webrizen@gmail.com">webrizen@gmail.com</Link>
            </div>
            <div className={styles.infoCont}>
              <Instagram />
              <Link href="https://instagram.com/Arshahdul_ahmed">Instagram</Link>
            </div>
            <div className={styles.infoCont}>
              <WhatsApp />
              <Link href="https://wa.me/+918761820422">Whatsapp</Link>
            </div>
          </div>
        </Box>
        <Box className={styles.contactForm}>
          <Typography variant="h4" gutterBottom>
            Send us a Message
          </Typography>
          <div className={styles.addressInfos}>
            <h3><LocationOnIcon/>  Meet Us</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ad inventore, amet numquam magnam voluptatum adipisci officia rem! Harum maiores earum, totam cupiditate facilis vitae odio corrupti ex voluptatibus odit.</p>
          </div>
          <form>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button variant="contained" color="primary" size="large">
              Send
            </Button>
          </form>
        </Box>
      </div>
    </div>
  );
}
