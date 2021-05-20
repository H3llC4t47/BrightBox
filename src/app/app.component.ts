import {Component} from '@angular/core';
import {Params} from './params';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommunicationService} from './communication.service';
import * as backup from '../backup.json';


interface IPost {
    titulek: string;
    text: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'BrightBoxFrontEnd';
    global = true;
    global2 = false;

    posty: IPost[] = [];


    jsonveci = backup;
    // tslint:disable-next-line:max-line-length
    jsonfrombe = httpClient.request('GET', 'http://127.0.0.1:8080/fuj-backend/api/polozky/data', {responseType:'json'}); //Fixme: jak se dělaj http requesty?? :(
    doc = document;

    client: Params[] = [];
    clientname = '';
    firmname = '';
    adress = '';
    city = '';

    phone = '';
    email = '';
    ic = '';
    dic = '';

    months = '';
    from;
    till;

    reprezentant = '';
    emailreprezentant = '';
    phonereprezentant = '';

    hide() {
        this.global = !this.global;
        this.global2 = !this.global;
    }
}
