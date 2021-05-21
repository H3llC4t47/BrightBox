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
    jsonveci: Data;
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

    i: number;
    x: number;
    groupcount: number;
    groupamount: number;
    totalprice: number;
    isselected:boolean[][];

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

    PocitaniCastky() {
        for (this.i = 0; this.i < this.jsonveci.items.length; this.i++) {
            if (this.jsonveci.items[this.i].isGrouped) {
                this.groupcount++;
            } else {
                this.totalprice += this.jsonveci.items[this.i].price;
            }
        }
        switch (this.groupcount) {
            case 1:
                this.groupamount = 6500;
                break;
            case 2:
                this.groupamount = 12000;
                break;
            case 3:
                this.groupamount = 16500;
                break;
            case 4:
                this.groupamount = 20000;
                break;
            default:
                this.groupamount = 0;
                break;
        }
        this.totalprice += this.groupamount;
        this.groupamount = 0;
        this.groupcount = 0;
    }

}
