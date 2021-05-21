import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {observable, Observable, of} from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

interface Data {
    items: Item[];
}

interface Item {
    isMonthly: boolean;
    isGrouped: boolean;
    catID: number;
    name: string;
    price: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'BrightBoxFrontEnd';
    temps;
    global = true;
    global2 = false;
    jsonveci: Data
    doc = document;
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
    totalprice: number;

    ngOnInit(): void {
        this.HttpGetRUpdate();
        console.log(this.jsonveci);
    }

    constructor(private httpClient: HttpClient) {
    }

    public HttpGetRUpdate() {
        this.httpClient.get<Data>('http://127.0.0.1:8080/fuj-backend/api/polozky/data', {}).subscribe(
            val => this.jsonveci = val,
            () => this.httpClient.get<Data>('/assets/backup.json').subscribe(val => this.jsonveci = val)
        );
    }

    hide() {
        this.global = !this.global;
        this.global2 = !this.global;
        console.log(this.jsonveci);
    }
}
