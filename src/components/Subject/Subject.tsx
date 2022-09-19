import React, { useState } from 'react';
import SubjectModal from '../../containers/modals/SubjectModal';
import { ISubject, useSubjectsStore } from '../../store/Subjects.store';
import styles from './Subject.module.css';


interface IProps {
  subject: ISubject;
  color: string;
}

const Subject: React.FC<IProps> = (props) => {

  const subject = props.subject;
  const [isOpen, setIsOpen] = useState(false);
  const subjectFocused = useSubjectsStore(state => state.subjectFocus);
  const setSubjectFocus = useSubjectsStore(state => state.setSubjectFocus);

  let isFocused = subjectFocused?.id === subject.id || subjectFocused?.id === subject.prerequisite;
  isFocused = subjectFocused ? isFocused : true;

  return <>
    <div
      className={`${styles.container} ${!isFocused ? styles.notFocus : ''}`}
      onMouseOver={() => setSubjectFocus(subject)}
      onMouseLeave={() => setSubjectFocus(null)}
    >
          <div>
        <div className={styles.title}>
          {subject.asignatura.toUpperCase()}
        </div>
      </div>
      <div className={styles[props.color]}>
        <div className={`${styles.pill} ${styles[props.color + '-2']}`}>
          <div>
            {subject.codigo}
          </div>
          <div>
            {subject.id}
          </div>
        </div>

        <div className={`${styles.circle}`} onClick = {() => setIsOpen(true)}>
          ?
        </div>

      </div>
    </div>

    {isOpen && <SubjectModal
      onClose={() => setIsOpen(false)}
      subject={subject}
    />}
  </>
}

export default Subject