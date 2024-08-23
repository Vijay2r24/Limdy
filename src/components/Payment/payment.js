import React from "react";
import { HiOutlineDownload } from "react-icons/hi"; // Changed download icon
import visalIcon from "../../assets/Imgs/visa_payment_method_card_icon_142729.png";
import mastercard from "../../assets/Imgs/Mastercard-Color.png";
import amazone from "../../assets/Imgs/untitled-1_160.png";
import payIcon from "../../assets/Imgs/pay.png"

const PaymentHistory = () => {
  const payments = [
    {
      method: "Paypal",
      email: "jacksonpardede@gmail.com",
      datePayment: "Aug. 29 2023",
      subscriptionEnd: "Aug. 29 2023",
      amount: "$699.00",
      downloadLink: "#",
      iconUrl: visalIcon, // Use tvishe imported image
    },
    {
      method: "Paypal",
      email: "jacksonpardede@gmail.com",
      datePayment: "Jul. 28 2023",
      subscriptionEnd: "Aug. 28 2023",
      amount: "$75.00",
      downloadLink: "#",
      iconUrl:mastercard, // Example external image URL
    },
    {
        method: "Paypal",
        email: "jacksonpardede@gmail.com",
        datePayment: "Jul. 28 2023",
        subscriptionEnd: "Aug. 28 2023",
        amount: "$75.00",
        downloadLink: "#",
        iconUrl:payIcon, // Example external image URL
      },
      {
        method: "Paypal",
        email: "jacksonpardede@gmail.com",
        datePayment: "Jul. 28 2023",
        subscriptionEnd: "Aug. 28 2023",
        amount: "$75.00",
        downloadLink: "#",
        iconUrl:mastercard, // Example external image URL
      },
      {
        method: "Paypal",
        email: "jacksonpardede@gmail.com",
        datePayment: "Jul. 28 2023",
        subscriptionEnd: "Aug. 28 2023",
        amount: "$75.00",
        downloadLink: "#",
        iconUrl:visalIcon, // Example external image URL
      },
      {
        method: "Paypal",
        email: "jacksonpardede@gmail.com",
        datePayment: "Jul. 28 2023",
        subscriptionEnd: "Aug. 28 2023",
        amount: "$75.00",
        downloadLink: "#",
        iconUrl:amazone, // Example external image URL
      },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-xl font-bold mb-4">Payment History</h1>
      <table className="min-w-full bg-white border border-gray-300 rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-4 px-6 text-left font-medium">Payment Method</th>
            <th className="py-4 px-6 text-left font-medium">Date Payment</th>
            <th className="py-4 px-6 text-left font-medium">Subscription End</th>
            <th className="py-4 px-6 text-left font-medium">Amount</th>
            <th className="py-4 px-6 text-left font-medium">Download</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-50 cursor-pointer transition duration-150"
            >
              <td className="py-4 px-6 flex items-center space-x-4">
                <img
                  src={payment.iconUrl}
                  alt={payment.method}
                  className="w-16 h-16 object-contain" // Increased image size with object-contain for better scaling
                />
                <div>
                  <div className="font-medium">{payment.method}</div>
                  <div className="text-sm text-gray-600">{payment.email}</div>
                </div>
              </td>
              <td className="py-4 px-8">{payment.datePayment}</td>
              <td className="py-4 px-8">{payment.subscriptionEnd}</td>
              <td className="py-4 px-8">{payment.amount}</td>
              <td className="py-4 px-5 text-blue-500">
                <a href={payment.downloadLink} className="flex justify-center items-center space-x-1 hover:underline">
                  <HiOutlineDownload className="text-lg" /> {/* Updated icon size and alignment */}
                  <span className="text-sm">Download</span>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
