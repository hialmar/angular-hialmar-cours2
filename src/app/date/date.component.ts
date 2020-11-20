import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'date-pipe',
 template: `<div>
   <p>Today is {{today | date}}</p>
   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
   <p>The time is {{today | date:'h:mm a z'}}</p>
 </div>`
})
// Get the current date and time as a date-time value.
export class DateComponent {
  today: number = Date.now();
}
