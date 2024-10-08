import { CardOne } from "@/components/Cards/CardOne";
import { CardTwo } from "@/components/Cards/CardTwo";
import { CardThree } from "@/components/Cards/CardThree";
import { CardFour } from "@/components/Cards/CardFour";
import { CardFive } from "@/components/Cards/CardFive";
import { formatCardNumber, formatExpireDate } from "@/utils/formatters";

export function RenderCard(selectedCard, cardDetail) {
  const props = {
    name: cardDetail.name,
    number: formatCardNumber(cardDetail.number),
    valid: formatExpireDate(cardDetail.valid),
    expired: formatExpireDate(cardDetail.expired),
    cvv: cardDetail.cvv
  };

  switch (selectedCard) {
    case "bank one":
      return <CardOne {...props} />;
    case "bank two":
      return <CardTwo {...props} />;
    case "bank three":
      return <CardThree {...props} />;
    case "bank four":
      return <CardFour {...props} />;
    case "bank five":
      return <CardFive {...props} />;
    default:
      return null;
  }
}