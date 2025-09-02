import Footer from "../components/Footer";
import Section from "../components/Section";
import Blog from "./Blog";
import Docs from "./Docs";
import Features from "./Features";
import Home from "./Home";
import Pricing from "./Pricing";
import { motion } from "framer-motion";

const MasterLayout = () => {
  return (
    <>
      <div className="w-full mx-auto px-2 sm:px-4 md:px-6 ">
        <div className="outer-border w-full max-w-7xl mx-auto ps-20 pe-20">
          <div className="inner-border flex flex-col gap-8 md:gap-16 items-center justify-center w-full ">
            {[Home, Features, Section, Docs, Blog, Pricing, Footer].map(
              (Component, index) => (
                <motion.section
                  key={index}
                  className="w-full mb-5 md:mb-10"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                >
                  <Component />
                </motion.section>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
