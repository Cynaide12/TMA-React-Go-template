import { useContext } from "react";
import {
  PlatformContext,
  type PlatformContextType,
} from "../context/isMiniAppContext";

export const usePlatform = (): PlatformContextType => {
  const context = useContext(PlatformContext);
  if (context === null) {
    throw new Error("usePlatform must be used within a ContextProvider");
  }
  return context;
};
