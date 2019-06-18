import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import SEO from '../components/Seo';
import MeCircleImg from '../components/Images/MeCircle';

import GlobalStyles from '../components/GlobalStyles/index';

import GithubLogo from '../images/icons/github-black-round.svg';
import MailLogo from '../images/icons/mail-black-round.svg';
import LinkedInLogo from '../images/icons/linkedin-black-round.svg';
import KeybaseLogo from '../images/icons/keybase-black-borderless.svg';
import BlogLogo from '../images/icons/blog-black-borderless.svg';

import { FONT_SIZES, COLOR_PALETTE } from '../constants';


const ProfileImageWrapperDiv = styled.div`
  width: 300px;
  max-width: 60vw;
  margin: 0 auto;
  margin-top: 10vh;

  padding: 4px;

  border-radius: 50%;
  
  background-color: ${COLOR_PALETTE.blue.lightAlt};
`;

const NameH1 = styled.h1`
  ${FONT_SIZES.xxxxl}

  margin: 7vh 0;
  text-align: center;
`;

const ProfileLinksWrapperDiv = styled.div`
  display: flex;

  width: 500px;
  max-width: 90vw;

  margin: 0 auto;

  justify-content: center;
  align-items: center;
`;

const ProfileLinkDiv = styled.div`
  width: 100px;
  padding: 2%;

  border-radius: 10px;

  &:hover {
    background-color: ${COLOR_PALETTE.blue.lightAlt};
  }
`;

const IndexPage: React.FC<{}> = (): JSX.Element => (
  <GlobalStyles>
    <SEO
      title="Omar Ryhan"
      keywords={['omarryhan', 'omarfryhan', 'omar ryhan']}
    />
    <main>

      <ProfileImageWrapperDiv>
        <MeCircleImg />
      </ProfileImageWrapperDiv>

      <NameH1> Omar Ryhan </NameH1>

      <ProfileLinksWrapperDiv>

        <ProfileLinkDiv>
          <a href="mailto:omarryhan@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={MailLogo} alt="Mail logo" key="Mail" title="Send me an email" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://github.com/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={GithubLogo} alt="Github logo" key="Github" title="Github" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://keybase.io/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={KeybaseLogo} alt="Keybase.io logo" key="Keybase" title="Keybase" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <a href="https://linkedin.com/in/omarryhan" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInLogo} alt="LinkedIn logo" key="LinkedIn" title="LinkedIn" width="100%" />
          </a>
        </ProfileLinkDiv>
        <ProfileLinkDiv>
          <Link to="/blog">
            <img src={BlogLogo} alt="Blog logo" key="Blog" title="Read my blog" width="100%" />
          </Link>
        </ProfileLinkDiv>

      </ProfileLinksWrapperDiv>
    </main>
  </GlobalStyles>
);

export default IndexPage;
