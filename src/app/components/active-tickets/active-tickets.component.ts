import { Component, OnInit } from '@angular/core';

import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-active-tickets',
  templateUrl: './active-tickets.component.html',
  styleUrls: ['./active-tickets.component.scss']
})
export class ActiveTicketsComponent implements OnInit {
  activeTickets:Ticket[];

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
    this.activeTickets = this.ticketService.getTickets();
  }

  deleteTicket(ticket:Ticket):void {
    // Remove ticket from server
    this.ticketService.deleteTicket(ticket);
    // Reload UI
    this.activeTickets = this.ticketService.getTickets();
  }

  addTicket(newTicket:Ticket):void {
    // Add to server
    this.ticketService.addTicket(newTicket);
    // Reload UI
    this.activeTickets = this.ticketService.getTickets();
  }

}
