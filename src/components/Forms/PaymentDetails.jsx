import PropTypes from "prop-types";
import { InputField } from "@/components/Forms/InputField";

export function PaymentDetails({ cardDetail, handleInputChange }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 py-8 sm:grid-cols-6">
      <InputField
        id="card-number"
        name="number"
        label="Card Number"
        value={cardDetail.number}
        onChange={handleInputChange}
        maxLength={19}
        placeholder="1111 2222 3333 4444"
        className="sm:col-span-3 md:col-span-6 lg:col-span-3"
      />
      <InputField
        id="valid-date"
        name="valid"
        label="Valid Date"
        value={cardDetail.valid}
        onChange={handleInputChange}
        maxLength={7}
        placeholder="MM / YY"
        className="sm:col-span-3"
      />
      <InputField
        id="expired-month"
        name="expired"
        label="Expired Date"
        value={cardDetail.expired}
        onChange={handleInputChange}
        maxLength={7}
        placeholder="MM / YY"
        className="sm:col-span-3"
      />
      <InputField
        id="name-on-card"
        name="name"
        label="Name on card"
        value={cardDetail.name}
        onChange={handleInputChange}
        placeholder="Your name on card"
        className="sm:col-span-2 sm:col-start-1 md:col-span-4 lg:col-span-3"
      />
      <InputField
        id="cvv"
        name="cvv"
        label="CVV"
        value={cardDetail.cvv}
        onChange={handleInputChange}
        maxLength={4}
        placeholder="1234"
        className="sm:col-span-2 lg:col-span-2"
      />
    </div>
  );
};

PaymentDetails.propTypes = {
  cardDetail: PropTypes.shape({
    number: PropTypes.string,
    valid: PropTypes.string,
    expired: PropTypes.string,
    name: PropTypes.string,
    cvv: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
