import { Component , ViewChild , ElementRef } from '@angular/core';
import { trigger , state , style , transition , animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
     trigger('divState' , [
       
       state('normal' , style({
       	 backgroundColor: 'blue' ,
       	 borderRadius: '50%',
       	 transform: 'translateX(0px)' 
       })),
    
       state('highlighted' , style({
       	 backgroundColor: 'red' ,
       	 borderRadius: '0px',
       	 transform: 'translateX(150px)'
       })),

       state('shrunk' , style({
       	backgroundColor: 'green',
        borderRadius : '50%',
        transform: 'translateX(150px) scale(0.5)'
       })),

       transition('normal => highlighted' , animate(300)),
       transition('highlighted => normal' , animate(600)),
       transition('shrunk <=> *' , animate(700))
 
     ])
  ]
})
export class AppComponent {
  
  allText: string[] = ['Anas' , 'Saad'] ;
  @ViewChild('input') text: ElementRef ;

  state = 'normal' ;
  wildState = 'normal' ;

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

  onAnimate(){
  	this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  	this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal' ;
  }

 onShrink(){
 	this.wildState = 'shrunk';
 }

}
