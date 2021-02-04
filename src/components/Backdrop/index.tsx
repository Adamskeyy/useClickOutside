// styles
import "./Backdrop.css";

export interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop = ({ show, clicked }: BackdropProps) =>
  show ? <div className="backdrop" onClick={clicked}></div> : null;

export default Backdrop;
