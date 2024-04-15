import museum2 from "assets/desktop/image-grid-1@2x.jpg";
import museum3 from "assets/desktop/image-grid-2@2x.jpg";
import museum4 from "assets/desktop/image-grid-3@2x.jpg";

const Main = () => {
  return (
    <main className="px-4 flex flex-col gap-6 md:max-w-6xl mx-auto">
      <section className="flex flex-col-reverse gap-6 md:flex-row md:justify-between">
        <div className="section-content h-full md:w-4/12 md:pr-11 md:my-auto">
          <h3 className="pb-5">YOUR DAY AT THE GALLERY</h3>
          <p className="max-md:text-lg">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>
        </div>
        <div
          style={{ backgroundImage: `url(${museum2})` }}
          className="section-image h-80 bg-cover bg-left md:w-7/12"
        />
      </section>
      <section className="flex flex-col gap-4  h-63 md:flex-row md:h-45">
        <img
          src={museum3}
          className="section-image md:w-7/12"
          alt="Modern art in a museum"
        />
        <div className="section-content w-full flex flex-col gap-4">
          <img
            src={museum4}
            alt="People observing art in a museum"
            className="w-full max-md:h-52"
          />
          <div className="bg-almost-black py-12 px-6 h-2/3 md:py-16 md:px-12">
            <h3 className="text-white pb-6 max-md:text-5xl">
              COME & BE INSPIRED
            </h3>
            <p className="text-white max-md:text-lg">
              We're excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
