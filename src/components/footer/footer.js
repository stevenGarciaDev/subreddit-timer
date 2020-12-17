import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container, FooterLink, AnchorLink, AppLogo,
} from './footer.styles';

const Footer = () => (
  <Container>
    <AnchorLink target="_blank" href="https://ooloo.io/employers">ooloo.io</AnchorLink>
    <Link to="/">
      <AppLogo />
    </Link>
    <FooterLink to="/terms">Terms & Privacy</FooterLink>
  </Container>
);

export default Footer;
