import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getChannel() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  
  getChat() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getHome() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getContacts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getTools() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getInfo() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
