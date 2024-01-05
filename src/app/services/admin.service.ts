import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  showArticleFormEvent:EventEmitter<boolean>=new EventEmitter<boolean>();
 
  showArticleForm(value:boolean){
    this.showArticleFormEvent.emit(value)
  }


}
