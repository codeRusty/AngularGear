import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class BeamService {

  private subject = new Subject<IBeam>();

  broadcast(beam: IBeam): void {
    this.subject.next(beam);
  }

  clear() {
    this.subject.next();
  }

  on(): Observable<IBeam> {
    return this.subject.asObservable();
  }
}

interface IBeam {
  msg: string;
  type: string;
}
