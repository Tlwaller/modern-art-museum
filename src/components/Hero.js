import Button from "components/UI/Button";
import museum1 from "assets/Museum1.jpg";

const Hero = () => {
  return (
    <section className="hero relative h-screen w-screen">
      <div className="hero-bg-container h-full w-full flex top-0 left-0 -z-10">
        <div className="h-full relative bg-almost-black w-1/3"></div>
        <div className="w-0 z-10 mix-blend-difference relative mt-48">
          <h1 className="-ml-72 w-96 text-white whitespace-nowrap">
            MODERN
            <br />
            ART GALLERY
          </h1>
        </div>
        <div
          alt="Two people observing an art piece."
          className="h-full w-1/3 relative bg-cover bg-center"
          style={{ backgroundImage: `url(${museum1})` }}
        />
        <div className="w-0 z-10 relative mt-48 -ml-16">
          <p className="text-dark-grey mb-16" style={{ width: "22rem" }}>
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button text="OUR LOCATION" className="z-40 absolute" />
        </div>
        <div className="w-1/3 h-full bg-white" />
      </div>
    </section>
  );
};

export default Hero;
