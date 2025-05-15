import { useRef } from "react";

/**
 * A modal dialog.
 */
export default function Modal({ visible, onClose, children }) {
  const backgroundRef = useRef();

  function handleBackgroundClick(e) {
    if (e.target === backgroundRef.current) onClose(e);
  }

  if (visible)
    return (
      <div ref={backgroundRef} className="modal-background" onClick={handleBackgroundClick}>
        <div>{children}</div>
      </div>
    );
  return undefined;
}
