import { Pipe, PipeTransform } from '@angular/core';
import { Exam } from 'src/models/exam';

@Pipe({
  name: 'examFilter'
})
export class ExamFilterPipe implements PipeTransform {

  transform(value: Exam[], filterText: string): Exam[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    
    return filterText?value.filter((e: Exam) => e.title
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
