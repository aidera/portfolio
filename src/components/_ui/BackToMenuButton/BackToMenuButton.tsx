import IconedButton from '../IconedButton/IconedButton';
import CircleIcon from '../../../assets/icons/CircleIcon';
import { baseRoute } from '../../../utils/env';

export default function BackToMenuButton() {
  return (
    <IconedButton text="Back to Menu" link={baseRoute} icon={<CircleIcon />} />
  );
}
