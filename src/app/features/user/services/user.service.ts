import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  // Mock user data
  private users: User[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'Admin', department: 'HR', status: 'active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', department: 'IT', status: 'active' },
    { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'Employee', department: 'Finance', status: 'inactive' },
  ];
  private usersSubject = new BehaviorSubject<User[]>([...this.users]);
  users$ = this.usersSubject.asObservable();

  // Get all users (mock API)
  getUsers(): Observable<User[]> {
    return this.users$;
  }

  // Add a new user
  addUser(user: Omit<User, 'id'>): Observable<User> {
    const newUser: User = { ...user, id: Date.now() };
    this.users.push(newUser);
    this.usersSubject.next([...this.users]);
    return of(newUser);
  }

  // Update an existing user
  updateUser(id: number, user: Partial<User>): Observable<User | undefined> {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx > -1) {
      this.users[idx] = { ...this.users[idx], ...user };
      this.usersSubject.next([...this.users]);
      return of(this.users[idx]);
    }
    return of(undefined);
  }

  // Delete a user
  deleteUser(id: number): Observable<boolean> {
    const idx = this.users.findIndex(u => u.id === id);
    if (idx > -1) {
      this.users.splice(idx, 1);
      this.usersSubject.next([...this.users]);
      return of(true);
    }
    return of(false);
  }
} 