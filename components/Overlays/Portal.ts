import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal = ({ children }: PortalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const portal = document.getElementById("portal");

  if (!isMounted || !portal) return null;
  return createPortal(children, portal);
};

type PortalProps = {
  children: React.ReactNode;
};

export default Portal;
