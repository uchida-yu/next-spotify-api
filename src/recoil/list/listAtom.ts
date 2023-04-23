import { atom } from 'recoil';

export const listAtom = atom<any>({
  key: 'listAtom',
  default: {},
});

export default listAtom;
