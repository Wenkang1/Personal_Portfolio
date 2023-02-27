import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call (International)</LinkTitle>
      <LinkItem href='tel:+8613277171272'>+8613277171272</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Call (Domestic)</LinkTitle>
      <LinkItem href='tel:13277171272'>13277171272</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href='mailto:wenkang1@ualberta.ca'>wenkang1@ualberta.ca</LinkItem>
      </LinkColumn>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Programming is fun</Slogan>
        </CompanyContainer>
        <SocialContainer>
      <SocialIcons href="https://github.com/Wenkang1">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/wenkang1">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
      </SocialContainer>
      </SocialIconsContainer>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
