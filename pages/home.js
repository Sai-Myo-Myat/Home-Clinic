import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-[#FFBBBB] h-full flex-col justify-evenly flex items-center md:font-bold py-6">
      <div>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="sm:text-4xl font-bold mb-20"
        >
          How Can We Help You?
        </motion.h1>
        <motion.p
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className=" text-xl px-10"
        >
          Home-Clinic is helping a lot of patient. This is Our Booking service
          app for you.
        </motion.p>
      </div>
      <Link href="/booking/appointment" passHref>
        <motion.button
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0.5 }}
          className="bg-[#FFBBBB] text-[#BFFFF0] sm:text-xl sm:p-3 rounded p-1 active:p-2"
        >
          Booking Section
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
