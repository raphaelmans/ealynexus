import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-scholarships',
  templateUrl: './scholarships.component.html',
  styleUrls: ['./scholarships.component.scss']
})
export class ScholarshipsComponent implements OnInit {

  scholarships:any = []
  selected = 0;
  scholarship:any;
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getScholarships().subscribe(data=>{
      console.log(data)
      this.scholarships = ((data as any).data).reverse();
      if(this.scholarships.length > 0){
        this.scholarship = this.scholarships[0];
      }
    })
  }

  selectScholarship(index:number){
    this.selected = index;
    this.scholarship = this.scholarships[index]
  }

}
