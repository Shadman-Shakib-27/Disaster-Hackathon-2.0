import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

type TCounerTypes = {
  start: number;
  end: number;
};

const CounterScroller = ({ start, end }: TCounerTypes) => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="text-center text-5xl my-12">
      {/* @ts-ignore */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        {counterOn ? (
          <CountUp start={start} end={end} duration={1}></CountUp>
        ) : (
          0
        )}
      </ScrollTrigger>
    </div>
  );
};

export default CounterScroller;
