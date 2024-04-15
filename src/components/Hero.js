import Button from "components/UI/Button";
import museum1 from "assets/desktop/image-hero@2x.jpg";

const Hero = () => {
  return (
    <section className="hero relative h-screen w-screen">
      <div className="hero-bg-container h-full w-full flex flex-col top-0 left-0 -z-10 md:flex-row">
        <div
          className={
            "hero-black-div relative w-1/3 bg-almost-black" +
            " max-md:hidden md:h-full"
          }
        ></div>
        <div className="hero-h1-contain relative w-0 z-10 mix-blend-difference md:mt-48">
          <h1 className="w-96 text-white whitespace-nowrap -ml-72 max-md:hidden">
            MODERN
            <br />
            ART GALLERY
          </h1>
        </div>
        <div
          alt="Two people observing an art piece."
          className={
            "hero-img-div relative w-full h-60 bg-cover bg-center" +
            " md:w-1/3 md:h-full"
          }
          style={{ backgroundImage: `url(${museum1})` }}
        />
        <div
          className={
            "hero-content relative flex-col justify-between w-full px-4 z-10" +
            " max-md:flex max-md:gap-8 max-md:pt-8 md:mt-48 md:-ml-16 md:w-0 md:px-0"
          }
        >
          <h3 className=" text-almost-black whitespace-nowrap md:hidden">
            MODERN
            <br />
            ART GALLERY
          </h3>
          <p className="w-full text-dark-grey max-md:text-lg md:w-22 md:mb-16">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button text="OUR LOCATION" className="z-40 absolute" />
        </div>
        <div className="hero-white-div w-1/3 h-full bg-white max-md:hidden" />
      </div>
    </section>
  );
};

export default Hero;
