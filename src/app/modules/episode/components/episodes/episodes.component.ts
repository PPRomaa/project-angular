import {Component, OnInit} from '@angular/core';
import {EpisodeService} from "../../sevices";
import {IEpisode} from "../../interfaces";

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {
  episodes: IEpisode[];

  constructor(private episodeService: EpisodeService) {
  }

  ngOnInit(): void {
    this.episodeService.getAll().subscribe(value => {
      this.episodes = value?.results
    })
  }

}
