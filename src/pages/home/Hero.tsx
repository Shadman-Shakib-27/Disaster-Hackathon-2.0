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
    <motion.div className="setBgImage bg-dark-gray h-screen flex justify-center items-center mb-8">
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
                className="text-xl mt-32 xxsm:mt-16 md:mt-0 lg:mt-0 xl:mt-0 md:text-3xl lg:text-4xl font-extrabold leading-tight text-center md:text-left"
              >
                Welcome to EnviroMonitor. <br />
                Your Premier Platform for Environmental Disaster Prediction and
                Historical <br /> Data Analysis
              </motion.h1>
              <motion.p
                variants={introChildren}
                className="text-xl sm:text-xl md:text-black lg:text-lg text-justify max-w-[45ch] mx-auto md:mx-0"
              >
                Stay ahead of nature's unpredictable events with EnviroMonitor.
                Our state-of-the-art platform offers: Real-Time Disaster Alerts:
                Be informed instantly about potential environmental threats.
                Predictive Analytics: Harness advanced machine learning to
                forecast natural disasters. Comprehensive Historical Data:
                Access detailed records and visualizations of past environmental
                events. Interactive Maps: Explore data with our intuitive
                GIS-based mapping tools.
              </motion.p>
              <motion.div
                variants={introChildren}
                className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center md:justify-start"
              >
                <Button className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-sm sm:text-base md:text-lg shadow-xl">
                  Features
                </Button>
                <Button
                  variant="outline"
                  className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 font-semibold text-sm sm:text-base md:text-lg shadow-xl"
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
