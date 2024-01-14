var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let n1=parseInt(date1.slice(-2,date1.length));
	let n2=parseInt(date2.slice(-2,date1.length));
	return n2-n1;
};

// Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));
