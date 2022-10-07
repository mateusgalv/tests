const printUpCaseMessage = (string) => {
	console.log(string)
}

const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('OI, EU SoU o GoKu!', printUpCaseMessage)