import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const TicketReceipt = ({ ticket }) => {
  const ticketRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);

const downloadTicket = async () => {
  try {
    // Force a reflow before capturing
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const canvas = await html2canvas(ticketRef.current, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      allowTaint: false, // Try false if true doesn't work
      removeContainer: true
    });
    
    // Direct PNG download
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `ticket-${ticket.reference}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
  } catch (error) {
    console.error("Error:", error);
    alert("Please take a screenshot of this page instead.");
  }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cyan p-4">
      <div
        ref={ticketRef}
        className="max-w-md w-full bg-white rounded-xl shadow-lg p-6"
        style={{ 
          WebkitPrintColorAdjust: 'exact', // Force colors in print
          colorAdjust: 'exact' 
        }}
      >
        <h1 className="text-2xl text-cyan font-bold mb-2">
          🎟️ {ticket.event || "Event Ticket"}
        </h1>

        <p className="text-green-600 font-bold mb-4">Payment Successful</p>

        <div className="space-y-2 text-sm">
          <p>
            <strong className="font-bold text-cyan">Ticket Type:</strong>{" "}
            <span className="text-gray-400">{ticket.ticketType}</span>
          </p>
          <p>
            <strong className="font-bold text-cyan">Email:</strong>{" "}
            <span className="text-gray-400">{ticket.email}</span>
          </p>
          <p>
            <strong className="font-bold text-cyan">Amount Paid:</strong>{" "}
            <span className="text-gray-400">{ticket.amount}</span>
          </p>
          <p>
            <strong className="font-bold text-cyan">Date:</strong>{" "}
            <span className="text-gray-400">{ticket.date}</span>
          </p>
          <p className="break-all">
            <strong className="font-bold text-cyan">Reference:</strong>{" "}
            <span className="text-gray-400">{ticket.reference}</span>
          </p>
        </div>

        <div className="mt-6 text-xs text-gray-500 tracking-widest leading-[18px]">
          This ticket is valid for one entry only. Organizers may verify payment
          using the reference above.
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={downloadTicket}
          disabled={isDownloading}
          className="px-6 py-3 bg-black text-white w-full max-w-md 
          border border-purple-600 font-medium cursor-pointer disabled:opacity-50"
        >
          {isDownloading ? "Generating PDF..." : "Download Ticket"}
        </button>
      </div>
    </div>
  );
};

export default TicketReceipt;