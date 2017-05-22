export class Model implements Subject {
  private roundQuestions:Question[];
  private currentTime:number;
  private currentScore:number;
  private firstGame:boolean;
  private lastAnswer:boolean;

  constructor() {
    this.reset(); //reset the game
    this.firstGame = true;
  }

  reset(){
    this.currentScore = 0;
    this.currentTime = 0;
    this.firstGame = false;
    this.lastAnswer = false;
    this.roundQuestions = this.newQuestions();
    this.notifyAll();
  }

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

  //@param number is the keyboard code for the key that the user entered
  setSelected(selectedKey:number) {
    //key codes:         
        //left arrow: 37
        //up arrow: 38
        //right arrow: 39
        //down arrow: 40
    //still needs to check to see whether that keycode matches with the correct answer
  }

  unselect() {
    //reset to go to the next card
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
        return null;
    }
}