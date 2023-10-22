import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Namaste1 from "../assets/Namaste1.jpg";
const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="aboutme" ref={ref}>
      <div className="container mx-auto">
        <h2 className="text-center underline">About US</h2>

        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <p className="pt-6 text-[30px]">
              Welcome to Rkado, a leading chat app company based in Pokhara,
              Nepal. With our innovative technology and commitment to
              exceptional user experiences, we strive to revolutionize the way
              people connect and communicate.
            </p>
            <p className="pt-6 text-[30px]">
              At Rkado, we understand the importance of seamless and secure
              communication in today's fast-paced world. Our team of talented
              professionals works tirelessly to develop cutting-edge features
              and functionalities that cater to the evolving needs of our users.
              Whether you're looking to stay connected with friends and family
              or collaborate with colleagues, Rkado is here to provide you with
              a reliable and user-friendly chat app experience.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" w-[2500px]"
          >
            <img src={Namaste1} alt="NTC" />
          </motion.div>

          {/* <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="pl-6">
              <h2>Designing</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-primary w-[85%]"
                  role="progressbar"
                >
                  85%
                </div>
              </div>
              <h2>System Analysis</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>

              <h2>Development</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[80%]"
                  role="progressbar"
                >
                  80%
                </div>
              </div>
              <h2>Problem Solving</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>
              <h2>Programming</h2>
              <div className="progress">
                <div
                  className="progress-bar bg-green progress-bar-info w-[75%]"
                  role="progressbar"
                >
                  75%
                </div>
              </div>
              <h2>Management</h2>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-default w-[90%]"
                  role="progressbar"
                >
                  90%
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
