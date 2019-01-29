import { Component , ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  allText: string[] = ['Anas' , 'Saad'] ;
  @ViewChild('input') text: ElementRef ;
  

   onDelete(index: number){
     this.allText.splice(index, 1);
  }


  onAdd(){
     const text = this.text.nativeElement.value ;
      if(text){
	     this.allText.push(text) ;
	     this.text.nativeElement.value = '';
	 }
  }

 

}
