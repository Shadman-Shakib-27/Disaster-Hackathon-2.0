import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import image from "../../assets/Images/HeroBanner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const intro = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  const introChildren = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div className="setBgImage bg-dark-gray min-h-screen flex justify-center items-center mb-10  lg:mb-0 md:mb-0">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-20 items-center">
          <motion.div
            variants={intro}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              staggerChildren: 0.8,
            }}
            className="flex justify-center items-center"
          >
            <motion.div
              variants={introChildren}
              className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4 md:mt-0"
            >
              <motion.h1
                variants={introChildren}
                className="text-lg xxsm:text-xl md:text-3xl lg:text-4xl lg:font-extrabold font-bold leading-tight text-center md:text-left mt-16 sm:mt-0 md:mt-0"
              >
                Welcome to EnviroMonitor.
                <br />
                Your Premier Platform for Environmental Disaster Prediction and
                Historical <br /> Data Analysis
              </motion.h1>
              <motion.p
                variants={introChildren}
                className="text-sm xxsm:text-base sm:text-lg md:text-black lg:text-lg max-w-[55ch] mx-auto md:mx-0"
              >
                Discover EnviroMonitor: Empowering disaster readiness with
                cutting-edge AI technology. Experience real-time weather
                insights, live drone footage for crisis response, and predictive
                analytics using advanced machine learning. Stay informed, stay
                prepared.
              </motion.p>
              <motion.div
                variants={introChildren}
                className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start"
              >
                <Button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-base md:text-lg shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-xs sm:text-base md:text-lg shadow-xl"
                >
                  Benefits
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 200, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{
              type: "spring",
              duration: 2,
            }}
            className="relative flex justify-center"
          >
            <img
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl rounded-md"
              src={image}
              alt="Hero Banner"
            />
          </motion.div>
        </div>
      </Container>
    </motion.div>
  );
};

export default Hero;
