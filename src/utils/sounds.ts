export const playSound = (sound: 'hover') => {
  const audio = new Audio(`/assets/sounds/${sound}.mp3`);
  audio.play();
};

export const avatarSounds = [
  'avatar-1.mp3',
  'avatar-2.mp3',
  'avatar-3.mp3',
  'avatar-4.mp3',
]