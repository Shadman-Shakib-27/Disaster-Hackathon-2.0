import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import { motion } from "framer-motion";
import imageSrc from "../../assets/Images/Data_Analysis.png";
import { Button } from "@/components/ui/button";

const RealtimeData = () => {
  return (
    <Container>
      <SectionTitle fTitle="Realtime" lTitle="Data Analysis" description="" />
      <motion.div
        initial={{ x: 200, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0"
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={imageSrc}
            alt="Sample"
            className="rounded-md border hover:scale-105 hover:transition-all duration-500 border-[#4CAE4F] shadow-md w-full md:w-11/12 lg:w-10/12"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
          <h2 className="text-2xl md:text-[28px] font-bold mb-4">
            Data Analysis Overview
          </h2>
          <p className="text-base md:text-lg mb-2">
            Our platform provides real-time data analysis to help communities
            recover faster and more efficiently. Stay updated with the latest
            statistics and trends.
          </p>
          <p className="text-base md:text-lg">
            By leveraging advanced data analytics, we can pinpoint the areas
            that need the most attention and allocate resources effectively.
            Join us in making a difference.
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 200, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="text-center mt-10"
      >
        <a href="/realtime">
          <Button className="w-full text-white transition-all duration-300 md:w-auto px-8 md:px-12 py-4 md:py-6 font-bold bg-[#4CAE4F] text-lg shadow-xl">
            See More
          </Button>
        </a>
      </motion.div>
    </Container>
  );
};

export default RealtimeData;
