import {Component} from '@angular/core';
import {Params} from './params';
import {CommunicationService} from './communication.service';

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
    global2 = false;

    posty: IPost[] = [];

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

    reprezentant = '';
    emailreprezentant = '';
    phonereprezentant = '';

    hide() {
        document.getElementById('global').hidden = !document.getElementById('global').hidden;
        this.global2 = true;
    }
}
