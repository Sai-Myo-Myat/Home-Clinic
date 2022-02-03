import Link from "next/link";

const Home = () => {
  return (
    <div className="text-stone-100 h-full flex-col flex items-center py-6">
      <div>
        <h1 className="text-4xl font-bold">How Can We Help You?</h1>
        <p className="mt-10 text-xl px-10">
          Home-Clinic is helping a lot of patient. This is Our Booking service
          app for you.
        </p>
      </div>
      <Link href="/booking" passHref>
        <button className="bg-blue-500 p-3 rounded mt-20 active:p-2">
          Booking Section
        </button>
      </Link>
    </div>
  );
};

export default Home;
