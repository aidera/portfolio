import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ListenAndPronounceState {
  isListening: boolean; // When you click on a record button to say your query - this is the status true/false
  listeningText: string | null; // When you click on a record button to say your query - this is the text of your speech
  isPronouncing: boolean; // Avatar is pronouncing the recording
  pronounceQueue: string[]; // Avatar is pronouncing the recording
}

const initialState: ListenAndPronounceState = {
  isListening: false,
  listeningText: null,
  isPronouncing: false,
  pronounceQueue: [],
};

export const listenAndPronounceSlice = createSlice({
  name: 'listen-and-pronounce',
  initialState,
  reducers: {
    setIsListening: (state, action: PayloadAction<boolean>) => {
      state.isListening = action.payload;
    },
    setListeningText: (
      state,
      action: PayloadAction<{ text: string | null }>
    ) => {
      state.listeningText = action.payload.text;
    },
    setIsPronouncing: (state, action: PayloadAction<boolean>) => {
      state.isPronouncing = action.payload;
    },
    addPronounciationToQueue: (state, action) => {
      state.pronounceQueue.push(action.payload);
    },
    removePronounciationFromQueue: (state) => {
      state.pronounceQueue.shift();
    },
    clearPronounciationQueue: (state) => {
      state.pronounceQueue = [];
    },
  },
});

export const {
  setIsListening,
  setListeningText,
  setIsPronouncing,
  addPronounciationToQueue,
  removePronounciationFromQueue,
  clearPronounciationQueue,
} = listenAndPronounceSlice.actions;

export default listenAndPronounceSlice.reducer;
