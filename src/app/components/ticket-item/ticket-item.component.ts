import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() ticket:Ticket;
  @Output() deleteTicket:EventEmitter<Ticket> = new EventEmitter();

  stringFormat:string = 'en-GB';

  constructor() { }

  ngOnInit() { }

  // Dynamic ngClass classes
  setClasses():any {
    return {
      'container': true,
      'ticket-class': true,
      'is-handled': this.ticket.handled,
      'critical': this.ticket.critical
    }
  }

  onDelete(ticket:Ticket):void {
    this.deleteTicket.emit(ticket);
  }

  onToggle(ticket:Ticket):void {
    // Toggle in UI
    ticket.handled = !ticket.handled;
    // Toggle on server (not necessary without back end)
  }

  formatDate(date:Date):string {
    return date.toLocaleString(this.stringFormat);
  }
}
