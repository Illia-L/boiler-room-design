import { MdOutlineMenu } from 'react-icons/md';
import css from './OpenMenuButton.module.css';

type OpenMenuButtonProps = {
  onOpen: () => void;
  controlsId?: string;
};

export default function OpenMenuButton({
  onOpen,
  controlsId,
}: OpenMenuButtonProps) {
  return (
    <button
      type='button'
      className={css.button}
      aria-label={'Open menu'}
      aria-expanded={false}
      aria-controls={controlsId}
      onClick={onOpen}
    >
      <MdOutlineMenu size={32} />
    </button>
  );
}
