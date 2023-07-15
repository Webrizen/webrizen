'use client';
import styles from '@/app/styles/page.module.css';
import { Button } from '@mui/material';
import Image from 'next/image';
import HeroIMG from '@/app/assets/image/4.png';
import CampaignIcon from '@mui/icons-material/Campaign';

export default function Home() {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.background}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.leftHome}>
          <span className={styles.been}><CampaignIcon /> #1 Website Development Agency in Assam, India.</span>
          <h1>Going Beyond Web, <br /> Creating Web Applications With Your Imaginations.</h1>
          <p>
            We are a team of developers who are passionate about creating web applications. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur itaque, animi molestias temporibus architecto consequatur eos, laudantium maxime in laboriosam doloremque sint ex illo eaque beatae at iure, dolores eligendi.
          </p>
          <Button className={styles.Button}>Explore</Button>
        </div>
        <div className={styles.rightHome}>
          <Image src={HeroIMG} alt='Hero Image' loading='lazy' />
        </div>
      </div>
    </>
  )
}