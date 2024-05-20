export const playSound = (sound: 'hover') => {
  const audio = new Audio(`/assets/sounds/${sound}.mp3`);
  audio.play();
};
