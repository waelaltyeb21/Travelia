import { useEffect, useState } from "react";
import title from "../../Assets/images/title-icon.svg";

const CTA = () => {
  return (
    <section className={`CTA grid items-center justify-center text-center ${document.body.classList.contains("dark") ? "" : "bg-exp-bg"} lg:p-20 py-20 w-full`}>
      <h1 className="lg:text-6xl text-2xl lg:leading-normal dark:text-bg-dark">
        Prepare Yourself & Let’s Explore The Beauty Of The World
      <img className="inline-block lg:w-12 w-5" src={title} alt="icon" />!
      </h1>
      <span className="text-granite-gray my-10">We have many special offers especially for you.</span>
      <button className="btn">Get Started</button>
    </section>
  );
};

export default CTA;
