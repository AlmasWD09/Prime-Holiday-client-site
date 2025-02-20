"use client";

import axios from "axios";
import emailjs from "emailjs-com";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Swal from "sweetalert2";
const ModalPage = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    title: "Mr.",
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    contactMethod: "Email",
    message: "",
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const email = form.email.value;
    const telephone = form.telephone.value;
    const enquiry = form.enquiry.value;

    const enquiryInfo = {
      title,
      first_name,
      last_name,
      email,
      telephone,
      enquiry,
    }

    try {
      // Replace with your server's API endpoint
      const response = axios.post("http://10.0.80.13:8000/api/admin/enquiry", enquiryInfo);

      Swal.fire({
        title: "Enquiry sent successfully",
        icon: "success"
      })
      form.reset();
    } catch (error) {
      console.error("Error submitting enquiry:", error);
    } finally {
      setIsOpen(false);
    }
    // formData.to_name = "Arif Biswas";
    // formData.from_name = "Prime Holiday Destinations Contact Form";

    // emailjs
    //   .send(
    //     process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    //     formData,
    //     process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID
    //   )
    //   .then(
    //     (result) => {
    //       alert("Email sent successfully!");
    //     },
    //     (error) => {
    //       alert("Failed to send email.");
    //     }
    //   );
    // setIsOpen(false);
  };




  // modal close function
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="relative">
      {isOpen && (
        <div className="fixed h-screen inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 pt-10 md:pt-0">
          <div className="bg-[#fffff0] w-full max-w-[95%] lg:max-w-3xl p-8 rounded shadow-lg relative">
            <button
              onClick={() => handleCloseModal()}
              className="absolute top-4 right-4 text-red-500 hover:text-gray-800"
            >
              <div className="bg-primary w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
                <IoCloseSharp className="text-xl text-[#FFFFF0] w-10 h-10 p-2" />
              </div>
            </button>
            <h2 className="text-2xl text-primary font-semibold text-center mb-6">
              Enquiry Form
            </h2>

            <form onSubmit={handleSubmit} className="text-black">
              {/* Title, First Name, Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 md:mb-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium">
                    Title
                  </label>
                  <select
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                  >
                    <option>Mr.</option>
                    <option>Ms.</option>
                    <option>Mrs.</option>
                    <option>Dr.</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium"
                  >
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="first_name"
                    // value={formData.firstName}
                    // onChange={handleInputChange}
                    required
                    placeholder="Enter your first name"
                    className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium"
                  >
                    Last Name*
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="last_name"
                    // value={formData.lastName}
                    // onChange={handleInputChange}
                    required
                    placeholder="Enter your last name"
                    className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                  />
                </div>
              </div>

              {/* Email and Telephone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                    className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                  />
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium"
                  >
                    Telephone*
                  </label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your telephone"
                    className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                  />
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div className="md:mb-4">
                <p className="text-sm font-medium">
                  Preferred Method Of Contact
                </p>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Email"
                      checked={formData.contactMethod === "Email"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Email
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="Telephone"
                      checked={formData.contactMethod === "Telephone"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    Telephone
                  </label>
                </div>
              </div>

              {/* Your Message */}
              <div className="md:mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Your Enquiry*
                </label>
                <textarea
                  id="message"
                  name="enquiry"
                  // value={formData.message}
                  // onChange={handleInputChange}
                  required
                  placeholder="Enter your Message"
                  rows={window.innerWidth < 768 ? 2 : 4}
                  className="md:mt-1 block w-full border border-primary rounded-lg  outline-none p-1 md:p-2"
                ></textarea>
              </div>

              {/* Subscribe Checkbox */}
              <div className="md:mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="subscribe"
                    // checked={formData.subscribe}
                    // onChange={handleInputChange}
                    className="mr-2"
                  />
                  Subscribe to our newsletter
                </label>
                <p className="text-xs text-gray-500 md:mt-1">
                  Your details will not be passed to any other company, and you
                  can unsubscribe at any time.
                </p>
              </div>

              {/* Submit Button */}
              <button type="submit" className="bg-primary text-[#FFFFF0] px-6 py-2 my-2 md:my-0 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalPage;
