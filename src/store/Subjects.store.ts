import create from 'zustand';

export interface ISubject {
  id: number;
  prerequisite: number;
  ciclo: string;
  codigo: string;
  asignatura: string;
  descripcion: string;
}

export interface ISubjectsStore {
  subjectFocus: ISubject | null;
  setSubjectFocus: (subject: ISubject | null) => void;
}

export const useSubjectsStore = create<ISubjectsStore>((set) => ({
  subjectFocus: null,
  setSubjectFocus: (subject) => {
    console.log('setSubjectFocus', subject);
    set({ subjectFocus: subject });
  },
}));

