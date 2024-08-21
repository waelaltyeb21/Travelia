import experienceBanner from "../../Assets/images/experience-banner.png";
import expShape from "../../Assets/images/exp-shape.svg";
const Experience = () => {
  return (
    <section className="Experience py-10 grid lg:grid-cols-2 items-center bg-exp-bg bg-cover" id="exp">
      <div className="imageContainer flex items-center justify-center h-full relative">
        <img className="w-3/4" src={experienceBanner} alt="experience banner" />
        <img
          className="absolute left-16 top-72 hidden"
          src={expShape}
          alt="24/7 Guide Support"
        />
      </div>
      <div className="textContainer lg:mt-0 mt-5">
        <span className="text-majorelle-blue">Our Experience</span>
        <h2 className="lg:text-5xl text-2xl lg:mt-5 mt-2">
          With Our Experience We Will Serve You
        </h2>
        <p className="lg:my-10 my-5 text-xs text-granite-gray ">
          Since we first opened we have always prioritized the convenience of
          our users by providing low prices and with a easy process.
        </p>
        <div className="experience lg:w-4/5 flex lg:flex-row justify-between flex-wrap">
          <div className="expBox flex flex-col items-center justify-center text-center mb-5">
            <span className="font-bold lg:text-3xl text-majorelle-blue">
              20
            </span>
            <span>
              Years <br /> Experience
            </span>
          </div>
          <div className="expBox flex flex-col items-center justify-center text-center mb-5">
            <span className="font-bold lg:text-3xl text-majorelle-blue">
              460+
            </span>
            <span>
              Destination <br /> Collaboration
            </span>
          </div>
          <div className="expBox lg:flex-grow-0 flex-grow flex flex-col items-center justify-center text-center mb-5">
            <span className="font-bold lg:text-3xl text-majorelle-blue">
              50K+
            </span>
            <span>
              Happy <br /> Customer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
