import React from "react";
import ActiveLine from "../ActiveLine/ActiveLine";
import s from "./MenuItem.module.scss";
import { motion } from "framer-motion";

interface Props {
  children: JSX.Element;
  isSelected: boolean;
  onSelect: () => void;
}
const MenuItem: React.FC<Props> = ({ children, isSelected, onSelect }) => {
  return (
    <motion.div
      className={
        isSelected ? s.menuItem + " " + s.menuItemSelected : s.menuItem
      }
      // animate={{ className: isSelected ? s.menuItemSelected : "" }}
      onClick={onSelect}
    >
      {children} {isSelected && <ActiveLine />}
    </motion.div>
  );
};

export default MenuItem;
