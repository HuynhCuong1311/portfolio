import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import { darkTheme } from "./utils/Themes";
import Profile from "./components/section/Profile";
import Skills from "./components/section/Skills";
import Experience from "./components/section/Experience";
import Education from "./components/section/Education";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import Footer from "./components/section/Footer";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  width: 100%;
  overflow-x: hidden;
  position: relative;
  height: 90vh;
  margin-top: 80px;
`;
const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <NavBar />
        <Body>
          <Profile />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects />
          <Wrapper>
            <Education />
            {/* <Contact /> */}
          </Wrapper>
          <Footer />
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
