import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieDetailsComponent implements OnInit {
  movieId: number | null = null;
  movie: any = null;

  movies = [
    { id: 1, title: 'Movie 1', image: 'assets/mat1.png', description: 'Descrição do Movie 1' },
    { id: 2, title: 'Movie 2', image: 'assets/mat2.png', description: 'Descrição do Movie 2' },
    { id: 3, title: 'Movie 3', image: 'assets/mat3.png', description: 'Descrição do Movie 3' },
    { id: 4, title: 'Movie 4', image: 'assets/mat4.png', description: 'Descrição do Movie 4' },
    { id: 5, title: 'Movie 5', image: 'assets/mat5.png', description: 'Descrição do Movie 5' },
    { id: 6, title: 'Movie 6', image: 'assets/mat1.png', description: 'Descrição do Movie 6' },
    { id: 7, title: 'Movie 7', image: 'assets/mat2.png', description: 'Descrição do Movie 7' },
    { id: 8, title: 'Movie 8', image: 'assets/mat3.png', description: 'Descrição do Movie 8' },
    { id: 9, title: 'Movie 9', image: 'assets/mat4.png', description: 'Descrição do Movie 9' },
    { id: 10, title: 'Movie 10', image: 'assets/mat5.png', description: 'Descrição do Movie 10' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.movieId = Number(params.get('id'));
      this.movie = this.movies.find((m) => m.id === this.movieId);
    });
  }

  playGame() {
    this.router.navigate(['/math-game']);
  }
}
