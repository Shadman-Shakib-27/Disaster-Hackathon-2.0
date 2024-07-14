import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import objDetection from "../../../assets/Images/ObjDetection.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PeopleDetection = () => {
  return (
    <Container className="my-12 mt-24">
      <SectionTitle
        fTitle="Realtime"
        lTitle="Flood Affected People Detection"
        description=""
      />
      <motion.div
        initial={{ x: 200, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center -mt-6 items-start p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg mb-2">
          Real-time flood-affected people detection leverages machine learning (ML) techniques to identify and monitor individuals impacted by flood events. This advanced approach integrates various data sources and ML models to provide timely and accurate information, which is crucial for effective disaster response and management.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="border border-[#4CAE4F] hover:scale-105 hover:transition-all duration-500 rounded-md"
            src={objDetection}
            alt=""
          />
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
        <a href="/realtime-flood-affected-detection">
          <Button className="w-full text-white transition-all duration-300 md:w-auto px-8 md:px-12 py-4 md:py-6 font-bold bg-[#4CAE4F] text-lg shadow-xl">
            See More
          </Button>
        </a>
      </motion.div>
    </Container>
  );
};

export default PeopleDetection;
