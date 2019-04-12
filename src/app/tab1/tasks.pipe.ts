import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'datefilter',
    pure: false
})
export class DateFiler implements PipeTransform {
    transform(items: any[]): any {
        items.sort((a: any, b: any) => {
            a.due = new Date(a.due);
            b.due = new Date(b.due);
            console.log(a)
            return a.due.getTime() - b.due.getTime();   
        });
        return items;
    }
}