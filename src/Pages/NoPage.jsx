import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-2xl font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base capitalize leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex lg:items-center lg:justify-center flex-col gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 lg:px-3.5 lg:py-2.5 p-2 mb-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          <Link to="/about" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NoPage;
