"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("a80da60e-5260-4535-aeb4-a944c8545dff");
  }, []);

  return null;
};