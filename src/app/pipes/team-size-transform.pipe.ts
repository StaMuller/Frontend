import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teamSizeTransform'
})
export class TeamSizeTransformPipe implements PipeTransform {

  transform(value: number): string {
    if (value === 1){
      return "个人任务";
    }else{
      return "团队任务（" + value + "人）";
    }
  }
}
