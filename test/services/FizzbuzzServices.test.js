const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para FizzBuzzService",()=>{
    test("Requerimiento: Obtener el trick de según un score dado", ()=>{
        const score1 = 1;
        const Fizz1=FizzbuzzService.applyValidation(score1);

        const score2 = 3;
        const Fizz2= FizzbuzzService.applyValidation(score2); 

        const score3 = 5;
        const Fizz3=FizzbuzzService.applyValidation(score3); 

        const score4 = 15;
        const Fizz4=FizzbuzzService.applyValidation(score4);
    
        expect(Fizz1).toBe(1);
        expect(Fizz2).toBe("FIZZ");
        expect(Fizz3).toBe("BUZZ");
        expect(Fizz4).toBe("FIZZBUZZ");
    });
});