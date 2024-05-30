import { createPortal } from "react-dom";

export function Modal({ children }) {
  return <div>{createPortal(children, document.getElementById("portal"))}</div>;
}
