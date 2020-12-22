import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, FooterSection, FooterLink, AppLogo,
} from './footer.styles';

const Footer = () => (
  <Container>
    <FooterSection>
      <FooterLink as="a" target="_blank" href="https://ooloo.io/employers">ooloo.io</FooterLink>
      <Link to="/">
        <AppLogo />
      </Link>
      <FooterLink style={{ textAlign: 'right' }} to="/terms">Terms & Privacy</FooterLink>
    </FooterSection>
  </Container>
);

export default Footer;
