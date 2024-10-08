import PropTypes from "prop-types";
import Chip from "@/assets/chip.svg";

export function CardThree({ name, cvv, number, valid, expired }) {
  return (
    <div className="w-[330px] h-[190px] m-auto rounded-xl relative text-white shadow-2xl lg:w-[390px] lg:h-[210px]">
      <div className="relative object-cover w-full h-full rounded-xl bg-gradient-to-tr from-orange-400 from-15% via-amber-500 via-30% to-yellow-500 to-60%"></div>

      <div className="w-full px-5 absolute top-5 left-0">
        <img className="absolute top-6 w-auto h-7 lg:h-9 lg:top-7" alt="Card chip" src={Chip} />
        <div className="flex items-center">
          <img
            className="block w-auto ml-auto h-6 lg:h-7"
            alt="card logo"
            src="https://img.logoipsum.com/265.svg"
          />
        </div>
        <div className="w-full pt-9 pb-5 text-start">
          <p className="text-2xl font-medium tracking-wider lg:text-3xl lg:tracking-wider">{number || "#### #### #### ####"}</p>
          <div className="absolute left-6 mt-1">
            <p className="font-medium tracking-wider text-xs">
              {cvv || "####"}
            </p>
          </div>
        </div>
        <div className="pt-7">
          <div>
            <div className="w-full">
              <p className="text-sm font-medium tracking-widest">{name || "--- ---"}</p>
            </div>
          </div>
          <div className="absolute top-28 left-32 inline-flex items-center space-x-2 lg:left-36">
            <div>
              <p className="text-xs font-medium tracking-wide lg:text-sm">{valid || "MM / YY"}</p>
            </div>
            <span className="text-xs">-</span>
            <div>
              <p className="text-xs font-medium tracking-wide lg:text-sm">{expired || "MM / YY"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardThree.propTypes = {
  name: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  expired: PropTypes.string.isRequired,
}
