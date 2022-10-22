import { Component, OnInit } from '@angular/core';
import { BaseCreateComponent } from 'src/app/base/classes/base-create-component';
import { TerminalTransactionService } from 'src/app/services/terminal-transaction.service';

@Component({
  selector: 'app-new-terminal-transaction',
  templateUrl: './new-terminal-transaction.component.html',
  styleUrls: ['./new-terminal-transaction.component.css']
})
export class NewTerminalTransactionComponent extends BaseCreateComponent implements OnInit {

  constructor(api:TerminalTransactionService,
    ) {
      super(api);
     }
  ngOnInit(): void {
    this.title="Add new terminal transaction";
  }
   
}
