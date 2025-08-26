import css from './MobileMenuModal.module.css';
import CloseMenuButton from '../CloseMenuButton/CloseMenuButton';
import ReactModal from 'react-modal';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  id?: string;
};

export default function MobileMenuModal({
  isOpen,
  onClose,
}: MobileMenuProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={{
        base: css.contentBase,
        afterOpen: css.contentAfterOpen,
        beforeClose: css.contentBeforeClose,
      }}
      overlayClassName={{
        base: css.overlayBase,
        afterOpen: css.overlayAfterOpen,
        beforeClose: css.overlayBeforeClose,
      }}
      closeTimeoutMS={200}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <CloseMenuButton onClose={onClose} />
      Mobile Menu content
    </ReactModal>
  );
}
