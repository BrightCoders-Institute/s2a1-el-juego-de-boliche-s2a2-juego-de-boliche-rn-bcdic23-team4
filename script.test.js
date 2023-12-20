const GeneradorDeMatriz = require('./script');

test('Mostrar matriz en consola', () => {
  const mockConsoleLog = jest.spyOn(console, 'log');
  const generadorDeMatriz = new GeneradorDeMatriz(10, 3, 10);

  // Suprime la salida en la consola para evitar que se imprima durante la prueba
  mockConsoleLog.mockImplementation(() => {});

  generadorDeMatriz.mostrarMatriz();

  // Verifica que console.log haya sido llamado con la matriz correcta
  expect(mockConsoleLog).toHaveBeenCalledWith(generadorDeMatriz.matriz);

  // Restaura la función original de console.log
  mockConsoleLog.mockRestore();
});

test('Verificar tamaño de la matriz', () => {
  const generadorDeMatriz = new GeneradorDeMatriz(10, 3, 10);
  generadorDeMatriz.generacionDeMatriz();

  // Verifica que la matriz tenga el número correcto de filas
  expect(generadorDeMatriz.matriz.length).toBe(10);

  // Verifica que cada fila tenga el número correcto de columnas
  generadorDeMatriz.matriz.forEach((fila) => {
    expect(fila.length).toBe(3);
  });
});
