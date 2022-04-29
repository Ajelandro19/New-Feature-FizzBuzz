const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Tests para FizzBuzzService",()=>{
    test("Requerimiento: Obtener el trick de según un score dado", ()=>{
        const score1 = {score: 1};
        const Fizz1=FizzbuzzService.applyValidation(score1); // {name: "Explorer1", score: 1, trick: 1} 

        const score2 = {score: 3};
        const Fizz2= FizzbuzzService.applyValidation(score2); // {name: "Explorer3", score: 3, trick: "FIZZ"}

        const score3 = {score: 5};
        const Fizz3=FizzbuzzService.applyValidation(score3); // {name: "Explorer5", score: 5, trick: "BUZZ"}

        const score4 = {score: 15};
        const Fizz4=FizzbuzzService.applyValidation(score4);
    
        expect(Fizz1.trick).toBe(1);
        expect(Fizz2.trick).toBe("FIZZ");
        expect(Fizz3.trick).toBe("BUZZ");
        expect(Fizz4.trick).toBe("FIZZBUZZ");
    });
});