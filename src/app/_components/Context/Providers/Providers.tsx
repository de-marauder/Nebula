import { Web5 } from "@web5/api";
import { Dispatch, SetStateAction, createContext } from "react";

export const Web5Provider = createContext<{
  web5?: Web5 | null | undefined;
  updateWeb5: Dispatch<SetStateAction<Web5 | null | undefined>>
}>({
  web5: null,
  updateWeb5: () => { }
});

export const DidProvider = createContext<{
  DID: string | null | undefined;
  updateDID: Dispatch<SetStateAction<string | null | undefined>>
}>({
  DID: '',
  updateDID: () => { }
});

