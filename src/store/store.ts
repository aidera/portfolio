import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './features/ui.slice';
import listenAndPronounceSlice from './features/listen-and-pronounce.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiSlice,
      listenAndPronounce: listenAndPronounceSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
