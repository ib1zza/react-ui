import React from "react";
import { motion } from "framer-motion";
import s from "./ActiveLine.module.scss";
const ActiveLine = () => {
  return <motion.div layoutId={"activeItem"} className={s.line}></motion.div>;
};

export default ActiveLine;
