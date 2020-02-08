import React from "react";
import albumStyle from "../components/album.module.css";

const SupportUs = () => (
  <>
    <div className="max-w-lg md:max-w-xl m-auto lgx:max-w-2xl">
      <div className="pt-8 font-medium text-xl text-gray-900 md:font-semibol md:text-3xl md:pt-16">
        Support Us
      </div>
      <div className="font-medium text-gray-700 leading-relaxed pl-8 pr-8 mt-6 md:mt-12 md:text-xl">
        Support this podcast on Patreon and get exclusive, premium content and
        bonuses for as little as the price of a cup off coffee a month!
      </div>
      <div className="font-medium text-gray-700 leading-relaxed pl-8 pr-8 mt-6 md:text-xl">
        This includes ad-free early released episodes, unreleased recordings,
        videos, and other perks
      </div>
      <div className="flex justify-center md:mt-10">
        <a
          href="https://www.patreon.com/"
          data-patreon-widget-type="become-patron-button"
        >
          <img
            src="https://c5.patreon.com/external/logo/become_a_patron_button.png"
            alt="pateron button"
            className={`mt-6 ${albumStyle.podcastBox}`}
          />
        </a>
      </div>
    </div>
  </>
);

export default SupportUs;
