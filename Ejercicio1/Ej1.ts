/**Hacer una función que tenga un parámetro de entrada que sea un array y 
 * en el cual se implemente un algoritmo de ordenación Bubble sort . Criterios:
Debe ser recursivo */

function ArrayBubbleSort(arrayNum: number[], tam = arrayNum.length): number[] {
  
    /**Compruebo si el tamaño es 1, ya que si se cumple significara
     * que no quedan elementos en el array por ordenar. Si no lo pusiese 
     * daria un error ya que se excederian el numero maximo de llamadas a la pila.
    */
    if (tam === 1) {
        return arrayNum; 
    }

    /**Recorro el array con un foreach y voy comparando el elemento i con su siguiente.
     * En el caso de que haya que intercambiarlos me ayudo de la variable auxiliar
     * para realizar el cambio y ordenarlos.
     */
    
    for (let i = 0; i < tam-1; i++) {
      if (arrayNum[i]>arrayNum[i+1]) {
          const aux = arrayNum[i]
          arrayNum[i] = arrayNum[i+1]
          arrayNum[i+1] = aux
      }
    }
  
      return ArrayBubbleSort(arrayNum, tam-1);
  }
  
  
  let ArrayPrueba: number[] = [24,2,69,53,10,5];
  
  console.log(ArrayBubbleSort(ArrayPrueba))