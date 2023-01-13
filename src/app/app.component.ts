import {Component, OnInit} from '@angular/core';
import {Configuration, OpenAIApi} from "openai";

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent implements OnInit{

  response: any;

  ngOnInit(): void {
    //this.tryCall();
  }

    title = 'chatGPTWithAngular';


   
}

