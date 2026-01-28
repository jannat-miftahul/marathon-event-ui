import { Helmet } from "react-helmet-async";
import Slider from "../../components/Slider";
import UpcommingMarathons from "./UpcommingMarathons";
import MarathonTips from "./MarathonTips";
import About from "./About";
import Testimonials from "./Testimonials";
import MarathonLocationsMap from "./MarathonLocationsMap";
import Newsletter from "./Newsletter";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | RunTrack</title>
            </Helmet>

            <Slider />
            <About />
            <UpcommingMarathons />
            <MarathonTips />
            <MarathonLocationsMap />
            <Testimonials />
            <Newsletter />
        </div>
    );
};

export default Home;
