import PropTypes from "prop-types";
import { RenderCard } from "@/components/RenderCards";

export function CardSelector({ selectedCard, setSelectedCard, cardDetail, acceptedCards }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="col-span-full">
        <div>
          {selectedCard && (
            <div className="flex items-center justify-center">
              <div className="text-xl font-bold capitalize">
                {RenderCard(selectedCard, cardDetail)}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col-span-full">
        <div className="pb-5">
          <h4 className="text-base font-semibold leading-5 text-gray-900">Accepted cards</h4>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            These are bank cards that can be used.
          </p>
        </div>
        <div className="w-full">
          <div className="flex justify-start items-center space-x-3">
            {acceptedCards.map(card => (
              <button
                key={card.name}
                onClick={() => setSelectedCard(card.name)}
                className="w-20 h-11 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-blue-600 p-2.5 rounded"
              >
                <img src={card.image} alt={`${card.name} credit card`} className="w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

CardSelector.propTypes = {
  selectedCard: PropTypes.string,
  setSelectedCard: PropTypes.func.isRequired,
  cardDetail: PropTypes.object.isRequired,
  acceptedCards: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
