import { useState } from "react";
import TicketReceipt from "./TicketReceipt";

const PayTicket = () => {
  const [ticket, setTicket] = useState(null);

  const payWithPaystack = () => {
    const handler = window.PaystackPop.setup({
      key: 'pk_test_aa9fab935a0de3dda723d27a2c97257831820cbc', // replace
      email: "buyer@email.com",
      amount: 20000 * 100, // kobo
      currency: "NGN",
      callback: function (response) {
        // PAYMENT CONFIRMED
        setTicket({
          reference: response.reference,
          email: "buyer@email.com",
          event: "Health Tech Summit",
          ticketType: "Regular",
          amount: "₦20,000",
          date: new Date().toLocaleString(),
        });
      },
      onClose: function () {
        alert("Payment cancelled");
      },
    });

    handler.openIframe();
  };

  if (ticket) return <TicketReceipt ticket={ticket} />;

  return (
    <div className="h-[100vh] flex items-center bg-bg justify-center">
    <button
      onClick={payWithPaystack}
      className="px-6 py-3 bg-white text-black w-[50vw] editors-reg text-[28px]"
    >
      Buy Ticket
    </button>
    </div>
  );
};

export default PayTicket;
