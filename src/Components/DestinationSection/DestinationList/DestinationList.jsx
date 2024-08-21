import DestinationCard from "../DestinationCard/DestinationCard";
// Images
import destination1 from "../../../Assets/images/destination-1.jpg";
import destination2 from "../../../Assets/images/destination-2.jpg";
import destination3 from "../../../Assets/images/destination-3.jpg";
import destination4 from "../../../Assets/images/destination-4.jpg";
import destination5 from "../../../Assets/images/destination-5.jpg";
import destination6 from "../../../Assets/images/destination-6.jpg";

const dests = [
  {
    id: 1,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Rome, Italy",
    price: 350,
    desImage: destination1,
    reviews: "11.1k Review",
    rate: 4.7,
  },
  {
    id: 2,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Islamabad, Pakistan",
    price: 340,
    desImage: destination2,
    reviews: "16.9k Review",
    rate: 4.6,
  },
  {
    id: 3,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Skyscraper in Dubai",
    price: 380,
    desImage: destination3,
    reviews: "120k Review",
    rate: 4.7,
  },
  {
    id: 4,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Island in the Maldives",
    price: 350,
    desImage: destination4,
    reviews: "700 Review",
    rate: 4.9,
  },
  {
    id: 5,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Island in the Gulf of Thailand",
    price: 350,
    desImage: destination5,
    reviews: "985 Review",
    rate: 4.7,
  },
  {
    id: 6,
    desTitle: "Enjoy the Beauty of the del Pincio",
    location: "Mosque in Istanbul, Türkiye",
    price: 370,
    desImage: destination6,
    reviews: "29.6k Review",
    rate: 4.7,
  },
];

const DestinationList = () => {
  return (
    <div className="DestinationList grid lg:grid-cols-3 lg:gap-10 gap-y-10 my-16">
      {dests.map((dest) => (
        <DestinationCard dest={dest} key={dest.id} />
      ))}
    </div>
  );
};

export default DestinationList;
