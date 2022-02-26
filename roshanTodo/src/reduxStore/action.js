import { INC, DEC } from "./actionType";
export const incCount = (payload) => ({
  type: INC,
  payload,
});
export const decCount = (payload) => ({
  type: DEC,
  payload,
});