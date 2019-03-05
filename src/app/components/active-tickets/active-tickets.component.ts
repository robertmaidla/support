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
    this.reloadUI();

    setInterval(() => {
      this.isCritical()
    }, 10000);
  }

  // Load UI elements from server and sort by deadline
  reloadUI() {
    this.activeTickets = this.ticketService.getTickets().sort((a, b) => {
      return Number(a.deadline) - Number(b.deadline);
    });
  }

  deleteTicket(ticket:Ticket):void {
    // Remove ticket from server
    this.ticketService.deleteTicket(ticket);
    // Reload UI
    this.reloadUI();
  }

  addTicket(newTicket:Ticket):void {
    // Add to server
    this.ticketService.addTicket(newTicket);
    // Reload UI
    this.reloadUI();
  }

  // Toggle ticket critical status
  isCritical():void {
    this.activeTickets.forEach(t => {
      if (!t.critical) {
        t.critical = this.ticketService.isCritical(t);
      }
    });
  }

}
