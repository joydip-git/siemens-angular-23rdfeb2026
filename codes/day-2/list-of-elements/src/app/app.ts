// import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  //for *ngFor
  //imports: [CommonModule],
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // names = ['anil', 'sunil', 'joydip']
  names = signal(['anil', 'sunil', 'joydip'])

  removeName(indexPos: number) {
    console.log(indexPos);
    //this.names.splice(indexPos, 1)

    // const temp = this.names()
    // const copy = [...temp]
    // copy.splice(indexPos, 1)
    // this.names.set(copy)

    this.names.update(
      (currentArray) => {
        currentArray.splice(indexPos, 1)
        return currentArray
      }
    )
    console.log(this.names());
  }
}
