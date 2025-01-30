"use client";
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false); // Default vabe modal open hobe na

  // Check localStorage for previous acceptance
  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookieAccepted");
    if (!cookieAccepted) {
      setShowModal(true); // Modal ta only first visit e show hobe
    }
  }, []);

  // Accept or Reject button press korle modal close kore dibe
  const closeModal = (isAccepted) => {
    if (isAccepted) {
      localStorage.setItem("cookieAccepted", "true"); // Store cookie accepted flag
    }
    setShowModal(false); // Close modal
  };

  if (!showModal) return null; // Modal hide korar jonno return null

  return (
    <div className="fixed inset-0 z-50 ">
      {/* Modal Section */}
      <div className="fixed bottom-5 left-5 z-50 bg-white p-4 rounded-lg shadow-lg max-w-sm text-left border border-gray-300">
        <p className="text-sm font-semibold">We use cookies to enhance your experience.</p>
        <p className="text-xs text-gray-600 mt-1">By continuing, you agree to our cookie policy.</p>
        <div className="mt-3 flex justify-end space-x-2">
          <button
            onClick={() => closeModal(true)}
            className="bg-green-500 text-white px-3 py-1.5 rounded-lg text-xs"
          >
            Accept All
          </button>
          <button
            onClick={() => closeModal(false)}
            className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs"
          >
            Reject All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;



