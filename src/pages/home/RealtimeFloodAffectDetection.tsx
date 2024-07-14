import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import sampleVideo from "../../assets/videos/Jamalpur Flood Detected.webm";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

const RealtimeFloodAffectDetection = () => {
  return (
    <Container className="my-12">
      <SectionTitle fTitle="Our" lTitle="Mission" description="" />
      <motion.div
        initial={{ x: 200, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{
          type: "spring",
          duration: 2,
        }}
        className="relative flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0"
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
          <h2 className="text-2xl md:text-[28px] font-bold mb-4">
            Realtime Flood Affected People Detection
          </h2>
          <p className="text-base md:text-lg mb-2">
            Real-time flood-affected people detection leverages machine learning
            (ML) techniques to identify and monitor individuals impacted by
            flood events. This advanced approach integrates various data sources
            and ML models to provide timely and accurate information, which is
            crucial for effective disaster response and management.
          </p>
          <h2 className="mx-auto mt-16 mb-4 font-semibold">
            This is Just Demo, Main Works{" "}
            <span className="text-primary font-bold">Loading...</span>
          </h2>
          <p className="mx-auto mb-4 font-semibold">
            Stay With Us To See Full Works...
          </p>
          <div className="flex justify-center items-center mx-auto">
            <ClipLoader color="#4CAE4F" size={80} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <video
            className="rounded-md p-2 border border-[#4CAE4F] shadow-md w-full md:w-11/12 lg:w-10/12"
            controls
            autoPlay
          >
            <source src={sampleVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
      ></motion.div>
    </Container>
  );
};

export default RealtimeFloodAffectDetection;
