import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketItemComponent } from './ticket-item.component';
import { Ticket } from 'src/app/models/Ticket';

describe('TicketItemComponent DOM', () => {
  let component: TicketItemComponent;
  let fixture: ComponentFixture<TicketItemComponent>;
  let inputTicket: Ticket;
  let ticketElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketItemComponent);
    component = fixture.componentInstance;

    inputTicket = {
      id: 9,
      createdAt: new Date(),
      query: 'Testing',
      handled: false,
      deadline: new Date(),
      critical: true
    };
    component.ticket = inputTicket;
    ticketElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  // --DOM
  it('should have a ticket-class element', () => {
    const ticketClass = ticketElement.querySelector('.ticket-class');
    expect(ticketClass).toBeTruthy();
  });
  
  it('should have a handled checkbox', () => {
    const handledInput:HTMLInputElement = ticketElement.querySelector('.handled-input');
    expect(handledInput).toBeTruthy();
  });
  it('should toggle handled value on checkbox', () => {
    const handledInput:HTMLInputElement = ticketElement.querySelector('.handled-input');
    const initialChecked:boolean = handledInput.checked;
    expect(component.ticket.handled).toEqual(initialChecked, 'sync UI checked value onInit');
    handledInput.click();
    expect(component.ticket.handled).not.toEqual(initialChecked, 'sync UI checked value onChange');
  });

  it('should have linked query element', () => {
    let DOMQuery = ticketElement.querySelector('.query');
    expect(DOMQuery).toBeTruthy('should have a query element');
    let ticketQuery = component.ticket.query;
    expect(DOMQuery.textContent).toContain(ticketQuery, 'sync UI query value');
  });

  it('should have linked and formatted created-at element', () => {
    let DOMCreatedAt = ticketElement.querySelector('.created-at');
    expect(DOMCreatedAt).toBeTruthy('should have a created-at element');
    const output = component.formatDate(component.ticket.createdAt);
    expect(DOMCreatedAt.textContent).toContain(output, 'sync UI created-at value');
  });

  it('should have linked and formatted deadline element', () => {
    let DOMDeadline = ticketElement.querySelector('.deadline');
    expect(DOMDeadline).toBeTruthy('should have a deadline element');
    const output = component.formatDate(component.ticket.deadline);
    expect(DOMDeadline.textContent).toContain(output, 'sync UI deadline value');
  });

  it('should have delete button, on which element is removed', () => {
    const deleteButton:HTMLButtonElement = ticketElement.querySelector('.del');
    expect(deleteButton).toBeTruthy('should have a delete button');
    component.deleteTicket.subscribe(t => expect(this).toHaveBeenCalledWith(inputTicket), 'should call onDelete when clicked');
    deleteButton.click();
  });


  // --CLASS
  // --setClasses()
  it('should have setClasses function', () => {
    expect(component.setClasses).toBeTruthy();
  });
  it('should return dynamic classes for ngClass on setClasses function', () => {
    const output = {
      'container': true,
      'ticket-class': true,
      'is-handled': inputTicket.handled,
      'critical': inputTicket.critical
    }
    expect(component.setClasses()).toEqual(output);
  });

  // --onDelete()
  it('should have onDelete function', () => {
    expect(component.onDelete).toBeTruthy();
  });
  it('should emit deleteTicket event on onDelete', () => {
    component.deleteTicket.subscribe(t => expect(t).toBe(inputTicket));
    component.onDelete(inputTicket);
  });

  // --onToggle()
  it('should have onToggle function', () => {
    expect(component.onToggle).toBeTruthy();
  });
  it('should toggle handled property of ticket on onToggle', () => {
    const output = inputTicket.handled;
    component.onToggle(inputTicket);
    expect(inputTicket.handled).not.toBe(output);
  });

  // --formatDate()
  it('should have formatDate function', () => {
    expect(component.formatDate).toBeTruthy();
  });
  it('should return string in specific format', () => {
    const dateToFormat = new Date();
    const output = dateToFormat.toLocaleString(component.stringFormat);
    expect(component.formatDate(dateToFormat)).toEqual(output);
  });
});
