import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDialogComponent } from './chat-dialog/chat-dialog.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ChatDialogComponent],
  exports: [ChatDialogComponent]
})
export class ChatModule {}
