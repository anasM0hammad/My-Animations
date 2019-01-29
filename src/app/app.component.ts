import { Component , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  allText: string[] = ['Anas' , 'Saad'] ;
  @ViewChild('input') text: ElementRef ;


  onAdd(){
     const text = this.text.nativeElement.value ;
     this.allText.push(text) ;
     console.log(this.allText); 
  }

}
