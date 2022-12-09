import React, { useState } from "react";
import s from "./NavMenu.module.scss";
import { AnimateSharedLayout } from "framer-motion";
import MenuItem from "./MenuItem/MenuItem";

interface Props {
  children: JSX.Element[];
}

const NavMenu: React.FC<Props> = ({ children }) => {
  const [selected, setSelected] = useState(0);
  return (
    <div className={s.menu}>
      <AnimateSharedLayout>
        {children.map((el, i) => (
          <MenuItem
            key={i}
            isSelected={i === selected}
            onSelect={() => setSelected(i)}
          >
            {el}
          </MenuItem>
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

export default NavMenu;
