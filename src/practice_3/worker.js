const Person=require('../practice_3/person');

module.exports=class Worker extends Person{
    constructor(name,age){
        super(name,age);
    }

    introduce(){
        return 'I am a Worker. I have a job.';
    }
}
