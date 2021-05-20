import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-bunka',
    template: `
        <td>{{item.catID}}</td>
        <td>{{item.name}}</td>
        <td *ngIf="item.isMonthly">{{item.price}}Kč</td>
        <td *ngIf="!item.isMonthly">{{item.price / doc.getElementById("Počet měsíců").valueOf()}}</td> <!-- FIXME: idk, nefunguje -->
        <td>{{item.price}} Kč</td>
    `,
})
export class TableCellComponent {
    @Input() item;
    doc = document;
}