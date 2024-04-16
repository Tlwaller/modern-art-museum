import museum1 from "assets/desktop/image-hero@2x.jpg";
import Button from "./UI/Button";

const Hero = () => {
  return (
    <section className="w-screen flex relative max-md:flex-row-reverse md:h-screen">
      <div
        className={
          "hero-content-wrapper flex justify-between w-full left-0 right-0 gap-8" +
          " md:px-8 max-md:flex-col md:absolute md:max-w-6xl md:mx-auto md:mt-52"
        }
      >
        <div
          className="h-60 w-full bg-cover bg-center md:hidden"
          style={{ backgroundImage: `url(${museum1})` }}
        />
        <h1 className="mix-blend-difference whitespace-nowrap px-4 max-md:text-6xl md:text-white">
          MODERN
          <br />
          ART GALLERY
        </h1>
        <div className="hero-content w-screen max-md:px-4 md:w-22">
          <p className="mb-8 md:mb-16">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button text="OUR LOCATION" />
        </div>
      </div>
      <div className="w-1/3 h-full bg-almost-black max-md:hidden" />
      <div
        className={
          "bg-cover w-full h-1/3 bg-center" +
          " md:w-1/3 md:h-full max-md:hidden"
        }
        style={{ backgroundImage: `url(${museum1})` }}
      />
      <div className="w-1/3 h-full bg-white max-md:hidden" />
    </section>
  );
};

export default Hero;
