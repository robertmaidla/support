import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTicketsComponent } from './active-tickets.component';
import { TicketService } from 'src/app/services/ticket.service';

describe('ActiveTicketsComponent', () => {
  let component: ActiveTicketsComponent;
  let fixture: ComponentFixture<ActiveTicketsComponent>;
  let ticketService: TicketService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTicketsComponent ],
      providers: [TicketService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ticketService = TestBed.get(TicketService);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
