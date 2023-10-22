import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "emailjs-com";

const Result = () => {
  return <p> Your message is successfully sent. I will contact you soon!</p>;
};
const Contact = (props) => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gg7u04e",
        "template_zuhw28t",
        e.target,
        "xD0baQ1mYX0jfUQzg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <section className="py-16 lg:section" id="contact" onSubmit={sendEmail}>
      <div className="container mx-auto">
        <h2 className="text-center underline">Contact US</h2>

        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl uppercase text-black font-medium mb-2 tracking-wide">
                Get In Touch
              </h4>
              <h2 className="text-[25px] lg:text-[80px] mb-12 pb-8 leading-none">
                Drop your message
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-12 items-start"
          >
            <input
              className="border-b py-3 w-full focus:border-black transaction-all resize-none mb 12"
              type="text"
              placeholder="Your name"
              name="fullName"
            />
            <input
              className="border-b py-3 w-full focus:border-black transaction-all resize-none mb 12"
              type="text"
              placeholder="Your email"
              name="email"
            />
            <textarea
              className="border-b py-3 w-full focus:border-accent transaction-all outline-none mb-12 resize-none"
              placeholder="Message"
              name="message"
            ></textarea>
            <button className="btn ">Send Message</button>
            <div className="row">{result ? <Result /> : null}</div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
