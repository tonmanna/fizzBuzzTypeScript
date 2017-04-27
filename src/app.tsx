export class FizzBuzz {
    constructor() {
        console.log("============= Construction Complete =============");
    }

    getFizzBuzz(params: any): any {
        if (params % 15 == 0)
            return "FizzBuzz";
        if (params % 3 == 0)
            return "Fizz";
        if (params % 5 == 0)
            return "Buzz";
        else
            return params;
    }
}