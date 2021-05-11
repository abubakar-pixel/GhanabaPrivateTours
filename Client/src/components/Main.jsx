import Stories from "./SectionStories";
import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";
import Buttons from "./mainSection/Buttons";
import DisplaySec from "./mainSection/DisplaySec";
 import Toursite from "./mainSection/Toursite"

export const HomeDisplay = styled.div`
  padding: 7rem 0;
`;

export const DisplayHead = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.5rem;
  font-weight: 700;
  font-size: 5rem;
`;

export const ServiceBox = styled.div`
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
`;

export const ServiceBrowse = styled.div`
  max-height: 60vw;
  width: 15vw;
  /* margin-right: 5rem; */
  align-items: center;
  /* display: flex;*/
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  /* border: 1px solid; */
`;

export const ServiceDisplay = styled.div`
  max-height: 100vh;
  width: 80vw;
  border: 1px solid;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  border-color: rgb(126, 213, 111);
`;

const Main = () => {
  return (
    <main>
      <Navigation />
      <Header />
      <HomeDisplay>
        <ServiceBox>
          <div >
            <DisplayHead>Best Tour Guides</DisplayHead>

            <ServiceDisplay>
              <DisplaySec
                guidepic="/guide11.jpg"
                guidename="Rafic Daniel"
                guidesex="male"
                guideage="30"
                guidelanguage="fante, english, Arabic, French"
              />
              <DisplaySec
                guidepic="/guide6.jpg"
                guidename="Rafic Daniel"
                guidesex="male"
                guideage="30"
                guidelanguage="fante, english, Arabic, French"
              />
              <DisplaySec
                guidepic="/guide2.jpg"
                guidename="Rafic Daniel"
                guidesex="male"
                guideage="30"
                guidelanguage="fante, english, Arabic, French"
              />
              <DisplaySec
                guidepic="/guide5.jpg"
                guidename="Rafic Daniel"
                guidesex="male"
                guideage="30"
                guidelanguage="fante, english, Arabic, French"
              />
            
              <Buttons btn="Explore" btncolor="to right, #7ed56f, #28b485" />
            </ServiceDisplay>
          </div>

          <div>
            <DisplayHead>most visited tour sites</DisplayHead>
            <ServiceDisplay>
              <Toursite
                sitebg="/capecastlelong.jpg"
                price="$200"
                sitea="Cape Coast Castle"
              />
              <Toursite
                sitebg="/ELMINACASTLE.jpg"
                price="$200"
                sitea="Elmina Castle"
              />
              <Toursite
                sitebg="/kwamenkruma.png"
                price="$200"
                sitea="Kwame Nkrumah moselem"
              />
              <Toursite
                sitebg="/Kakum.jpg"
                price="$200"
                sitea="Kakum park"
              />
              <Buttons btn="Explore" btncolor="to right, #7ed56f, #28b485" />
            </ServiceDisplay>
          </div>
        </ServiceBox>
      </HomeDisplay>

      <Stories />
      <Footer />
    </main>
  );
};

export default Main;
