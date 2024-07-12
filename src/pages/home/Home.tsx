import Hero from "@/pages/home/Hero";
import SuppliesPost from "./posts/SuppliesPost";
import RealtimeData from "./RealtimeData";

const Home = () => {
  return (
    <div>
      <Hero />
      <RealtimeData />
      <SuppliesPost />
    </div>
  );
};

export default Home;
