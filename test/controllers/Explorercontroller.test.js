const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController",()=>{
    test("Requerimiento: Obtener el trick de según un score dado", ()=>{
        const score1 = 1;
        const Fizz1=ExplorerController.getfuzzservice(score1);
    
        const score2 = 3;
        const Fizz2= ExplorerController.getfuzzservice(score2); 
    
        const score3 = 5;
        const Fizz3=ExplorerController.getfuzzservice(score3); 
    
        const score4 = 15;
        const Fizz4=ExplorerController.getfuzzservice(score4);
        
        expect(Fizz1).toBe(1);
        expect(Fizz2).toBe("FIZZ");
        expect(Fizz3).toBe("BUZZ");
        expect(Fizz4).toBe("FIZZBUZZ");
    });
});