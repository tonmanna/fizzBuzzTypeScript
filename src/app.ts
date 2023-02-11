export class FizzBuzz {
    constructor() {
        console.log("============= Construction Complete =============");
    }
    tableFizzBuzz(){
        const arr : Array<string|number>=[];
        for(let i =1;i<=100;i++){
         const value = this.getFizzBuzz(i);
          arr.push(value);
        }
        console.table(arr);
    }

    getFizzBuzz(params: number): string|number {
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

 const obj = new FizzBuzz();
 obj.tableFizzBuzz();