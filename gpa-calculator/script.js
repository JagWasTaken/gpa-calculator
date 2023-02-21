function calculateGPA(arr){
    arr = arr.toString();
    let average = 0;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === "A+" || arr[i] === "a+" || arr[i] === "A" || arr[i] === "a") {
            average += 4;
        } 
        else if (arr[i] === "A-" || arr[i] === "a-") {
            average += 3.7;
        }
        else if (arr[i] === "B+" || arr[i] === "b+") {
            average += 3.4;
        }
        else if (arr[i] === "B" || arr[i] === "b") {
            average += 3.0;
        }
        else if (arr[i] === "B-" || arr[i] === "B-") {
            average += 2.7;
        }
        else if (arr[i] === "C+" || arr[i] === "C+") {
            average += 2.0;
        }
        else if (arr[i] === "C" || arr[i] === "C") {
            average += 2.0;
        }
        else if (arr[i] === "C-" || arr[i] === "c-") {
            average += 2.0;
        };
    };
    console.log(`Your GPA is ${average}.`);
};

calculateGPA(["A", "b", "C"])