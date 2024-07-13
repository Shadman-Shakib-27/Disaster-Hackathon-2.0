import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import objDetection from "../../../assets/Images/ObjDetection.png";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const SuppliesPost = () => {
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
            Discover EnviroMonitor: Empowering disaster readiness with
            cutting-edge AI technology. Experience real-time weather insights,
            live drone footage for crisis response, and predictive analytics
            using advanced machine learning. Stay informed, stay prepared.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            className="border border-green-500 rounded-md"
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

export default SuppliesPost;
