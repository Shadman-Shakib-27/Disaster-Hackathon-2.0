import Container from "@/components/shared/Container";
import SectionTitle from "@/components/shared/SectionTitle";
import sampleVideo from "../../assets/videos/Jamalpur Flood Detected.webm";
import { motion } from "framer-motion";

const RealtimeFloodAffectDetection = () => {
  return (
    <Container className="my-12">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start p-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-base md:text-lg mb-2">
            At Disaster Relief Donation Platform, we are dedicated to providing
            immediate relief and long-term support to communities affected by
            natural disasters worldwide.
          </p>
          <p className="text-base md:text-lg">
            We aim to support disaster-affected areas by providing necessary
            supplies, funds, and resources. Join us in our mission to help those
            in need.
          </p>
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
