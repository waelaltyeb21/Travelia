import gallery1 from "../../Assets/images/gallery-1.jpg";
import gallery2 from "../../Assets/images/gallery-2.jpg";
import gallery3 from "../../Assets/images/gallery-3.jpg";
import gallery4 from "../../Assets/images/gallery-4.jpg";
import gallery5 from "../../Assets/images/gallery-5.jpg";
import gallery6 from "../../Assets/images/gallery-6.jpg";

const Gallery = () => {
  return (
    <section className="Gallery" id="gallery">
      <div className="sectionHeader">
        <span>Photo Gallery</span>
        <h1>Photo’s From Travelers</h1>
      </div>
      <div className="galleryContainer grid lg:grid-cols-3 gap-2 mt-10">
        <div className="gallery1 grid lg:grid-cols-2 gap-2">
          <div className="galleryBox rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={gallery1} alt="gallery" />
          </div>
          <div className="galleryBox rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={gallery2} alt="gallery" />
          </div>
          <div className="galleryBox rounded-3xl overflow-hidden lg:col-span-2">
            <img className="object-cover w-full h-full" src={gallery5} alt="gallery" />
          </div>
        </div>
        <div className="gallery2 rounded-3xl overflow-hidden">
          <img className="object-cover w-full h-full" src={gallery3} alt="gallery" />
        </div>
        <div className="gallery5 lg:grid-rows-2 grid gap-2">
          <div className="galleryBox rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={gallery4} alt="gallery" />
          </div>
          <div className="galleryBox rounded-3xl overflow-hidden">
            <img className="object-cover w-full h-full" src={gallery6} alt="gallery" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
