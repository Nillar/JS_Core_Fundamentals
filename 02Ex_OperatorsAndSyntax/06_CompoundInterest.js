function compoundInterest([principalSum, interestRate, nCompoundPeriod, time]) {
    let interest = interestRate  / 100;
    let n = 12 / nCompoundPeriod;
    let result = principalSum * Math.pow(1 + interest / n, n * time);

    console.log(result.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);