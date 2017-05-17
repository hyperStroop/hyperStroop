export class Model implements Subject {
  private currentTime:number = 0;
  private currentScore: number = 0;

  private firstGame:boolean = true;
  private lastAnswer:boolean = false;

  private roundQuestions:Question[] = this.newQuestions();

  constructor() {}

  newQuestions():Question[]{
    for(var i = 0; i < 20; i++){
        let created = new QuestionFactory().createQuestion();
        this.roundQuestions.push(created);
    }
    return this.roundQuestions;
  }

  getQuestions():Question[] {
    return this.roundQuestions;    
  }

  // getShapeAt(x:number, y:number):Shape{
  //   let found:Shape;
  //   for(let shape of this.shapes){
  //     if(shape.contains(x,y)){
  //       found = shape;
  //     }
  //   }
  //   return found; //return last shape
  // }

  // //TODO: Add more methods...
  

  // updateText(shape, index):void{
  //   this.shapes[index].updateProperties(shape);
  //   let updateShape = this.shapes[index];
  //   this.notifyAll();
  // }

  // Subject methods (Observer pattern)
  private observers:Observer[] = [];


  subscribe(observer:Observer){
    this.observers.push(observer);
  }

  unsubscribe(observer:Observer){
    let index = this.observers.indexOf(observer);
    
    if(index > -1){
      this.roundQuestions.splice(index, 1);
    }
  }

  notifyAll(){
    this.observers.forEach((observer:Observer) => {
      observer.notify();
    })
  }
}

/**
 * Interface for any subject to be observed by an observer.
 */
export interface Subject {
  subscribe(observer:Observer):void   //Adds an observer to the subject.

  unsubscribe(observer:Observer):void //Removes an observer from the subject.

  notifyAll():void //Notifies all observers that the subject has.
}

export interface Observer {
  notify():void; //Notifies the observer of a change.
}

export class Question {
    constructor(private textColor:string, private backColor:string) {}

    getTextColor():string{
        return this.textColor;
    }

    getBackColor():string{
        return this.backColor;
    }
}

export class QuestionFactory {
    createQuestion():Question {
        let firstRand:number = Math.floor(Math.random() * 3) + 1;
        let secondRand:number = Math.floor(Math.random() * 3) + 1;

        while(firstRand == secondRand) {
            let secondRand = Math.floor(Math.random() * 3) + 1;
        }

        return new Question(this.getColorByNumber(firstRand), this.getColorByNumber(secondRand));
    }
      getColorByNumber(color:number):string{
        if(color == 1){
            return "red";
        }
        else if(color == 2){
            return "blue";
        }
        else if(color == 3){
            return "yellow";
        }
        return "black";
    }
}