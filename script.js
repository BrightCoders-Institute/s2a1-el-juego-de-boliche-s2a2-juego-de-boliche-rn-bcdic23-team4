class GeneradorDeMatriz {
  constructor(filas, columnas, max) {
    this.filas = filas;
    this.columnas = columnas;
    this.max = max;
    this.matriz = [];
  }

  // Función para generar un número aleatorio entre un valor max y minimo
  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // Generación de la matriz
  GeneracionDeMatriz() {
    for (let i = 0; i < this.filas; i++) {
      const fila = [];
      fila.push(this.getRandomNumber(0, this.max));

      // Si el primer tiro fue Max, establece el valor de la segunda columna a 0
      if (fila[0] === this.max) {
        fila.push(0);
      } else {
        fila.push(this.getRandomNumber(0, this.max - fila[0]));
      }

      if (i > 0) {
        fila.push(fila[0] + fila[1] + this.matriz[i - 1][2]);
      } else {
        fila.push(fila[0] + fila[1]);
      }

      this.matriz.push(fila);
    }
  }

  MostrarMatriz() {
    console.log(this.matriz);
  }
}

const generadorDeMatriz = new GeneradorDeMatriz(10, 3, 10);

generadorDeMatriz.GeneracionDeMatriz();
generadorDeMatriz.MostrarMatriz();
