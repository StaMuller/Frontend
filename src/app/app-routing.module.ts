import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ClassComponent } from "./components/class/class.component";
import { AssignTaskComponent } from "./components/teacher/assign-task/assign-task.component";
import { TaskListComponent} from "./components/task-list/task-list.component";
import { UploadComponent} from "./components/upload/upload.component";
import { CommunitySceneComponent} from "./components/community-scene/community-scene.component";
import { PersonalInfoComponent } from './components/personal/personal-info/personal-info.component';
import { CheckComponent } from './components/teacher/check/check.component';
import { PersonTaskComponent } from './components/personal/person-task/person-task.component';
import { FreeTaskComponent } from './components/personal/free-task/free-task.component';
import { GroupRoomComponent } from './components/group-room/group-room.component';
import { CheckFinishedComponent } from './components/teacher/check-finished/check-finished.component';
import {PersonalFreeTaskComponent} from "./components/personal/personal-free-task/personal-free-task.component";

const routes: Routes = [
  // 登陆注册
  { path: '', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  // 社区
  { path: 'communityScene', component: CommunitySceneComponent},
  // 虚拟课堂
  { path: 'class', component: ClassComponent},
  { path: 'class/tasks', component: TaskListComponent},
  // 个人资料
  { path: 'personalInfo', component: PersonalInfoComponent},
  { path: 'personalInfo/Task', component: PersonTaskComponent},
  { path: 'personalInfo/freeTask', component: FreeTaskComponent},
  { path: 'personalInfo/myFreeTask', component: PersonalFreeTaskComponent},
  // 完成任务
  { path: 'tasks/upload', component: UploadComponent},
  { path: 'tasks/group', component: GroupRoomComponent},
  // 老师与助教部分
  { path: 'admin/check', component: CheckComponent},
  { path: 'admin/assignTask', component: AssignTaskComponent},
  { path: 'admin/checkFinished',component:CheckFinishedComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
