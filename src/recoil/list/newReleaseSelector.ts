import { selectorFamily } from 'recoil';
import SpotifyService from '@/infrastructure/service/SpotifyService';
import tokenAtom from '../token';

export const newReleasesSelector = selectorFamily({
  key: 'newReleasesSelector',
  get:
    () =>
    async ({ get }) => {
      const accessToken = get(tokenAtom);
      const market = 'JP';
      let response = null;
      if (accessToken && market) {
        response = await SpotifyService.getNewRelease(market, accessToken);
      }
      return response;
    },
});

export default newReleasesSelector;
