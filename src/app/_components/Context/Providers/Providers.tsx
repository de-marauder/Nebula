import { Dispatch, SetStateAction, createContext } from "react";

export const DidProvider = createContext<{
  DID: string;
  updateDID: Dispatch<SetStateAction<string>>
}>({
  DID: '',
  updateDID: () => { }
});

