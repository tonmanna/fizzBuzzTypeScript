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
        expect(result).to.equals("Buzz");
    });

    it("Should Be 2 if 2",() =>{
        let result = instance.getFizzBuzz(2);
        expect(result).to.equals(2);
    });

    it("Should Be Fizz if 15",() =>{
        let result = instance.getFizzBuzz(15);
        expect(result).to.equals("FizzBuzz");
    });

    it("Should Be FizzBuzz if 30",() =>{
        let result = instance.getFizzBuzz(30);
        expect(result).to.equals("FizzBuzz");
    });
    it("Should Be FizzBuzz if 12",() =>{
        let result = instance.getFizzBuzz(12);
        expect(result).to.equals("Fizz");
    });
    it("Should Be Buzz if 20",() =>{
        let result = instance.getFizzBuzz(20);
        expect(result).to.equals("Buzz");
    });
    it("Should Be Buzz if 20",() =>{
        let result = instance.getFizzBuzz(20);
        expect(result).to.equals("Buzz");
    });
});

