import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.scss']
})
export class TicketItemComponent implements OnInit {
  @Input() ticket:Ticket;
  @Output() deleteTicket:EventEmitter<Ticket> = new EventEmitter();

  constructor(private ticketService:TicketService) { }

  ngOnInit() { }

  onDelete(ticket:Ticket):void {
    this.deleteTicket.emit(ticket);
  }

  onToggle(ticket:Ticket):void {
    // Toggle in UI
    ticket.handled = !ticket.handled;
    // Toggle on server (not necessary without back end)
  }
}
