import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        A back-end developer with two years of working experience
      </SectionText>
      <Button onClick = {() => window.location = 'https://www.linkedin.com/in/wenkang1'}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;