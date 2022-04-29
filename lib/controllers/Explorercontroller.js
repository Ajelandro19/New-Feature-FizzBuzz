const FizzBuzzService=require("./../services/FizzbuzzService");

class ExplorerController{
    static getfuzzservice(score){
        const fizz=FizzBuzzService.applyValidation(score);
        return fizz;
    }
    
}
module.exports=ExplorerController;