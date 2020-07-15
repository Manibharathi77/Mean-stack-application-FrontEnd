import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})


export class MessagesComponent implements OnInit {

  constructor(private http: HttpClient) {
    //  http.get();
  }

  // messages = [{text: 'placeHolder', owner: 'myself'}, {text: 'placeHolder 2', owner: 'someone else'}];
  messages = [];
  specificMessage = {};

  ngOnInit(): void {
    this.getAllMessages().subscribe((messagesFromNode) => this.messages = messagesFromNode);
  }

  getAllMessages(): Observable<any>{
    return this.http.get('http://localhost:1234/messages');
  }

  getMessageById(id: any) : any {
    return this.http.get(`http://localhost:1234/messages/${id.target.value}`)
      .subscribe((messagesFromNode) =>{
        this.specificMessage = messagesFromNode;
        //this.specificMessage = JSON.stringify(this.specificMessage);
      });
  }

}
