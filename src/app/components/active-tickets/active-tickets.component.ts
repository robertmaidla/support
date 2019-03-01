import { Component, OnInit } from '@angular/core';

import { Ticket } from 'src/app/models/Ticket';

@Component({
  selector: 'app-active-tickets',
  templateUrl: './active-tickets.component.html',
  styleUrls: ['./active-tickets.component.scss']
})
export class ActiveTicketsComponent implements OnInit {
  activeTickets:Ticket[];

  constructor() { }

  ngOnInit() {
    this.activeTickets = [
      {
        id:1,
        createdAt: new Date(),
        query: "Ticket 1",
        deadline: new Date()
      },
      {
        id:2,
        createdAt: new Date(),
        query: "Ticket 2",
        deadline: new Date()
      },
      {
        id:3,
        createdAt: new Date(),
        query: "Ticket 3",
        deadline: new Date()
      }
    ]
  }

}
