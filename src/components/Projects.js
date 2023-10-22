import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Projects = ({ handleOnFilter }) => {
  const [data, setData] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    setData(Data);
    setPro([...new Set(Data.map((item) => item.title))]);
  }, []);

  const projectFilter = (itemData) => {
    const filterData = Data.filter((item) => item.title === itemData);
    setData(filterData);
  };

  return (
    <section className="section" id="projects">
      <div className="Projects">
        <div className="prowrapper">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="filterItem"
          >
            <ul className="">
              <li>
                <button onClick={() => setData(Data)}>All</button>
              </li>
              {pro.map((item) => (
                <li>
                  <button
                    onClick={() => {
                      projectFilter(item);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="proContainer"
          >
            {data.map((item) => (
              <div key={item.id} className="pic">
                {" "}
                <img src={item.image} alt="project" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
