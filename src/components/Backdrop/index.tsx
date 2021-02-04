// styles
import "./Backdrop.css";

export interface BackdropProps {
  show: boolean;
  onClickOutside: () => void;
}

const Backdrop = ({ show, onClickOutside }: BackdropProps) =>
  show ? <div className="backdrop" onClick={onClickOutside}></div> : null;

export default Backdrop;
