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

    // Matemática
    { id: 1, title: 'Aprendendo Números', image: 'assets/mat1.png', category: 'Matemática' },
    { id: 2, title: 'Somando e Subtraindo', image: 'assets/mat2.png', category: 'Matemática' },
    { id: 3, title: 'Brincando com Tabuada', image: 'assets/mat3.png', category: 'Matemática' },
    { id: 4, title: 'Figuras Geométricas', image: 'assets/mat4.png', category: 'Matemática' },
    { id: 5, title: 'Contando Objetos', image: 'assets/mat5.png', category: 'Matemática' },
    { id: 6, title: 'Desafios de Lógica', image: 'assets/mat1.png', category: 'Matemática' },
    { id: 7, title: 'Números Divertidos', image: 'assets/mat2.png', category: 'Matemática' },
    { id: 8, title: 'Aventuras no Ábaco', image: 'assets/mat3.png', category: 'Matemática' },
    { id: 9, title: 'Jogos Matemáticos', image: 'assets/mat4.png', category: 'Matemática' },
    { id: 10, title: 'Brincando de Contar', image: 'assets/mat5.png', category: 'Matemática' },
    { id: 11, title: 'Somando com Amigos', image: 'assets/mat1.png', category: 'Matemática' },
    { id: 12, title: 'Explorando Formas', image: 'assets/mat2.png', category: 'Matemática' },
  
    // Língua Portuguesa
    { id: 13, title: 'Histórias Fantásticas', image: 'assets/portugues.png', category: 'Língua Portuguesa' },
    { id: 14, title: 'Jogos de Palavras', image: 'assets/portugues2.png', category: 'Língua Portuguesa' },
    { id: 15, title: 'Rimas e Poesias', image: 'assets/portugues6.png', category: 'Língua Portuguesa' },
    { id: 16, title: 'Palavras Mágicas', image: 'assets/portugues4.png', category: 'Língua Portuguesa' },
    { id: 17, title: 'Leitura Divertida', image: 'assets/portugues5.png', category: 'Língua Portuguesa' },
    { id: 18, title: 'Formando Frases', image: 'assets/portugues.png', category: 'Língua Portuguesa' },
    { id: 19, title: 'Aventuras na Leitura', image: 'assets/portugues2.png', category: 'Língua Portuguesa' },
    { id: 20, title: 'Descobrindo Sílabas', image: 'assets/portugues6.png', category: 'Língua Portuguesa' },
    { id: 21, title: 'Alfabeto Mágico', image: 'assets/portugues4.png', category: 'Língua Portuguesa' },
    { id: 22, title: 'Brincando com Letras', image: 'assets/portugues5.png', category: 'Língua Portuguesa' },
    { id: 23, title: 'Desafios de Ortografia', image: 'assets/portugues.png', category: 'Língua Portuguesa' },
    { id: 24, title: 'Contos Encantados', image: 'assets/portugues2.png', category: 'Língua Portuguesa' },
  
    { id: 25, title: 'Introdução à Química', image: 'assets/mat1.png', category: 'Química' },
    { id: 26, title: 'Experimentos Fáceis', image: 'assets/mat2.png', category: 'Química' },
    { id: 27, title: 'Misturas e Soluções', image: 'assets/mat3.png', category: 'Química' },
    { id: 28, title: 'O Mundo dos Átomos', image: 'assets/mat4.png', category: 'Química' },
    { id: 29, title: 'Descobrindo Elementos', image: 'assets/mat5.png', category: 'Química' },
    { id: 30, title: 'Luz e Cores', image: 'assets/mat1.png', category: 'Química' },
    { id: 31, title: 'Experiências Divertidas', image: 'assets/mat2.png', category: 'Química' },
    { id: 32, title: 'Transformações', image: 'assets/mat3.png', category: 'Química' },
    { id: 33, title: 'Química no Dia a Dia', image: 'assets/mat4.png', category: 'Química' },
    { id: 34, title: 'Brincando com Reações', image: 'assets/mat5.png', category: 'Química' },
    { id: 35, title: 'Água e Sabão', image: 'assets/mat1.png', category: 'Química' },
    { id: 36, title: 'Misturas Coloridas', image: 'assets/mat2.png', category: 'Química' },
  
    { id: 37, title: 'Exploradores do Mundo', image: 'assets/mat1.png', category: 'Geografia' },
    { id: 38, title: 'Planetas e Estrelas', image: 'assets/mat2.png', category: 'Geografia' },
    { id: 39, title: 'Montanhas e Rios', image: 'assets/mat3.png', category: 'Geografia' },
    { id: 40, title: 'Descobrindo Mapas', image: 'assets/mat4.png', category: 'Geografia' },
    { id: 41, title: 'Florestas e Oceanos', image: 'assets/mat5.png', category: 'Geografia' },
    { id: 42, title: 'Animais pelo Mundo', image: 'assets/mat1.png', category: 'Geografia' },
    { id: 43, title: 'Climas e Estações', image: 'assets/mat2.png', category: 'Geografia' },
    { id: 44, title: 'Aventuras no Deserto', image: 'assets/mat3.png', category: 'Geografia' },
    { id: 45, title: 'Povos e Culturas', image: 'assets/mat4.png', category: 'Geografia' },
    { id: 46, title: 'Lugares Famosos', image: 'assets/mat5.png', category: 'Geografia' },
    { id: 47, title: 'Viajando pelo Brasil', image: 'assets/mat1.png', category: 'Geografia' },
    { id: 48, title: 'Regiões do Planeta', image: 'assets/mat2.png', category: 'Geografia' }
  ];
  

  categories = ['Matemática', 'Língua Portuguesa', 'Química', 'Geografia', 'História', 'Inglês'];

  getMoviesByCategory(category: string) {
    return this.movies.filter(movie => movie.category === category);
  }

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
