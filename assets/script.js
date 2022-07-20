// Setting the current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// adding a listener for the click and grabbing the nearby siblings.
$(".saveBtn").click(
    function(event) {
        console.log(event)
        var buttonClicked = event.target;
        var inputField = buttonClicked.previousElementSibling;
        var inputValue = inputField.value;
        var time = inputField.previousElementSibling.textContent;
        // saving text into local storage. 
        localStorage.setItem(time, inputValue);
    }
)


function textInput() {
    var currentTime = moment().hour();
    // creating a loop checking the time blocks.
    description.each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);

        if (blockHour < currentTime) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (blockHour === currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}

textInput();




// var time = moment();
// console.log(time.format("hh"));
// $("").text(time.format("hh"));
// // Setting the function to check time every 5 minutes. 
// setInterval(function, 300000);

// Have function check time, if time is passed change color. 
// Use a for loop to check each time block. 
// Add something to prevent text being removed when page is refreshed. 
