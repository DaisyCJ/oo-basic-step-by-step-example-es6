const Person=require('../practice_4/person');

module.exports=class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }

    introduce(){
        return super.introduce()+' I am a Teacher. I have a job.';
    }
}


