import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  color:any = "medium";
  a: number = 0;
  constructor(public navCtrl: NavController,
    private streamingMedia: StreamingMedia) {}

  openPlayer(){
 
  let options: StreamingVideoOptions = {
    successCallback: () => { console.log('Video played') },
    errorCallback: () => { console.log('error') },
    orientation: 'landscape'
  }
  
  this.streamingMedia.playVideo('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', options);
}

favorite(){
this.a = this.a + 1;
if(this.a % 2 != 0){
this.color = "primary";
} else {
  this.color = "light";
}
}

}
