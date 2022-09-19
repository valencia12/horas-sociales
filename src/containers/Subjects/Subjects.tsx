import { CSSProperties, useCallback, useEffect, useState } from 'react';
import subjectsArray from '../../assets/message.json';
import Subject from '../../components/Subject/Subject';


const colors = ['red', 'green', 'lightblue', 'yellow'];
const Subjects = () => {

  const [columns, setColumns] = useState<JSX.Element[][]>([]);


  useEffect(() => {
    if (columns.length === 0) {
      fillColumns();
    }
  }, [])
  

  const fillColumns = useCallback(() => {
    const columnsToFill: JSX.Element[][] = [];
    for (let i = 0;subjectsArray.length> i; i++) {

      const subject = subjectsArray[i];

      const subjectJSX = <Subject
        subject={subject}
        key={subject.asignatura}
        color={colors[Math.floor(Math.random() * colors.length)]}
      />


      const clumn = columnsToFill[subject.column - 1] || [];
      clumn.push(subjectJSX);
      columnsToFill[subject.column - 1] = clumn;
    }
    setColumns(columnsToFill);
  }, []);


  return <div style={styles.container}>
    {
      columns.map((column, index) => {
        return <div style={styles.column} key={index}>
          {column}
        </div>
      })
    }
  </div>
}


const styles: { [key: string]: CSSProperties } = { 
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: '5px',
    overflowX: 'auto',
  }, 
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  }
}


export default Subjects;