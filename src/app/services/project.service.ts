import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Project } from '../domain';

@Injectable()
export class ProjectService {
  private readonly domain = 'projects';
  private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, @Inject('BASE_CONFIG') private config) {

  }
  // POST
  add(project: Project): Observable<Project> {
    project.id = null;
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http
      .post(uri, JSON.stringify(project), { headers: this.headers })
      .map(res => res.json());
  }
  // PUT
  update(project: Project): Observable<Project> {
    const uri = `${this.config.uri}/${this.domain}/${project.id}`;
    const toUpdate = {
      name: project.name,
      desc: project.desc,
      coverImg: project.coverImg
    }
    return this.http
      .patch(uri, JSON.stringify(toUpdate), { headers: this.headers })
      .map(res => res.json());
  }
  // DELETE
  del(project: Project): Observable<Project> {
    const delTasks$ = from(project.taskList).mergeMap(listId => this.http.delete(`${this.config.uri}/taskLists/${listId}`))
      .count();

    return delTasks$.switchMap(_ => this.http.delete(`${this.config.uri}/${this.domain}/${project.id}`)).mapTo(project);
  }

  get(userId: string): Observable<Project[]> {
    const uri = `${this.config.uri}/${this.domain}`;
    return this.http.get(uri, { params: { 'members_like': userId } })
      .map(res => res.json());
  }
}
