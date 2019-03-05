import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss']
})
export class AddTicketComponent implements OnInit {
  @Output() addTicket: EventEmitter<any> = new EventEmitter();

  query:string;
  deadline:Date;

  queryError:boolean = false;
  deadlineError:boolean = false;
  submitSuccess:boolean = false;

  constructor(private ticketService:TicketService) { }

  ngOnInit() {}

  // Dynamic classes
  setQueryClasses() {
     return {'error-input': this.queryError}
  }

  setDeadlineClasses() {
    return {'error-input': this.deadlineError}
  }

  onSubmit():void {
    // Validate form inputs
    if (!this.query || !this.deadline) {
      // Show error messages
      this.handleFormErrors();
    } else {
      // Create new ticket object
      const newTicket = {
        id: 1,
        createdAt: new Date(),
        query: this.query,
        handled: false,
        deadline: new Date(this.deadline),
        critical: false
      }
      // Check whether the ticket is critical
      newTicket.critical = this.ticketService.isCritical(newTicket);
      // Add new ticket to server
      this.addTicket.emit(newTicket);
      // Clear the input form
      this.clearForm();
      // Show success message
      this.handleSuccess();
    }
  }

  handleFormErrors() {
    if (!this.query) {
      this.queryError = true;
      setTimeout(() => {
        this.queryError = false;
      }, 2000);
    }
    if (!this.deadline) {
      this.deadlineError = true;
      setTimeout(() => {
        this.deadlineError = false;
      }, 2000);
    }
  }

  handleSuccess() {
    this.submitSuccess = true;
    setTimeout(() => {
      this.submitSuccess = false;
    }, 2000);
  }

  clearForm() {
    this.query = null;
    this.deadline = null;
  }
}
