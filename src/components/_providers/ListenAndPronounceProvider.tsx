import { PropsWithChildren, useEffect, useState } from 'react';
import 'regenerator-runtime/runtime'; // this thing is important for speech recognition to be imported before react-speech-recognition
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setIsListening,
  setListeningText,
} from '../../store/features/listen-and-pronounce.slice';

export default function ListenAndPronounceProvider(props: PropsWithChildren) {
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition({ clearTranscriptOnListen: true });
  const dispatch = useAppDispatch();

  const isListening = useAppSelector(
    (state) => state.listenAndPronounce.isListening
  );
  const isPronouncing = useAppSelector(
    (state) => state.listenAndPronounce.isPronouncing
  );
  const pronounceQueue = useAppSelector(
    (state) => state.listenAndPronounce.pronounceQueue
  );

  const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isListening) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isListening]);

  useEffect(() => {
    dispatch(setListeningText({ text: transcript || null }));
  }, [transcript]);

  const startRecording = () => {
    if (!browserSupportsSpeechRecognition) {
      console.warn('Your browser does not support speech recognition');
      dispatch(setIsListening(false));
      return;
    }

    resetTranscript();
    SpeechRecognition.startListening({ language: 'en-EN', continuous: true });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
  };

  useEffect(() => {
    if (isPronouncing) {
      playNextAudio();
    }
  }, [pronounceQueue, isPronouncing]);

  useEffect(() => {
    if (!isPronouncing) {
      audioPlayer?.pause();
    }
  }, [isPronouncing]);

  const playNextAudio = async () => {
    // TODO
  };

  return <>{props.children}</>;
}
