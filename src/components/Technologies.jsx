import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel, FaNodeJs } from "react-icons/fa";
import { SiLivewire, SiTypescript } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-4xl text-center"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-col items-center justify-center gap-6 lg:flex-row"
      >
        {/* Laravel */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="p-4 text-center border-4 rounded-2xl border-neutral-800"
        >
          <FaLaravel className="mx-auto text-red-500 text-7xl" />
          <p className="mt-2 text-sm text-neutral-400">Laravel</p>
        </motion.div>

        {/* React */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="p-4 text-center border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="mx-auto text-7xl text-cyan-400" />
          <p className="mt-2 text-sm text-neutral-400">React</p>
        </motion.div>

        {/* Livewire */}
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="p-4 text-center border-4 rounded-2xl border-neutral-800"
        >
          <SiLivewire className="mx-auto text-pink-500 text-7xl" />
          <p className="mt-2 text-sm text-neutral-400">Livewire</p>
        </motion.div>

        {/* Node.js */}
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="p-4 text-center border-4 rounded-2xl border-neutral-800"
        >
          <FaNodeJs className="mx-auto text-green-500 text-7xl" />
          <p className="mt-2 text-sm text-neutral-400">Node.js</p>
        </motion.div>

        {/* TypeScript */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="p-4 text-center border-4 rounded-2xl border-neutral-800"
        >
          <SiTypescript className="mx-auto text-7xl text-cyan-700" />
          <p className="mt-2 text-sm text-neutral-400">TypeScript</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;