import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'date-pipe',
 template: `<div>
   <p>On est le {{today | date}}</p>
   <p>Ou, si vous préférez, le {{today | date:'fullDate'}}</p>
   <p>Il est {{today | date:'H:mm'}}</p>
 </div>`
})
// Get the current date and time as a date-time value.
export class DateComponent {
  today: number = Date.now();
}
