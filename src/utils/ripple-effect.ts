const rippleEffect = (
  event: React.MouseEvent<HTMLElement>,
  target: HTMLElement | null,
  cb?: Function
) => {
  if (!target) return;

  const rect = target.getBoundingClientRect();
  const circle = document.createElement('span');
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - rect.left - radius}px`;
  circle.style.top = `${event.clientY - rect.top - radius}px`;
  circle.classList.add('ripple');

  const ripple = target.getElementsByClassName('ripple')[0];

  if (ripple) {
    ripple.remove();
  }

  target.appendChild(circle);

  cb?.(event);
};

export default rippleEffect;
