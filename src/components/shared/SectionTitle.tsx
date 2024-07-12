import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

//@ts-ignore
const SectionTitle = ({ fTitle, lTitle, description }) => {
  const { style, componentRef } = useScrollGrow();
  return (
    <motion.div
      initial={{ x: 200, scale: 0.5 }}
      animate={{ x: 0, scale: 1 }}
      transition={{
        type: "spring",
        duration: 2,
      }}
      style={style}
      ref={componentRef}
      className="w-[60%] pb-12 mx-auto flex flex-col justify-center items-center text-center gap-4"
    >
      <h1 className="font-bold text-xl lg:text-4xl text-secondary ">
        <span className="text-primary">{fTitle}</span> {lTitle}
      </h1>
      <p className="text-[18px]">{description}</p>
    </motion.div>
  );
};

export default SectionTitle;
