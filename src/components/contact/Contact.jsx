import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [formContact, setFromContact] = useState({
    email: "",
    firstname: "",
    message: "",
    phone: "",
  });
  const HandleChangeState = (ev) => {
    const { name, value } = ev.target;
    setFromContact((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-center items-start md:space-x-8 space-y-6 md:space-y-0">
        {/* Left Section - Contact Info */}
        <div className="bg-white shadow-md p-6 w-full md:w-1/3 rounded-lg">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="text-red-600 text-3xl mr-4">📞</span>
              <h3 className="font-bold text-lg md:text-xl">Call To Us</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              We are available 24/7, 7 days a week.
            </p>
            <p className="font-semibold mt-2 text-sm md:text-base">
              Phone: +8801611112222
            </p>
          </div>

          <hr className="border-t border-gray-300 mb-8" />

          <div>
            <div className="flex items-center mb-4">
              <span className="text-red-600 text-3xl mr-4">✉️</span>
              <h3 className="font-bold text-lg md:text-xl">Write To Us</h3>
            </div>
            <p className="text-gray-600 text-sm md:text-base">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="font-semibold mt-2 text-sm md:text-base">
              Emails: customer@exclusive.com
            </p>
            <p className="font-semibold text-sm md:text-base">
              Emails: support@exclusive.com
            </p>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-white shadow-md p-6 w-full md:w-2/3 rounded-lg">
          <form
            onSubmit={async (ev) => {
              ev.preventDefault();
              await emailjs
                .send(
                  "service_h1rucpg",
                  "template_u7odrdv",
                  {
                    to_email: formContact.email,
                    to_name: formContact.firstname,
                    from_name: "Ecommerce",
                    message: `Hello,${formContact.firstname} \n your message was sent successfully thx`,
                    reply_to: formContact.email,
                  },
                  "QnZR0Tpt9Rw3rl_sw"
                )
                .then((res) => {
                  console.log(res);
                });
              if (formDelivery.payment === "cod") {
                window.location.replace("/");
              }
            }}
          >
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  value={formContact.firstname}
                  name="firstname"
                  onChange={HandleChangeState}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Your Email *
                </label>
                <input
                  value={formContact.email}
                  name="email"
                  onChange={HandleChangeState}
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Your Phone *
                </label>
                <input
                  value={formContact.phone}
                  name="phone"
                  onChange={HandleChangeState}
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                  placeholder="Your Phone"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                value={formContact.message}
                name="message"
                onChange={HandleChangeState}
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                placeholder="Your Message"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
