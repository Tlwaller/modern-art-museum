import logo from "assets/logo-light.svg";
import fb from "assets/icon-facebook.svg";
import ig from "assets/icon-instagram.svg";
import tw from "assets/icon-twitter.svg";

const Footer = () => {
  return (
    <footer
      className={
        "w-full flex flex-col gap-9 bg-almost-black py-12 px-8" +
        " md:flex-row md:justify-between md:px-40"
      }
    >
      <img
        src={logo}
        alt="Moder Art Gallery logo"
        width="110.05"
        className="md:w-40 md:h-14"
      />
      <small className="text-white text-base md:w-5/12 md:text-lg">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </small>
      <div className="socials-icons flex justify-between w-28 h-5">
        <a
          href="https://www.linkedin.com/in/trey-waller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="Facebook icon" width="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/trey-waller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={ig} alt="Instagram icon" width="20" />
        </a>
        <a
          href="https://www.linkedin.com/in/trey-waller/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={tw} alt="Twitter icon" width="20" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
