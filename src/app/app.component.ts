import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'my-store';
  showImage = true;
  onLoad(img: string) {
    console.log("log padre", img);
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }
}
