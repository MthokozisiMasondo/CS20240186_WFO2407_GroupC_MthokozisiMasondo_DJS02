const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

try {
  // checking if both values are provided
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again"
    throw new Error("One of the input values is missing") 
  }

  // converting strings to numbers
  const dividendNumber = Number(dividend)
  const dividerNumber = Number(divider)

  // checking if one of the values is 0
  if (dividendNumber === 0 || dividerNumber === 0) {
    result.innerText = "Division not performed. Invalid number (0) provided. Try again"
    throw new Error("Invalid number (0) provided.")
  }
  
  // if the characters are not numbers, the program crashes and requires the user to reload the page
  if (isNaN(dividendNumber) || isNaN(dividerNumber)) {
    document.body.innerHTML = `<h1>Something critical went wrong. Please reload the page</h1>`
    throw new Error("User provided characters that are not numbers.")
  } 

  const divisionResults = Math.floor(dividendNumber / dividerNumber)
  result.innerText = divisionResults 

} catch (error) {
    console.error(error.message)
    console.error(error.stack)
}

});