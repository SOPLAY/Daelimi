import { atom } from "recoil";

export const chatLogsAtom = atom({
  key: "chatLogs",
  default: [],
});
