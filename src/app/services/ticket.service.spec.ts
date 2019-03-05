import { TestBed, inject } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import { Ticket } from '../models/Ticket';

// TODO: remove f
fdescribe('TicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketService]
    });
  });

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });

  //-- getTickets()
  it('should have getTickets function', 
    inject([TicketService], (service: TicketService) => {
      expect(service.getTickets).toBeTruthy();
    })
  );
  it('should return mockData on getTickets function', 
    inject([TicketService], (service: TicketService) => {
      expect(service.getTickets()).toEqual(service.mockData);
    })
  );

  //-- deleteTicket()
  it('should have deleteTicket function', 
    inject([TicketService], (service: TicketService) => {
      expect(service.deleteTicket).toBeTruthy();
    })
  );
  it('should remove inputted ticket from mockData', 
    inject([TicketService], (service: TicketService) => {
      const tTicket = new Ticket();
      service.mockData.push(tTicket);
      service.deleteTicket(tTicket);
      expect(service.mockData).not.toContain(tTicket);
    })
  );

  //-- addTicket()
  it('should have addTicket function', 
    inject([TicketService], (service: TicketService) => {
      expect(service.addTicket).toBeTruthy();
    })
  );
  it('should add inputted ticket to mockData', 
    inject([TicketService], (service: TicketService) => {
      // Create temp ticket
      const tTicket = new Ticket();
      // Call addTicket()
      service.addTicket(tTicket);
      // Make sure mockdata contains ticket
      expect(service.mockData).toContain(tTicket);
    })
  );
  it('should make sure generateUniqueId function is called', 
    inject([TicketService], (service: TicketService) => {
      // Create temp ticket
      const tTicket = new Ticket();
      // Spy on generateUniqueId()
      spyOn(service, 'generateUniqueId');
      // Call addTicket()
      service.addTicket(tTicket);
      expect(service.generateUniqueId).toHaveBeenCalled();
      expect(service.generateUniqueId).toHaveBeenCalledWith(tTicket);
    })
  );

  //-- generateUniqueId


});
