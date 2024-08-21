import logo from "../../Assets/images/logo.svg";
const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footer grid lg:grid-cols-12 lg:gap-2 gap-5 lg:my-16">
        <div className="footBox lg:col-span-3">
          <div className="imgContainer mb-5">
            <img src={logo} alt="logo" />
          </div>
          <span className="text-granite-gray block mb-8">
            We always make our customer happy by providing as many choices as
            possible
          </span>
          <div className="media *:mr-5 text-majorelle-blue">
            <a href="https://www.instagram.com/wael_altyeb1/" target="_blank">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            <a href="https://www.facebook.com/profile.php?id=10003607752514" target="_blank">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            <a href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
        </div>
        <div className="footBox lg:col-span-2">
          <h1 className="mb-3 text-xl">About</h1>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            About Us
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Features
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            News
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Menu
          </a>
        </div>
        <div className="footBox lg:col-span-2">
          <h1 className="mb-3 text-xl">Company</h1>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Why Company
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Partner With Us
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            FAQ
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Blog
          </a>
        </div>
        <div className="footBox lg:col-span-2">
          <h1 className="mb-3 text-xl">Support</h1>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Account
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Support Center
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Contact Us
          </a>
          <a
            className="block mb-3 text-granite-gray hover:text-majorelle-blue hover:px-3 customTransition3"
            href="#"
          >
            Accessibility
          </a>
        </div>
        <div className="footBox lg:col-span-3">
          <h1 className="mb-3  text-xl text-majorelle-blue">Get in Touch</h1>
          <span className="block text-granite-gray">
            Question or feedback? We’d love to hear from you.
          </span>
          <div className="msg flex items-center justify-between my-5 outline-2 outline-none outline-gainsboro rounded-full p-2">
            <input
              className="focus:outline-none focus:placeholder:text-majorelle-blue bg-transparent"
              type="text"
              placeholder="Email Address"
            />
            <span className="cursor-pointer">
              <ion-icon
                name="paper-plane-outline"
                aria-hidden="true"
              ></ion-icon>
            </span>
          </div>
        </div>
      </div>
      {/* CopyRights */}
      <div className="copyRights flex flex-wrap justify-between items-center text-center p-5 capitalize border-t-2 border-black-alpha-20">
        <div className="devDes mb-5">
          <div>
            copyright 2024 made by
            <a
              className="text-majorelle-blue capitalize"
              href="https://www.instagram.com/wael_altyeb1/"
              target="_blank"
            >
              {"  "}
              wael altyeb
            </a>
          </div>
        </div>

        <div className="privacyTerms flex flex-wrap justify-center items-center">
          <a href="#" className="block mr-3">
            terms and condition
          </a>
          <a href="#" className="block">
            privacy and policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
