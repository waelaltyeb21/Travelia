import service_icon1 from "../../Assets/images/service-icon-1.svg";
import service_icon2 from "../../Assets/images/service-icon-2.svg";
import service_icon3 from "../../Assets/images/service-icon-3.svg";
const ServicesSection = () => {
  return (
    <section className="grid lg:grid-cols-4 gap-2" id="services">
      <div className="servBox px-5 py-10 rounded-sm">
        <span className="uppercase text-majorelle-blue">What We Serve</span>
        <h3 className="text-3xl my-3">Top Values For You</h3>
        <p className="font-light text-granite-gray">
          Try a variety of benefits when using our services.
        </p>
      </div>
      <div className="servBox flex flex-col px-5 py-10 bg-chrome-yellow-alpha-5 rounded-sm cursor-pointer lg:hover:-translate-y-10 transition-all duration-300 ease-in-out">
        <img className="w-12" src={service_icon1} alt="icon" />
        <h4 className="text-3xl font-bold my-3">Lot Of Choices</h4>
        <p className="font-light text-granite-gray">
          Total 460+ destinations that we work with.
        </p>
      </div>
      <div className="servBox flex flex-col px-5 py-10 bg-red-salsa-alpha-5 rounded-sm cursor-pointer lg:hover:-translate-y-10 transition-all duration-300 ease-in-out lg:translate-y-5">
        <img className="w-12" src={service_icon2} alt="icon" />
        <h4 className="text-3xl font-bold my-3">Best Tour Guide</h4>
        <p className="font-light text-granite-gray">
          Our tour guide with 15+ years of experience.
        </p>
      </div>
      <div className="servBox flex flex-col px-5 py-10 bg-majorelle-blue-alpha-5 rounded-sm cursor-pointer lg:hover:-translate-y-10 transition-all duration-300 ease-in-out">
        <img className="w-12" src={service_icon3} alt="icon" />
        <h4 className="text-3xl font-bold my-3">Easy Booking</h4>
        <p className="font-light text-granite-gray">
          With an easy and fast ticket purchase process.
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
