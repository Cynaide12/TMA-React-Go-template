import { useBackButton } from "@telegram-apps/sdk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const BackButtonManipulator = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const bb = useBackButton();

  useEffect(() => {
    if (!bb) {
      return;
    }

    if (path === "/") {
      bb.hide();
    } else {
      bb.show();
    }
  }, [bb, path]);

  useEffect(() => {
    return bb && bb.on("click", () => navigate(-1));
  }, [bb, navigate]);

  return null;
};
