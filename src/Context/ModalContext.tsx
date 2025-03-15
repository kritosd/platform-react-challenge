import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  ReactElement,
} from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";

interface ModalContextType {
  isOpen: boolean;
  content: any;
  openModal: (content: any) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState<any>();

  const openModal = (content: React.ReactElement) => {
    setIsOpen(true);
    setContent(content);
  };
  const closeModal = () => {
    setIsOpen(false);
    setContent(null);
    const pathSegments = location.pathname.split("/").filter(Boolean);
    if (pathSegments.length > 1) {
      const newPath = `/${pathSegments.slice(0, -1).join("/")}`;
      navigate(newPath, { replace: true });
    }
  };

  return (
    <ModalContext.Provider value={{ isOpen, content, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};
