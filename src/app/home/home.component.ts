import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './../api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public teamsData: any;
  public textFiltro: any;
  public teamsFiltered: any[];

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.apiService.getTeams().subscribe((response) => {
      this.teamsData = JSON.parse(JSON.stringify(response));
      this.teamsFiltered = this.teamsData.data;
    });
  }
 
  public filtrar(value) {
    this.teamsFiltered = this.teamsData.data;
    this.teamsFiltered = this.teamsFiltered.filter((team) => {
      let nome: string = team.full_name.toLowerCase();
      return nome.includes(value.toLowerCase());
    });
  }

}
