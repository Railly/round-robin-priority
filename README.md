# Round Robin Scheduling with Priority
Programa para simular la programación de procesos de un Round Robin con prioridad variable o prioridad consante.

## *Integrantes del grupo*

| Nombre |
|--|
| Hugo Quispe, Railly Angelo |
| Gomez Huanca, Elian Dalmiro |
| Tarmeño Noriega, Carlos Daniel |

## Descripción
 - En la carpeta utils/solveWithRoundRobin se encuentra el algoritmo en sí

 - En la carpeta **"datasets"** se encuentran los archivos txt que correspondes a los archivos de prueba. 
  
 - Estos archivos contienen **PID, tiempo de llegada, duración, prioridad** . Necesariamente en ese orden.
 
 - Si no se incluye prioridad,    se asume que tiene prioridad 1.
 - En caso se desee agregar un nuevo archivo se debe cambiar la longitud del array de procesos en el index.js y crear un archivo en la carpeta datasets de nombre:  [numero consecutivo correspondiente].txt. 

## Ejecución en local

 1. Para ejecutar se debe tener instalado **Node.js.**
 2.  Dentro de la carpeta del proyecto ejectuar el comando

    npm run start
    
## Screenshot
![enter image description here](https://github.com/Railly/round-robin-priority/blob/main/screenshots/output.png)



