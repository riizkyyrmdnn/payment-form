import PropTypes from "prop-types";
import Chip from "@/assets/chip.svg";

export function CardTwo({ name, cvv, number, valid, expired }) {
  return (
    <div className="w-[330px] h-[190px] m-auto rounded-xl relative text-white shadow-2xl lg:w-[390px] lg:h-[210px]">
      <div className="relative object-cover w-full h-full rounded-xl bg-gradient-to-bl from-sky-500 from-16% via-blue-500 via-28% to-indigo-500 to-70%"></div>

      <div className="w-full px-5 absolute top-5 left-0">
        <img className="absolute top-3 left-8 w-auto h-7 lg:h-9 lg:left-9" alt="Card chip" src={Chip} />
        <div className="flex items-center">
          <img
            className="block w-auto h-6 ml-auto lg:h-7"
            alt="card logo"
            src="https://img.logoipsum.com/226.svg"
          />
        </div>
        <div className="w-full py-5 text-start">
          <p className="text-2xl font-medium tracking-wider text-center lg:text-3xl lg:tracking-wider">{number || "#### #### #### ####"}</p>
          <div className="absolute left-9 mt-1">
            <p className="font-medium tracking-wider text-xs">
              {cvv || "####"}
            </p>
          </div>
        </div>
        <div className="pt-8 lg:pt-10">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs font-medium tracking-widest sm:text-sm">{name || "--- ---"}</p>
            </div>
            <div className="inline-flex items-center space-x-3">
              <div>
                <p className="text-[9px] font-thin leading-none">Valid</p>
                <p className="font-medium tracking-wider text-xs">{valid || "MM / YY"}</p>
              </div>
              <span className="text-xs">-</span>
              <div>
                <p className="text-[9px] font-thin leading-none">Expire</p>
                <p className="font-medium tracking-wider text-xs">{expired || "MM / YY"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardTwo.propTypes = {
  name: PropTypes.string.isRequired,
  cvv: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  valid: PropTypes.string.isRequired,
  expired: PropTypes.string.isRequired,
}
