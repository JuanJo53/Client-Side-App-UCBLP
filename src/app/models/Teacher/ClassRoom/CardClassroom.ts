import { Schedule } from './Schedule';

export class CardClassroom {
  id_curso:string;
  curso: string;
  diasCurso: string;
  dias:Schedule[];
  horarioCurso: string;
  totalEstudiantes: number;
  semestre: string;
  idSemestre:number;
  idNivel:number;
}
