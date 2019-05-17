import { Injectable } from '@angular/core';

@Injectable(
  { providedIn: 'root' }
)
export class MessageService {

  private _messages: string[] = [];

  constructor() { }

  public add(message: string) {
    this._messages.push(message);
  }
 
  public clear() {
    this._messages = [];
  }

  get messages() {
    return this._messages;
  }
}
