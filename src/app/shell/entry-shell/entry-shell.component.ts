import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'slt-entry-shell',
  templateUrl: './entry-shell.component.html',
  styleUrls: ['./entry-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntryShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
