import React from 'react'; 
import { ISubject } from '../../store/Subjects.store';
import ModalContainer from '../ModalContainer/ModalContainer';

interface IProps {
  onClose: () => void;
  subject: ISubject;
}


const SubjectModal: React.FC<IProps> = (props) => {
  return <ModalContainer onClose={props.onClose} style = {styles.modal} closeButton > 
    <h5>numero  correlativo:</h5>
    <h5>codigo:</h5>
  </ModalContainer>
}


const styles: { [key: string]: React.CSSProperties } = {
  modal: {
    backgroundColor: '#646C98', 
    color: 'white',
    width: '40rem',
    flexDirection: 'column',
  }

}

export default SubjectModal
