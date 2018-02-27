import {
  Component,
  OnInit,
  OnChanges,
  Input,
  SimpleChanges
} from "@angular/core";

@Component({
  selector: "app-file-save",
  template: `
    <span>
      <p>{{filename + "." + fileExtension}}</p>
      <a [href]="link" [download]="file"/>
    </span>
  `,
  styles: []
})
export class FileSaveComponent implements OnInit, OnChanges {
  @Input() fileName: string;
  @Input() fileExtension: string;
  @Input() fileContents: string;

  link: string;
  file: string;

  constructor() {}

  ngOnInit() {
    this.createFile();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createFile();
  }

  private createFile() {
    this.link =
      "data:text/plain;charset=utf-8," + encodeURIComponent(this.fileContents);
    this.file = this.fileName + "." + this.fileExtension;
  }
}
