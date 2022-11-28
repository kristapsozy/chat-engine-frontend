import {Component} from '@angular/core';
import {Message} from "../../models/message.model";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  message: Message = {
    text: "",
  }

  isChatStarted: boolean = false;

  messages?: Message[] = [];

  constructor(private http: HttpClient) {
  }

  getMessage(): void {
    this.chatStarted();
    const url = 'http://localhost:8080/start-chat';

    this.http.get<Message[]>(url).subscribe({
      next: (response) => {
        console.log(response);
        this.messages?.push(...response);
      }
    })
  }

  sendMessage(): void {
    const url = "http://localhost:8080/chat";
    this.http.put(url, this.message).subscribe({
      next: (response) => {
        this.getNextMessages();
        this.message.text = "";
      },
      error: (error) => {
        alert("An error has occurred when sending message!")
      }
    });
  }

  getNextMessages(): void {
    const url = 'http://localhost:8080/chat';

    this.http.get<Message[]>(url).subscribe({
      next: (response) => {
        this.messages?.push(...response);
      }
    })

  }

  chatStarted() {
    this.isChatStarted = !this.isChatStarted;
  }

}
