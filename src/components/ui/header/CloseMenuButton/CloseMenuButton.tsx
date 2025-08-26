import { MdOutlineClose } from 'react-icons/md';
import css from './CloseMenuButton.module.css';

type CloseMenuButtonProps = {
  onClose: () => void;
  controlsId?: string;
};

export default function CloseMenuButton({
  onClose,
  controlsId,
}: CloseMenuButtonProps) {
  return (
    <button
      type='button'
      className={css.button}
      aria-label={'Open menu'}
      aria-expanded={true}
      aria-controls={controlsId}
      onClick={onClose}
    >
      <MdOutlineClose size={32} />
    </button>
  );
}
