import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-empty',
  templateUrl: 'list-empty.html'
})
export class ListEmpty {

  constructor() { }
  @Input() emptyText: string;
}
