import IconButton from '../IconButton/IconButton';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  addPronounciationToQueue,
  clearPronounciationQueue,
  setIsListening,
  setIsPronouncing,
} from '../../../store/features/listen-and-pronounce.slice';
import MicIcon from '../../../assets/icons/MicIcon';
import RecIcon from '../../../assets/icons/RecIcon';

export default function RecordSpeech() {
  const isListening = useAppSelector(
    (state) => state.listenAndPronounce.isListening
  );
  const listeningText = useAppSelector(
    (state) => state.listenAndPronounce.listeningText
  );
  const dispatch = useAppDispatch();

  const startRecording = () => {
    dispatch(clearPronounciationQueue());
    dispatch(setIsPronouncing(false));

    dispatch(setIsListening(true));
  };

  const stopRecording = async () => {
    dispatch(setIsListening(false));
    dispatch(addPronounciationToQueue('TODO'));
    dispatch(setIsPronouncing(true));
  };

  return (
    <>
      {!isListening && (
        <IconButton onClick={startRecording} icon={<MicIcon fill="white" />} />
      )}
      {isListening && <IconButton onClick={stopRecording} icon={<RecIcon />} />}
    </>
  );
}
