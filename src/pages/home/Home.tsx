import Hero from "@/pages/home/Hero";
import SuppliesPost from "./posts/SuppliesPost";
// import Tabs from "../../pages/home/Tabs";
import Charts from "../../pages/home/posts/Charts";
import RealtimeData from "./RealtimeData";

const Home = () => {
  return (
    <div>
      <Hero />
      <RealtimeData />
      <Charts />
      <SuppliesPost />
    </div>
  );
};

export default Home;
