import { Component, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MovieListComponent {
  @ViewChildren('scrollContainer') scrollContainers!: QueryList<ElementRef>;

  movies = [
    { id: 1, title: 'Movie 1', image: 'assets/mat1.png' },
    { id: 2, title: 'Movie 2', image: 'assets/mat2.png' },
    { id: 3, title: 'Movie 3', image: 'assets/mat3.png' },
    { id: 4, title: 'Movie 4', image: 'assets/mat4.png' },
    { id: 5, title: 'Movie 5', image: 'assets/mat5.png' },
    { id: 6, title: 'Movie 1', image: 'assets/mat1.png' },
    { id: 7, title: 'Movie 2', image: 'assets/mat2.png' },
    { id: 8, title: 'Movie 3', image: 'assets/mat3.png' },
    { id: 9, title: 'Movie 4', image: 'assets/mat4.png' },
    { id: 10, title: 'Movie 5', image: 'assets/mat5.png' },
  ];

  categories = ['Matemática', 'Língua Portuguesa', 'Química', 'Geografia', 'História', 'Inglês'];

  scrollLeft(index: number) {
    const scrollContainer = this.scrollContainers.toArray()[index];
    if (scrollContainer) {
      scrollContainer.nativeElement.scrollLeft -= 300;
    }
  }

  scrollRight(index: number) {
    const scrollContainer = this.scrollContainers.toArray()[index];
    if (scrollContainer) {
      scrollContainer.nativeElement.scrollLeft += 300;
    }
  }

  constructor(private router: Router) {}

  goToMovieDetails(movieId: number) {
    this.router.navigate(['/movie-details', movieId]);
  }
}
