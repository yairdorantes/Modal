import { motion } from "framer-motion";
import { useRef } from "react";

const DragButton = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const handleDrag = (event, info) => {
    const { x } = info.point; // Get the x position of the motion div
    console.log(info);
    // const parentWidth = event.currentTarget.parentNode.offsetWidth; // Get the width of the parent div

    // // Check if the motion div has reached the left or right border of its parent div
    // if (x <= 0) {
    //   console.log("Reached left border");
    // } else if (x >= parentWidth) {
    //   console.log("Reached right border");
    // }
  };
  const print = () => {
    console.log(parentRef.current?.offsetWidth);
  };

  return (
    <div ref={parentRef} className="w-16 mx-auto bg-black">
      <button onClick={print}>click</button>
      <motion.div
        className="bg-red-400 w-1/2"
        onDrag={handleDrag}
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // exit={{ scale: 0.8, opacity: 0 }}
        drag="x"
        dragElastic={{ left: 0, right: 0.3 }}
        dragSnapToOrigin={true}
        // transition={{ duration: 0.3 }} // Adjust the duration as needed
      >
        DragButton
      </motion.div>
    </div>
  );
};

export default DragButton;
