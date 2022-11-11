import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = 'https://thumbs.dreamstime.com/z/icono-del-perfil-avatar-defecto-105356015.jpg';
  counter: number = 0;
  counterFn: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);
  }
}
