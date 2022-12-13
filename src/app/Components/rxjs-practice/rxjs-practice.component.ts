import { Component, OnInit } from '@angular/core';
import { from, map, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-practice',
  templateUrl: './rxjs-practice.component.html',
  styleUrls: ['./rxjs-practice.component.css'],
})
export class RxjsPracticeComponent implements OnInit {

  ngOnInit(): void {
    console.log('Rxjs Component Initiated');
  }

  observableLongHandCode() {
    console.log(
      '********************Observable with Long Hand Code***********************'
    );
    const appleStream = new Observable((appleObserver) => {
      //Create Observable which emits stream
      appleObserver.next('Apple 1');
      appleObserver.next('Apple 2');
      appleObserver.next('Apple 3');
      appleObserver.complete();
    });
    const observer = {
      //create observer which will handle,process stream
      next: (apple: any) => console.log(`Apple was emitted ${apple}`),
      error: (err: any) => console.log(`Error occurred: ${err}`),
      complete: () => console.log(`No more apples, go home`),
    };
    appleStream.subscribe(observer); //Subscribe observable with observer to handle the stream
  }

  ofOperator() {
    console.log('********************of operator***********************');
    console.log('-------------of Operator with Items--------------');
    of('Apple1', 'Apple2', 'Apple3').subscribe((item) =>
      console.log(item)
    );

    console.log('-------------of Operator with Array of items--------------');
    of(['Apple1', 'Apple2', 'Apple3']).subscribe((item) =>
      console.log(item)
    );
  }

  fromOperator() {
    console.log('********************from operator***********************');
    //console.log("-------------from Operator with array of Items--------------")
    from(['Apple1', 'Apple2', 'Apple3']).subscribe((item) =>
      console.log(item)
    );
  }

  tapMapTakeOperator() {
    console.log(
      '********************tapMapTakeOperator operator***********************'
    );
    from([1, 2, 3, 4, 5, 6])
      .pipe(
        tap((item) => console.log('tapped item: ' + item)), //tap used for debugging or to perform actions without modifying the stream
        map((item) => item * 2), //map used to transform each item in stream
        map((item) => item + 1)
        //take(5)                                     //it will take only 5 item then it unsubscribe & completes the observable
      )
      .subscribe((item) => console.log('resulting: ' + item));
  }
}
