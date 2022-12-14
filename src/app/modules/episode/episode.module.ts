import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episode/episode.component';
import {EpisodeService} from "./sevices";


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent
  ],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ],
  providers:[
    EpisodeService
  ]
})
export class EpisodeModule { }
