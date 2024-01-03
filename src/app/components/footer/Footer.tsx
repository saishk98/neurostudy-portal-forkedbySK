import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import footerLogo from '../../images/footerLogo.svg';
import Typography, { TypographyVariant } from '../typography/Typography';
import facebookIcon from '../../images/facebook.svg';
import linkedinIcon from '../../images/linkedin.svg';
import instagramicon from '../../images/instagram.svg';
import twitterIcon from '../../images/twitter.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topLeft}>
          <Image src={footerLogo} alt='logo' />
          <div className={styles.footerDescription}>
            <Typography
              variant={TypographyVariant.Body2}
              color='var(--GhostWhite)'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et
              sapiente doloribus aspernatur iusto harum facere quis quae,
              quisquam, quam unde ex eius possimus atque, ipsa nam ad rem!
              Reiciendis!
            </Typography>
          </div>
          <div className={styles.socials}>
            <a
              href='https://www.facebook.com/neurodiversityacademy'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
              title='Visit our Facebook page'
            >
              <Image src={facebookIcon} alt='facebook-icon' />
            </a>
            <a
              href='https://www.linkedin.com/company/neurodiversity-academy/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Linkedin'
              title='Visit our Linkedin page'
            >
              <Image src={linkedinIcon} alt='linkedin-icon' />
            </a>
            <a
              href='https://www.instagram.com/neurodiversityacademy/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              title='Visit our Instagram page'
            >
              <Image src={instagramicon} alt='instagram-icon' />
            </a>
            <a
              href='https://twitter.com/neuro_d_academy'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
              title='Visit our Twitter page'
            >
              <Image src={twitterIcon} alt='twitter-icon' />
            </a>
          </div>
        </div>
        <div className={styles.topFoot}>
          <Typography
            className={styles.footerText}
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Services
          </Typography>

          <ul>
            <li>
              <a href='https://example.com'>Page one</a>
            </li>
            <li>
              <a href='https://example.com'>Page two</a>
            </li>
            <li>
              <a href='https://example.com'>Page three</a>
            </li>
          </ul>
        </div>
        <div className={styles.topFoot}>
          <Typography
            className={styles.footerText}
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Navigate
          </Typography>
          <ul>
            <li>
              <a
                href='https://example.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Blogs (opens in new tab)'
                title='visit Blogs page'
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href='https://example.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='About Us (opens in new tab)'
                title='visit About Us page'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='https://example.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Services (opens in new tab)'
                title='visit Service page'
              >
                Service
              </a>
            </li>
            <li>
              <a
                href='https://example.com'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Partner with Us (opens in new tab)'
                title='visit Partner with Us page'
              >
                Partner with Us
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.topFoot}>
          <Typography
            variant={TypographyVariant.Body1}
            color='var(--GhostWhite)'
          >
            Contact Us
          </Typography>
          <ul>
            <li>
              <a href='tel:+123456789'>+61123456</a>
            </li>
            <li>
              <a href='mailto:m.bluth@example.com'>
                info@neurodiversityacademy.com
              </a>
            </li>
            <li>
              <a
                href='https://www.google.com/maps?q=123+Lorem+Road,+Sydney,+2000'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Visit our office in Sydney'
                title='View our office location on Google Maps'
              >
                123, Lorem Road, Sydney, 2000
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footprint}>
        <div className={styles.leftFootprint}>
          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            &copy; 2023 All Rights Reserved
          </Typography>
        </div>
        <div className={styles.rightFootprint}>
          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            Terms of Service
          </Typography>

          <Typography
            variant={TypographyVariant.Body2}
            color='var(--GhostWhite)'
          >
            Privacy Policy
          </Typography>
        </div>
      </div>
    </footer>
  );
}
