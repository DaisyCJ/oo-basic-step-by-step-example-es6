module.exports=class Class{
    constructor(klass){
        this.number=klass;
    }
    assignLeader(student){
        if(student.klass.number==this.number){
            this.leader=student;
        }
        else {
            console.log("It is not one of us.") ;
        }
    }
    getDisplayName(){
        return 'Class '+this.number;
    }
    appendMember(student){
        student.klass=this;
    }
};
