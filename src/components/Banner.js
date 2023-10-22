import React from "react";
import Arkstha from "../assets/mascot_splash.png";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section className="section " id="home">
      <div className="container flex text-center mx-auto">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-auto hidden lg:flex max-w-[320px] lg:max-w-[302px]"
        >
          <img src={Arkstha} alt="photo" />
        </motion.div>
        <div className="font-bold text-[38px] text-accent uppercase">
          <motion.h1
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <span>Rkado </span>
          </motion.h1>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-[30px] lg:text-[40px] "
          >
            <span className="text-accent uppercase"> It's </span>

            <div className=" ml-5">
              <TypeAnimation
                sequence={[
                  "an Chatting APP",
                  2000,
                  "a Miniblogging",
                  2000,
                  "a Playing Games",
                  2000,
                  "a Sending Virtual Gifts",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="ml-1 text-[20px] text-bold">
              Connect with friends, family, and colleagues, regardless of where
              they are in the world. With features like group chat, realtime
              chat, events, and end-to-end encryption, you can be sure that your
              conversations are secure and private. Join today and start making
              the most of your conversations!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
