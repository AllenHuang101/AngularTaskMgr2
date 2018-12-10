import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { listAnimation } from '../../anims/list.anim';
import { slideToRight } from '../../anims/router.anim';
import { ProjectService } from '../../services/project.service';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { InviteComponent } from '../invite/invite.component';
import { NewProjectComponent } from '../new-project/new-project.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [
    slideToRight,
    listAnimation
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  @HostBinding("@routeAnim") state;

  projects: any[];

  constructor(private dialog: MdDialog, private cd: ChangeDetectorRef, private service$: ProjectService) { }

  ngOnInit() {
    this.service$.get("1").subscribe(projects => this.projects = projects);
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '新增项目' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [... this.projects, { "id": 3, "name": "新项目", "desc": "这是一个新项目", "coverImg": "assets/img/covers/0.jpg" }];
      this.cd.markForCheck();
    });
  }
  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }
  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: { title: '编辑项目' } });
  }
  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, { data: { title: '提示', content: '您确认删除该项目吗？' } });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.cd.markForCheck();
    });
  }

}
