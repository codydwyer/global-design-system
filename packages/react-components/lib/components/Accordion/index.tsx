import { clsx } from "clsx";
import "./style.scss";
import { useState } from "react";

export interface IAccordionProps {
  title: string;
  className?: string;
}

const Accordion = ({
  title,
  className,
  children,
}: React.PropsWithChildren<IAccordionProps>) => {
  const [isOpen, setOpen] = useState(false);
  const classes = clsx(className, "accordion", isOpen && "open");

  return (
    <div className={classes}>
      <div className="accordion-title">
        <button onClick={() => setOpen(!isOpen)}>{title}</button>
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
