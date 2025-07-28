import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  imports: [],
  templateUrl: './series.html',
  styleUrl: './series.css'
})
export class Series {
  series: string[] = ["24h chrono", "Fauda", "Marseille", "The Crown"];

  deleteSeries(index: number) {
    this.series.splice(index, 1);
  }
}
