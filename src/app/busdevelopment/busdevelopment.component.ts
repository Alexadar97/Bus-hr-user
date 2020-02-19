import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-busdevelopment',
  templateUrl: './busdevelopment.component.html',
  styleUrls: ['./busdevelopment.component.css']
})
export class BusdevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  confrimmodal(){
    $("#confrimdetailmodal").modal("show");
  }
}
