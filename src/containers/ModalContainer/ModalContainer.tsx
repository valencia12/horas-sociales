import React, { PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';
import styles from './ModalContainer.module.css';


interface IProps extends PropsWithChildren {
  onClose: () => void;
  className?: string;
  style?: React.CSSProperties;
  closeButton?: boolean;
}

const ModalContainer: React.FC<IProps> = (props) => {

  const jsx = <div className={styles.backdrop} onClick={props.onClose}>
    <div className={`${styles.modal} ${props.className || ''}`} onClick={(e) => e.stopPropagation()} style={props.style}>
      {props.closeButton && <div className={styles.closeButton} onClick={props.onClose}>
        X
      </div>}
      {props.children}
    </div>
  </div>


  return ReactDOM.createPortal(jsx, document.getElementById('modal-root')!);
}


export default ModalContainer