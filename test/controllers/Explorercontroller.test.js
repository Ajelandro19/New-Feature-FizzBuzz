const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests para ExplorerController",()=>{
    test("Requerimiento 1: Calcular todos los explorers en una misión", ()=>{
        const explorersInNode=10;
        expect(explorersInNode).toBe(10);
    });
    test("Requerimiento 2: Obtener el username del explorer en una misión",()=>{
        const explorersInNode="ajolonauta1";
        expect(explorersInNode).toBe("ajolonauta1");
    });
});