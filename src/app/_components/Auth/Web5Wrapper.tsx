'use client'
import { useState, ReactNode } from "react";
import { DidProvider, Web5Provider } from "../Context/Providers/Providers";
import { Web5 } from "@web5/api";

export const Web5Wrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [web5, setWeb5] = useState<Web5 | null | undefined>(null);
  const [DID, setDID] = useState<string | null | undefined>('dhf');
  return (
    <Web5Provider.Provider value={{ web5, updateWeb5: setWeb5 }}>
      <DidProvider.Provider value={{ DID, updateDID: setDID }}>
        {children}
      </DidProvider.Provider >
    </Web5Provider.Provider >
  )
};
