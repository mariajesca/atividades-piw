import {Post} from './../post-modelo/post-model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-linha-do-tempo',
  templateUrl: './linha-do-tempo.component.html',
  styleUrls: ['./linha-do-tempo.component.css']
})
export class LinhaDoTempoComponent implements OnInit {
  @Input() posts: Post[] = [
    new Post(1, "Arya", "Texto aqui", 0),
    new Post(2, "Daenerys", "Texto aqui", 0)
  ];

  constructor() { }

  ngOnInit() {
  }

  postRecebeuLike(post){
    console.log(post);
   }
}
