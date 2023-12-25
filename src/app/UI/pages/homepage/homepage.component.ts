import { AfterViewInit, Component, OnInit } from '@angular/core';






@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  

})
export class HomepageComponent implements OnInit{
// sentence='hello';
  sentence='Hello there ! 🌎  My name is MANIBAHO Patrick, I am a Fullstack Software Engineer,  Welcome to my brand !';
  displayedText='';
 
  welcome:boolean=false;


  ngOnInit(): void {
    this.animateText();
    
   
   
    
  }
 
  animateText() {
    const sentenceArray = this.sentence.split('');
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      this.displayedText += sentenceArray[currentIndex];
      
      currentIndex++;
     
     
    

      if (currentIndex === sentenceArray.length) {
        this.welcome=true;
        clearInterval(intervalId);
       
        
      }
    }, 50); 
   
  }

 
  

}
