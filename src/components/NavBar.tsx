import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";

const Nav = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
  color: white;
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;
const NavBarLogo = styled(Link)`
  width: 80%;
  font-weight: 500;
  font-size: 18px;
  padding: 0 6px;
  text-decoration: none;
  color: inherit;
`;
const NavItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-item: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-wight: 500;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = styled.div<MobileMenuProps>`
  width: 100%;
  display: none;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  left: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  z-index: ${({ isOpen }) => (isOpen ? 1000 : -1000)};

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const them = useTheme();
  return (
    <Nav>
      <NavBarContainer>
        <NavBarLogo to={"/"}>Huynh Quang Cuong</NavBarLogo>
        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRoundedIcon style={{ color: "inherit" }} />
        </MobileIcon>
        {/* {isOpen && ( */}
        <MobileMenu isOpen={isOpen}>
          <NavLink onClick={() => setIsOpen(!isOpen)} href={"#About"}>
            About
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href={"#Skills"}>
            Skills
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href={"#Experience"}>
            Experience
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href={"#Projects"}>
            Projects
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href={"#Education"}>
            Education
          </NavLink>
          <GithubButton
            href={Bio.github}
            target="_blank"
            style={{
              backgroundColor: them.primary,
              color: them.text_primary,
            }}
          >
            Github Profile
          </GithubButton>
        </MobileMenu>
        {/* )} */}
        <NavItems>
          <NavLink href={"#About"}>About</NavLink>
          <NavLink href={"#Skills"}>Skills</NavLink>
          <NavLink href={"#Experience"}>Experience</NavLink>
          <NavLink href={"#Projects"}>Projects</NavLink>
          <NavLink href={"#Education"}>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
      </NavBarContainer>
    </Nav>
  );
};

export default NavBar;
