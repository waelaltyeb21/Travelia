import DestinationList from "../DestinationList/DestinationList";
const Destination = () => {
  return (
    <section id="destination">
      <div className="sectionHeader">
        <span>top destination</span>
        <h1>Explore top destination</h1>
      </div>
      <DestinationList />
      <button className="btn">View All Destination</button>
    </section>
  );
};

export default Destination;
