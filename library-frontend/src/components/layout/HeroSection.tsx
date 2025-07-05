import { Link } from "react-router";
import bannerImage from "../../assets/LIBRARY18.jpg";
export const HeroSection = () => {
  return (
    <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl   ">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-100 uppercase rounded-full bg-teal-accent-400 dark:bg-teal-700">
                New Books
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
              Simplify Your Library,
              <br className="hidden md:block" />
              One Book{" "}
              <span className="inline-block text-deep-purple-accent-400 dark:text-deep-purple-300">
                One Book at a Time
              </span>
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-400 md:text-lg">
              Manage your entire book collection with our simple and intuitive
              book management system. Whether you are a personal collector or a
              library manager, all information will be at your fingertips for
              quick and easy handling.
            </p>
          </div>
          <Link
            to="/borrow-summary"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 dark:text-deep-purple-300 hover:text-deep-purple-800 dark:hover:text-deep-purple-500"
          >
            See borrows
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="">
          <img
            src={bannerImage}
            alt="book"
            className=" w-full  text-black dark:text-white rounded-md"
          />
        </div>
      </div>
    </div>
  );
};
