import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';

const SOCKET_ENDPOINT = `http://localhost:3000`;
@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  socket: any;
  message: string = '';

  constructor() {}

  ngOnInit(): void {
    this.setupSocketConnection();
  }

  setupSocketConnection(){
    this.socket = io(SOCKET_ENDPOINT, { 
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttempts: 10,
      transports: ['websocket'],
      agent: false, 
      upgrade: false,
      rejectUnauthorized: false
    });
    this.socket.on('message-broadcast',(data:string)=>{
      if(data){
        const element = document.createElement('li');
        element.innerHTML = data;
        element.style.background = 'white';
        element.style.padding = '15px 30px';
        element.style.margin = '15px';
        document.getElementById('message-list')?.appendChild(element);
      }
    });
  }

  sendMsg(){
    this.socket.emit('message', this.message);
    const element = document.createElement('li');
    element.innerHTML = this.message;
    element.style.background = 'white';
    element.style.padding = '15px 30px';
    element.style.margin = '15px';
    element.style.textAlign = 'right';
    document.getElementById('message-list')?.appendChild(element);
    this.message = '';
    console.log("message : ", this.message);
  }

}
