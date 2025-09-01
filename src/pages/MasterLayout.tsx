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
      <div className="pe-10 ps-10">
        <div className="outer-border ps-36  pe-36 ">
          <div className="inner-border flex flex-col gap-20 items-center justify-center ">
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Home />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Features />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Section />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Pricing />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Docs />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Blog />
            </motion.section>
            <motion.section
              className="w-full mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Footer />
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterLayout;
