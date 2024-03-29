"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { use } from "react";
import { useState } from "react";
import toast from 'react-hot-toast';

const Contact = () => {

  let [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phoneNumber: "",
    message: "",
    city: "",
    state: ""
  });

  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    params.append('fullName', formData.fullName);
    params.append('email', formData.email);
    params.append('subject', formData.subject);
    params.append('phoneNumber', formData.phoneNumber);
    params.append('message', formData.message);
    params.append('city', formData.city);
    params.append('state', formData.state);

  try {
    const response = await fetch(`https://script.google.com/macros/s/AKfycbxWWMv5td0VzsMETiksuyCO5Gsfhe0rum_MQhvOZIWEU35g3vkAc2fRFwn0_f-YPZA/exec?${params.toString()}`, {
      method: "GET",
    });

    if (response.ok) {
      console.log("Form data sent successfully");
      toast.success("\n\nThankYou! Your message has been successfully sent. 🚀");
      setFormData(formData = {
        fullName: "",
        email: "",
        subject: "",
        phoneNumber: "",
        message: "",
        city: "",
        state: ""
      })
    } else {
      // Handle errors
      console.error("Error sending form data:", response.statusText);
    }
  } catch (error) {
    // Handle network errors
    console.error("Error sending form data:", error.message);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form onSubmit={handleSubmit} id="myForm">
          {/* Full Name */}
          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              placeholder="Full name"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email address"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
          </div>
          {/* Subject and Phone Number */}
          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              placeholder="Subject"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              placeholder="Phone number"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
          </div>
          {/* City and State*/}
          <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
            <input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
            <input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
              onChange={handleChange}
            />
          </div>
          {/* Message */}
          <div className="mb-11.5 flex">
            <textarea
              name="message"
              value={formData.message}
              placeholder="Message"
              className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="flex flex-wrap gap-4 xl:justify-between">
            <button
              type="submit"
              aria-label="send message"
              className="inline-flex items-center gap-2.5 rounded-full bg-black px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark"
            >
              Send Message
              <svg
                className="fill-white"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </form>

            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Find Me
              </h2>

              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  My Loaction
                </h3>
                <p>163 West Street, Vanniyampatti, Srivilliputtur, Virudhunagar, Tamilnadu, India</p>
              </div>
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="#">deepaksm283@gmail.com</a>
                </p>
              </div>
              {/* <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="#">+91 63832 33588</a>
                </p>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
