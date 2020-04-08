function sandwichCalculator(slicesOfBread, slicesOfCheese){
    //# of possible sandwiches 
    var sandwiches = Math.floor(slicesOfBread / 2);

    //1 sandwich requires 2 slices of bread and 1 slice of cheese
	if ((slicesOfBread > 1) && (slicesOfCheese > 0) && (slicesOfCheese < sandwiches)) {
		sandwiches = slicesOfCheese;
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese >= sandwiches) && (slicesOfBread > 1)) {
		console.log(sandwiches);
		return sandwiches;
	} else if ((slicesOfCheese = 0) || (slicesOfBread < 2)) {
		console.log("Oops, no sandwiches for you.");
		return 0;
	}

}

sandwichCalculator(4,1);