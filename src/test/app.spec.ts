import * as app from "../app";
import { expect } from "chai";

describe("Test FizzBuss Project",()=>{
    let instance = new app.FizzBuzz();
    it("Should Be Fizz if 3",() =>{
        let result = instance.getFizzBuzz(3);
        expect(result).to.equals("Fizz");
    });

    it("Should Be Buzz if 5",() =>{
        let result = instance.getFizzBuzz(5);
        expect(result).to.equals("Bus");
    });

    it("Should Be 2 if 2",() =>{
        let result = instance.getFizzBuzz(2);
        expect(result).to.equals(2);
    });

    it("Should Be Fizz if 32",() =>{
        let result = instance.getFizzBuzz(32);
        expect(result).to.equals("Fizz");
    });

    it("Should Be FizzBuzz if 35",() =>{
        let result = instance.getFizzBuzz(35);
        expect(result).to.equals("FizzBus");
    });
});

