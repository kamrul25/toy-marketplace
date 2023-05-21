
import Gallery from "../Gallery/Gallery";
import Slider from "../Slider/Slider";
import SubCategoryTabs from "../SubCategoryTabs/SubCategoryTabs";
import Section from "../Section/Section";
import Banner from "../Banner/Banner";


const Home = () => {

    return (
        <div className="space-y-16 mt-10 " >
            <Banner></Banner>
            <Slider ></Slider>
            <Gallery ></Gallery>
            <Section></Section>
            <SubCategoryTabs></SubCategoryTabs>
            <Section></Section>
        </div>
    );
};

export default Home;