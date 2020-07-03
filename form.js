class Form{
    constructor(){
        this.button = createButton("Submit");
        this.title = createElement('h2'); 
        this.title.html("A Survey To Bring Change"); 
        this.input = createInput("voter's Email Id" + "");  
        this.input2 = createInput("Voter's name" + "")  ;
        this.question1 = createElement('h3', "Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor?");
        this.radio = createRadio('h3');
        this.radio.option('yes');
        this.radio.option('No');
        this.question2 = createElement('h3', "Q2. Would you be willing to contribute a small amount every month for such a program?");
        this.radio1 = createRadio('h3');
        this.radio1.option('yes');
        this.radio1.option('No');
        this.question3 = createElement('h3', "Q3. How much per month would you be willing to pay?");
        this.radio2 = createRadio('h3');
        this.radio2.option('More Than 1000 Rs');
        this.radio2.option('Less Than 1000 Rs');
    }
    display(){
        this.input.position(550,150);
        this.input2.position(550,200);
        this.title .position(500,50);
        this.button.position(600,600); 
        this.question1.position(250,250);
        this.radio.position(300,300);
        this.question2.position(250,350);
        this.radio1.position(300,400);
        this.question3.position(250,450); 
        this.radio2.position(300,500);  
        this.button.mousePressed(()=>{
            peopleCount++;
            user.updateCount(peopleCount);
            user.update(this.input.value(), this.email.value(), [this.radio.value(), this.radio1.value(), this.radio2.value()],peopleCount);
        })
    }
}