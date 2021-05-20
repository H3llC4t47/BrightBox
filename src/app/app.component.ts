import {Component} from '@angular/core';
import {Params} from './params';
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
