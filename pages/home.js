import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="text-stone-100 text-[#FFBBBB] h-full flex-col flex items-center py-6">
      <div>
        <motion.h1
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold"
        >
          How Can We Help You?
        </motion.h1>
        <motion.p
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-xl px-10"
        >
          Home-Clinic is helping a lot of patient. This is Our Booking service
          app for you.
        </motion.p>
      </div>
      <Link href="/booking/appointment" passHref>
        <motion.button
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0.5 }}
          className="bg-[#FFBBBB] text-[#BFFFF0] p-3 rounded mt-20 active:p-2"
        >
          Booking Section
        </motion.button>
      </Link>
    </div>
  );
};

export default Home;
