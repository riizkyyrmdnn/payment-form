import { useState } from "react";
import { PaymentDetails } from "@/components/Forms/PaymentDetails";
import { PersonalDetails } from "@/components/Forms/PersonalDetails";
import { formatCardNumber, formatExpireDate } from "@/utils/formatters";
import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";
import { CardSelector } from "@/components/CardSelector";
import { acceptedCards } from "@/utils/acceptedCards";

export default function App() {
  const [selectCard, setSelectCard] = useState("bank one");
  const [cardDetail, setCardDetail] = useState({
    name: "",
    number: "",
    expired: "",
    valid: "",
    cvv: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formatValue = value;

    if (name === "number") {
      formatValue = formatCardNumber(value);
    } else if (name === "expired" || name === "valid") {
      formatValue = formatExpireDate(value);
    }

    setCardDetail(prevState => ({ ...prevState, [name]: formatValue }));
  };

  return (
    <>
      <Header />
      <Banner />
      <main className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-white">
        <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x">
          <section className="p-4 sm:p-6">
            <div className="border-b border-gray-200 pb-5">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Payment details
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Payment form with several bank cards.
              </p>
            </div>

            <div className="w-full py-8">
              <CardSelector
                selectedCard={selectCard}
                setSelectedCard={setSelectCard}
                cardDetail={cardDetail}
                acceptedCards={acceptedCards}
              />
            </div>

            <PaymentDetails
              cardDetail={cardDetail}
              handleInputChange={handleInputChange}
            />
          </section>

          <PersonalDetails />
        </div>
      </main>
      <Footer />
    </>
  );
}