import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input("label")
  public label: string

  // static: true ubrzava pretragu jer znamo da se nalazi u templat-u pri prvom renderu
  @ViewChild("tabContent", {static: true})
  public tabContent: TemplateRef<any>;

  ngOnInit(): void {
  }

}
