import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveTicketsComponent } from './components/active-tickets/active-tickets.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { TestComponent } from './components/test/test.component';
import { AddTicketComponent } from './components/add-ticket/add-ticket.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ActiveTicketsComponent,
    TicketItemComponent,
    TestComponent,
    AddTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
