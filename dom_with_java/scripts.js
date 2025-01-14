// example 1
document.getElementById("changeTextButton")
.addEventListener("click",function (){
    let data= document.getElementById("myParagraph")
    data.textContent="Paragraph is changed"
    data.style.fontWeight="bold";
    data.style.padding="4px"
    data.style.backgroundColor="yellow"
    data.style.color="black"
});

// example 2

document.getElementById("highlightFirstCity").
addEventListener("click",function(){
    let cities_list = document.getElementById("citiesList")
    cities_list.firstElementChild.classList.toggle("highlight")
    cities_list.lastElementChild.classList.add("highlight")
    cities_list.lastElementChild.style.padding="5px"
})

// example 3
document.getElementById("changeOrder")
.addEventListener("click",function(){
    let coffee_type= document.getElementById("coffeeType")
    coffee_type.textContent="Espresso"
})

// example 4
document.getElementById("addNewItem")
.addEventListener("click",function(){
    /// fIRST Create a new li
    let new_item = document.createElement('li')
    new_item.textContent = "Eggs"
    document.getElementById("shoppingList")
    .appendChild(new_item)
})

// example 5
document.getElementById("removeLastTask")
.addEventListener("click",function(){
    let task_id = document.getElementById("taskList")
    task_id.lastElementChild.remove()
    

})

// Example 6
document.getElementById("clickMeButton")
.addEventListener("click",function(){
    let text = document.getElementById("h2_eventHandel")
    text.textContent="Event handled by the Prashant Singh"
    text.style.backgroundColor="gray"
})

// example 7
document.getElementById("teaList").addEventListener("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
      alert("You selected: " + event.target.textContent);
    }
  });

// example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feedback is: ${feedback}`;
  });



// example 9

document.addEventListener("DOMContentLoaded" , function() {
    document.getElementById("domStatus").textContent = "Dom fully Loaded";
});


// example 10

document.getElementById("toggleHighlight")
.addEventListener("click",function () {
    let desc = document.getElementById("descriptionText");
    
    
    desc.classList.toggle("highlight");

});

