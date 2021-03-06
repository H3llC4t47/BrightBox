import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

@Injectable({
    providedIn: 'root'
})
export class CommunicationService {

    constructor(private httpClient: HttpClient) {
    }

    public HttpGetRUpdate() {
        this.httpClient.get('http://127.0.0.1:8080/fuj-backend/api/polozky/data', {}).subscribe(val => {
            return val;
        });
    }
}
