import "./index.css";

import Searchbar from "./components/Searchbar/Searchbar";
import Header from "./components/Header/Header";
import Youtube from "./components/Youtube/Youtube";
import About from "./components/About/About";
import HotJobsHome from "./components/HotJobs/HotJobsHome";
import Content from "./components/Content/Content";
import Testimonials from "./components/Testimonials/Testimonials";
export default function Home() {
 
  return (
    <div className="home">
      <Searchbar/>
      <Header/>
     <Youtube/>
     <About/>
     <HotJobsHome/>
     <Content/>
     <Testimonials/>
     
    </div>
  );
}
