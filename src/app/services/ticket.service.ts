import { Injectable } from '@angular/core';

import { Ticket } from 'src/app/models/Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  mockData:Ticket[] = [
    {
      id: 1,
      createdAt: new Date(2019,1,20,15,30,0,0),
      query: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      handled: true,
      deadline: new Date(2019,2,5,10,30,0,0),
      critical: true
    },
    {
      id: 2,
      createdAt: new Date(2019,1,22,15,30,0,0),
      query: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      handled: false,
      deadline: new Date(2019,2,5,11,30,0,0),
      critical: true
    },
    {
      id: 3,
      createdAt: new Date(2019,1,24,15,30,0,0),
      query: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      handled: false,
      deadline: new Date(2019,4,5,10,30,0,0),
      critical: false
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
    // Generate unique id (this would be handled automatically by db)
    ticket.id = this.generateUniqueId(ticket);
    
    this.mockData.push(ticket);
  }

  // Generate unique Id to the inputted ticket
  generateUniqueId(ticket:Ticket):number {
    let newIdFound = false;
    let id = ticket.id;
    while (!newIdFound) {
      if (this.mockData.find(t => t.id === id)) {
        id = Math.floor(Math.random() * 100);
      } else {
        newIdFound = true;
      }
    }
    return id;
  }

  // Checks whether ticket is critical (less than 1h to deadline)
  isCritical(ticket:Ticket):boolean {
    let critical = false;
    const time = new Date();
    if (Number(ticket.deadline) - Number(time) < 3600000) {
      critical = true;
    }
    return critical;
  }
}
