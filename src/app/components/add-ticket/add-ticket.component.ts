import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {
  @Output() addTicket: EventEmitter<any> = new EventEmitter();
  
  query:string;
  deadline:Date;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const newTicket = {
      id: 1,
      createdAt: new Date(),
      query: this.query,
      handled: false,
      deadline: this.deadline
    }

    this.addTicket.emit(newTicket);
  }

}
