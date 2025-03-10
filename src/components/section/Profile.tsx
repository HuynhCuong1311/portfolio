import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import ProfileImg from "../../assets/images/profile.jpg";
import ProfileBackgroundAnimation from "../ProfileBackgroundAnimation";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import Starts from "../canvas/Starts";

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 32px 16px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const ProfileInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProfileLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 768px) {
    order: 2;
    margin-bottom: 30px;
    gap: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const ProfileRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;
const TextLoop = styled.p`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-weight: 600;
  font-size: 32px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    text-align: center;
    font-size: 22px;
    margin-bottom: 16px;
  }
`;
const Span = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.text_primary + 95};
  margin-bottom: 42px;
  line-height: 32px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
color:white;
cursor: pointer;
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 700;
  font-size: 18px;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }  
    @media (max-width: 768px) {
        padding: 12px 0;
        font-size: 18px;
    } 
`;
const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 2px solid ${({ theme }) => theme.primary};
  @media (max-width: 768px) {
    max-width: 280px;
    max-height: 280px;
  }
`;
const ProfileBackground = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  max-width: 1280px;
  overflow: hidden;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const Profile = () => {
  return (
    <div id="About">
      <ProfileContainer>
        <ProfileBackground>
          <Starts />
          <ProfileBackgroundAnimation />
        </ProfileBackground>
        <motion.div {...headContainerAnimation}>
          <ProfileInnerContainer>
            <ProfileLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>Hi, I am {Bio.name}</Title>
                <TextLoop>
                  I am a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>
              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>
              <ResumeButton href={Bio.resume} target="_blank">
                Check Resume
              </ResumeButton>
            </ProfileLeftContainer>
            <ProfileRightContainer>
              <motion.div {...headContentAnimation}>
                <Tilt>
                  <Img src={ProfileImg} alt={Bio.name} />
                </Tilt>
              </motion.div>
            </ProfileRightContainer>
          </ProfileInnerContainer>
        </motion.div>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
