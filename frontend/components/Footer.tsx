"use client";

import Image from "next/image";
import styled from "styled-components";
import githubLogo from "@/public/media/github logo.png";
import discordLogo from "@/public/media/discord logo.png";
import linkedInLogo from "@/public/media/linkdin logo.png";
import whiteLogo from "@/public/media/logowhite.png";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContainer className="footer-container">
        <div>
          <LocationInfo className="location-info">
            <h3>
              CONTACT
              <br />
            </h3>
            <a href="mailto:BRANDEV22@GMAIL.COM">BRANDEV22@GMAIL.COM</a>
            <br />
            <address>
              JACKSONVILLE
              <br />
              FL, 32256 <br />
            </address>
          </LocationInfo>

          <SocialMediaIcons className="social-media-icons">
            <a href="https://github.com/albertbrannan4" target="_blank">
              <Image
                style={Icons}
                className="githubLogo"
                src={githubLogo}
                alt=""
              />
            </a>
            <a href="https://discord.gg/8Xq5uR3b" target="_blank">
              <Image
                style={Icons}
                className="discordLogo"
                src={discordLogo}
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/albertbrannan4/"
              target="_blank"
            >
              <Image
                style={Icons}
                className="linkdinLogo"
                src={linkedInLogo}
                alt=""
              />
            </a>
          </SocialMediaIcons>
        </div>

        <Image
          style={{ width: "30%", height: "100px" }}
          className="brandLogo"
          src={whiteLogo}
          alt=""
        />
      </FooterContainer>
    </StyledFooter>
  );
}

const Icons = {
  width: "50px",
  height: "50px",
};

const StyledFooter = styled.footer`
  height: 10rem;
  background-color: #28282b;
  color: white;
  width: 100%;
  padding: 2%;
  display: flex;
  justify-content: center;
  border-top: 1px solid grey;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const SocialMediaIcons = styled.div`
  display: flex;
`;

const LocationInfo = styled.div`
  padding-left: 10%;
  font-size: 0.8em;
  width: 100%;
`;

/*



  a {
    text-decoration: none;
    color: inherit;
  }

  */
