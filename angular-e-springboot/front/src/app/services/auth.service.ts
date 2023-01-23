import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    
    public login(user: string, password: string) {
        return this.http.post<any>(environment.url + '/login', { user, password });
    }

    public logout() {
        // remover informações de autenticação armazenadas
    }

    public isLoggedIn(): boolean {
        // verificar se as informações de autenticação estão armazenadas
        return !!localStorage.getItem('access_token');
    }
    
}