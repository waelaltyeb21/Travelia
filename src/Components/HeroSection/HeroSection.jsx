import heroBanner from "../../Assets/images/hero-banner.png";
import titleIcon from "../../Assets/images/title-icon.svg";
import hero_button_img from "../../Assets/images/hero-button-img.jpg";
const HeroSection = () => {
  // lg:relative lg:top-20
  return (
    <section className="HeroSection grid lg:md:grid-cols-2 bg-hero-bg bg-cover lg:px-10 px-5 lg:py-0 py-5" id="home">
      <div className="text mt-12 lg:mb-0 mb-7">
        <span className="bg-red-salsa-alpha-5 text-light-coral w-max p-1 rounded-xl capitalize flex">
          Explore the World
          <img src={titleIcon} alt="world icon" />
        </span>
        <h3 className="lg:text-7xl text-3xl lg:my-8 my-3">
          It’s a Big World Out There, Go Explore
        </h3>
        <p className="text-granite-gray lg:text-xl text-sm mb-5">
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className="btns flex lg:items-center items-start lg:flex-row flex-col">
          <button className="lg:mr-5 lg:mb-0 mb-3 flex items-center bg-english-vermillion text-text-white px-4 py-2 rounded-3xl">
            Plan a Trip
            <ion-icon name="chevron-forward" aria-hidden="true"></ion-icon>
          </button>
          <button className="flex items-center relative">
            <div className="icon w-14 rounded-full overflow-hidden">
              <img src={hero_button_img} alt="our story" />
            </div>
            <span className="p-2 bg-bg-white flex rounded-full relative right-5">
              <ion-icon name="play" aria-hidden="true"></ion-icon>
            </span>
            <span className="text-sm decoration-wavy decoration-english-vermillion underline">
              Watch our Story
            </span>
          </button>
        </div>
      </div>
      <div className="image">
        <img src={heroBanner} alt="hero_banner" />
      </div>
    </section>
  );
};

export default HeroSection;
