import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-linkdata',
  templateUrl: './linkdata.component.html',
  styleUrls: ['./linkdata.component.css']
})
export class LinkdataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }

  fetchData=()=>{
    this.myapi.viewData().subscribe(
      (data)=>{
        this.linkData=data
      }
    )
  }

  linkData:any={}

  ngOnInit(): void {
  }

}
