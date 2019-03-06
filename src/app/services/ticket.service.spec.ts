import { TestBed, inject } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import { Ticket } from '../models/Ticket';

describe('TicketService', () => {
  let service:TicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketService]
    });

    service = TestBed.get(TicketService);
  });

  afterEach(() => {
    service = null;
  })


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //-- getTickets()
  it('should have getTickets function', () => {
      expect(service.getTickets).toBeTruthy();
  });
  it('should return mockData on getTickets function', () => {
      expect(service.getTickets()).toEqual(service.mockData);
  });

  //-- deleteTicket()
  it('should have deleteTicket function', () => {
      expect(service.deleteTicket).toBeTruthy();
  });
  it('should remove inputted ticket from mockData on deteTicket function', () => {
      const tTicket = new Ticket();
      service.mockData.push(tTicket);
      service.deleteTicket(tTicket);
      expect(service.mockData).not.toContain(tTicket);
  });

  //-- addTicket()
  it('should have addTicket function', () => {
      expect(service.addTicket).toBeTruthy();
  });
  it('should add inputted ticket to mockData on addTicket function', () => {
      // Create temp ticket
      const tTicket = new Ticket();
      // Call addTicket()
      service.addTicket(tTicket);
      // Make sure mockdata contains ticket
      expect(service.mockData).toContain(tTicket);
  });
  it('should make sure generateUniqueId function is called on addTicket function', () => {
      // Create temp ticket
      const tTicket = new Ticket();
      // Spy on generateUniqueId()
      spyOn(service, 'generateUniqueId');
      // Call addTicket()
      service.addTicket(tTicket);
      expect(service.generateUniqueId).toHaveBeenCalled();
      expect(service.generateUniqueId).toHaveBeenCalledWith(tTicket);
  });

  //-- generateUniqueId()
  it('should have generateUniqueId function', () => {
    expect(service.generateUniqueId).toBeTruthy();
  });
  it('should generate unique id on generateUniqueId function', () => {
    const tTicket = new Ticket();
    tTicket.id = 88;
    service.mockData.push(tTicket);
    expect(service.generateUniqueId(tTicket)).not.toEqual(tTicket.id);
  });

  //-- isCritical()
  it('should have isCritical function', () => {
    expect(service.isCritical).toBeTruthy();
  });
  it('should return true on isCritical function if ticket is critical', () => {
    const tTicket = new Ticket();
    const time = new Date();
    // Deadline in 59 minutes
    tTicket.deadline = new Date(time.getTime() + 3540000);
    expect(service.isCritical(tTicket)).toBe(true);
  });
  it('should return false on isCritical function if ticket is not critical', () => {
    const tTicket = new Ticket();
    const time = new Date();
    // Deadline in 61 minutes
    tTicket.deadline = new Date(time.getTime() + 3660000);
    expect(service.isCritical(tTicket)).toBe(false);
  });
});