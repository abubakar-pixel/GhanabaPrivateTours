import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import GuideProfile from "../components/guideSection/GuideProfile";
import styled from "styled-components";

export const GuideSection = styled.div`
  width: 100%;
  align-items: center;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
`;

const TourGuides = (props) => {
  return (
    <>
      <Navigation />
      <Header />
      <GuideSection>
        <GuideProfile
          profilepic="/guide1.jpg"
          name="Abubakar Kazeem"
          age="35"
          language="Fante, English, Hausa, Twi"
          sex="male"
        />
        <GuideProfile
          profilepic="/guide2.jpg"
          name="Terry Drake"
          age="33"
          language="Fante, English, Arabic, French"
        />
        <GuideProfile
          profilepic="/guide3.jpg"
          name="Kompany Kojo"
          age="35"
          language="Fante, English, Turkish, Spanish"
        />
        <GuideProfile
          profilepic="/guide4.jpg"
          name="Kante Kwabena"
          age="35"
          language="Fante, English, Turkish, Spanish"
        />
      </GuideSection>

      <Footer />
    </>
  );
};

export default TourGuides;
