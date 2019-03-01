import { Injectable } from '@angular/core';

import { Ticket } from 'src/app/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  mockData:Ticket[] = [
    {
      id: 1,
      createdAt: new Date(),
      query: "Ticket 1",
      handled: false,
      deadline: new Date()
    },
    {
      id: 2,
      createdAt: new Date(),
      query: "Ticket 2",
      handled: false,
      deadline: new Date()
    },
    {
      id: 3,
      createdAt: new Date(),
      query: "Ticket 3",
      handled: true,
      deadline: new Date()
    }
  ]

  constructor() { }

  getTickets():Ticket[] {
    return this.mockData;
  }

  deleteTicket(ticket:Ticket):void {
    this.mockData = this.mockData.filter(t => t.id !== ticket.id);
  }

  addTicket(ticket:Ticket):void {
    this.mockData.push(ticket);
  }
}
