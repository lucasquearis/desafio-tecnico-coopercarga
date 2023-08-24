class DoSomething {
  static main(args) {
    let M = 1000;
    let RR = 50;
    let CC = 4;
    let ORDMAX = 30;
    let P = Array(M + 1).fill(0);
    let PAGENUMBER = 0;
    let PAGEOFFSET = 0;
    let ROWOFFSET = 0;
    let C = 0;
    let J = 0;
    let K = 0;
    let ITIS = false;
    let ORD = 0;
    let SQUARE = 0;
    let N = 0;
    let MULT = Array(ORDMAX + 1).fill(0);
    J = 1;
    K = 1;
    P[1] = 2;
    ORD = 2;
    SQUARE = 9;
    while (K < M) {
      do {
        J += 2;
        if (J == SQUARE) {
          ORD++;
          SQUARE = P[ORD] * P[ORD];
          MULT[ORD - 1] = J;
        }
        N = 2;
        ITIS = true;
        while (N < ORD && ITIS) {
          while (MULT[N] < J) {
            MULT[N] += P[N] + P[N];
          }
          if (MULT[N] == J) {
            ITIS = false;
          }
          N++;
        }
      } while (!ITIS);
      K++;
      P[K] = J;
    }
    PAGENUMBER = 1;
    PAGEOFFSET = 1;
    while (PAGEOFFSET <= M) {
      console.log("Page ", PAGENUMBER);
      for (
        ROWOFFSET = PAGEOFFSET;
        ROWOFFSET <= PAGEOFFSET + RR - 1;
        ROWOFFSET++
      ) {
        let aux = [];
        for (C = 0; C <= CC - 1; C++) {
          if (ROWOFFSET + C * RR <= M) {
            aux.push(P[ROWOFFSET + C * RR]);
          }
        }
        console.log(aux.join("|"));
      }
      PAGENUMBER++;
      PAGEOFFSET += RR * CC;
    }
  }

  static buildPrimeNumbers({ baseLimiter }) {
    let primeNumbers = Array(baseLimiter + 1).fill(0);
    primeNumbers[1] = 2;
    let ORD = 2;
    let squarePrimeNumber = 9;
    let indexLoopValidateIsPrime = 1;
    let ORDMAX = 30;
    let MULT = Array(ORDMAX + 1).fill(0);
    let currentValidateNumber = 1;
    let indexLoopMultiplesPrime = 0;
    let isPrime = false;

    while (indexLoopValidateIsPrime < baseLimiter) {
      do {
        currentValidateNumber += 2;
        if (currentValidateNumber == squarePrimeNumber) {
          ORD++;
          squarePrimeNumber = primeNumbers[ORD] * primeNumbers[ORD];
          MULT[ORD - 1] = currentValidateNumber;
        }
        indexLoopMultiplesPrime = 2;
        isPrime = true;
        while (indexLoopMultiplesPrime < ORD && isPrime) {
          while (MULT[indexLoopMultiplesPrime] < currentValidateNumber) {
            MULT[indexLoopMultiplesPrime] +=
              primeNumbers[indexLoopMultiplesPrime] +
              primeNumbers[indexLoopMultiplesPrime];
          }
          if (MULT[indexLoopMultiplesPrime] == currentValidateNumber) {
            isPrime = false;
          }
          indexLoopMultiplesPrime++;
        }
      } while (!isPrime);
      indexLoopValidateIsPrime++;
      primeNumbers[indexLoopValidateIsPrime] = currentValidateNumber;
    }
    return primeNumbers;
  }

  static printPrimeNumbersPages({
    baseLimiter,
    rowLength,
    colLength,
    primeNumbers,
  }) {
    let rowOffset = 0;
    let PAGENUMBER = 1;
    let PAGEOFFSET = 1;
    let indexColumn = 0;

    while (PAGEOFFSET <= baseLimiter) {
      console.log("Page ", PAGENUMBER);
      for (
        rowOffset = PAGEOFFSET;
        rowOffset <= PAGEOFFSET + rowLength - 1;
        rowOffset++
      ) {
        let auxiliaryList = [];
        for (indexColumn = 0; indexColumn <= colLength - 1; indexColumn++) {
          if (rowOffset + indexColumn * rowLength <= baseLimiter) {
            auxiliaryList.push(
              primeNumbers[rowOffset + indexColumn * rowLength]
            );
          }
        }
        console.log(auxiliaryList.join("|"));
      }
      PAGENUMBER++;
      PAGEOFFSET += rowLength * colLength;
    }
  }

  static primesDictionary({ colLength, rowLength, baseLimiter = 1000 }) {
    const primeNumbers = this.buildPrimeNumbers({ baseLimiter });

    this.printPrimeNumbersPages({
      baseLimiter,
      rowLength,
      colLength,
      primeNumbers,
    });
  }
}

DoSomething.primesDictionary({ colLength: 4, rowLength: 50 });
// DoSomething.main();
