import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random-meme',
  templateUrl: './random-meme.component.html',
  styleUrls: ['./random-meme.component.css']
})
export class RandomMemeComponent implements OnInit {

  urlofimage: string='';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getmeme = ()=>{
    this.http.get("https://meme-api.herokuapp.com/gimme").subscribe((result: any) => this.urlofimage=result.url)
  }
}
