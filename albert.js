var db;
window.onload = dateStuff();


function dateStuff()
{

}

function signedInHandler()
{
    document.getElementById("firebaseui-auth-container").style.display = "none";
    document.getElementById("signOutButton").removeAttribute("style");

    db = firebase.database().ref(currentUser.uid);

    db.child("input").orderByChild("time").limitToLast(10).on('value', function(snapshot){
        //firstRow

        var newHTML = "<div class='row'><div class='cell'>Item</div><div class='cell'>Amount</div><div class='cell'>Time</div><div class='cell'>Delete</div></div>";

        snapshot.forEach(function(entry){
            var myArray = entry.val().time.split("T");
            var currentDate = new Date().toLocaleDateString();
            var itemDate = new Date(myArray[0].replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$2/$3/$1")).toLocaleDateString();

            if (currentDate == itemDate)
            {

                var hours = myArray[1].slice(0, 2);
                var ampm = hours >= 12 ? "PM" : "AM";

                //newRow
                newHTML += "<div class='row'>";

                var prettyDate = itemDate + ", " + (hours % 12 || 12) + myArray[1].slice(2, 5) + " " + ampm;

                //cells
                newHTML += "<div class='cell'>" + entry.val().item + "</div>";
                newHTML += "<div class='cell'>" + entry.val().quantity + " oz" + "</div>";
                newHTML += "<div class='cell'>" + prettyDate + "</div>";
                newHTML += "<div class='cell'>" + 
                    "<input type='button' value='x' class='deleteButton' onclick='deleteEntry(\"input|" + entry.key + "\")'>" +
                    "</div>";
                //endRow
                newHTML += "</div>";
            }
        });

        document.getElementById("inputTable").innerHTML = newHTML;
    });

    db.child("output").orderByChild("time").limitToLast(10).on('value', function(snapshot){
        //firstRow

        var newHTML = "<div class='row'><div class='cell'>Item</div><div class='cell'>Amount</div><div class='cell'>Time</div><div class='cell'>Delete</div></div>";

        snapshot.forEach(function(entry){
            var myArray = entry.val().time.split("T");
            var currentDate = new Date().toLocaleDateString();
            var itemDate = new Date(myArray[0].replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$2/$3/$1")).toLocaleDateString();

            if (currentDate == itemDate)
            {

                var hours = myArray[1].slice(0, 2);
                var ampm = hours >= 12 ? "PM" : "AM";

                //newRow
                newHTML += "<div class='row'>";

                var prettyDate = itemDate + ", " + (hours % 12 || 12) + myArray[1].slice(2, 5) + " " + ampm;

                //cells
                newHTML += "<div class='cell'>" + entry.val().item + "</div>";
                newHTML += "<div class='cell'>" + entry.val().quantity + "</div>";
                newHTML += "<div class='cell'>" + prettyDate + "</div>";
                newHTML += "<div class='cell'>" + 
                    "<input type='button' value='x' class='deleteButton' onclick='deleteEntry(\"input|" + entry.key + "\")'>" +
                    "</div>";
                //endRow
                newHTML += "</div>";
            }
        });

        document.getElementById("outputTable").innerHTML = newHTML;
    });

    db.child("input").orderByChild("time").on('value', function(snapshot){
        //firstRow

        var newHTML = "<div class='row'><div class='cell'>Item</div><div class='cell'>Amount</div><div class='cell'>Time</div><div class='cell'>Delete</div></div>";

        snapshot.forEach(function(entry){
            var myArray = entry.val().time.split("T");
            var itemDate = new Date(myArray[0].replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$2/$3/$1")).toLocaleDateString();

            var hours = myArray[1].slice(0, 2);
            var ampm = hours >= 12 ? "PM" : "AM";

            //newRow
            newHTML += "<div class='row'>";

            var prettyDate = itemDate + ", " + (hours % 12 || 12) + myArray[1].slice(2, 5) + " " + ampm;

            //cells
            newHTML += "<div class='cell'>" + entry.val().item + "</div>";
            newHTML += "<div class='cell'>" + entry.val().quantity + " oz" + "</div>";
            newHTML += "<div class='cell'>" + prettyDate + "</div>";
            newHTML += "<div class='cell'>" + 
                "<input type='button' value='x' class='deleteButton' onclick='deleteEntry(\"input|" + entry.key + "\")'>" +
                "</div>";
            //endRow
            newHTML += "</div>";
        });

        document.getElementById("inputTableFull").innerHTML = newHTML;
    });

    db.child("output").orderByChild("time").on('value', function(snapshot){
        //firstRow

        var newHTML = "<div class='row'><div class='cell'>Item</div><div class='cell'>Amount</div><div class='cell'>Time</div><div class='cell'>Delete</div></div>";

        snapshot.forEach(function(entry){
            var myArray = entry.val().time.split("T");
            var itemDate = new Date(myArray[0].replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$2/$3/$1")).toLocaleDateString();


            var hours = myArray[1].slice(0, 2);
            var ampm = hours >= 12 ? "PM" : "AM";

            //newRow
            newHTML += "<div class='row'>";

            var prettyDate = itemDate + ", " + (hours % 12 || 12) + myArray[1].slice(2, 5) + " " + ampm;

            //cells
            newHTML += "<div class='cell'>" + entry.val().item + "</div>";
            newHTML += "<div class='cell'>" + entry.val().quantity + "</div>";
            newHTML += "<div class='cell'>" + prettyDate + "</div>";
            newHTML += "<div class='cell'>" + 
                "<input type='button' value='x' class='deleteButton' onclick='deleteEntry(\"input|" + entry.key + "\")'>" +
                "</div>";
            //endRow
            newHTML += "</div>";
        });

        document.getElementById("outputTableFull").innerHTML = newHTML;
    });

    db.child("output").orderByChild("time").on('value', function(snapshot){
        //firstRow

        var newHTML = "<div class='row'><div class='cell'>Item</div><div class='cell'>Amount</div><div class='cell'>Time</div><div class='cell'>Delete</div></div>";

        snapshot.forEach(function(entry){
            var myArray = entry.val().time.split("T");
            var itemDate = new Date(myArray[0].replace(/([0-9]{4})-([0-9]{2})-([0-9]{2})/, "$2/$3/$1")).toLocaleDateString();


            if (entry.val().item == "Poop")
            {

                var hours = myArray[1].slice(0, 2);
                var ampm = hours >= 12 ? "PM" : "AM";

                //newRow
                newHTML += "<div class='row'>";

                var prettyDate = itemDate + ", " + (hours % 12 || 12) + myArray[1].slice(2, 5) + " " + ampm;

                //cells
                newHTML += "<div class='cell'>" + entry.val().item + "</div>";
                newHTML += "<div class='cell'>" + entry.val().quantity + "</div>";
                newHTML += "<div class='cell'>" + prettyDate + "</div>";
                newHTML += "<div class='cell'>" + 
                    "<input type='button' value='x' class='deleteButton' onclick='deleteEntry(\"input|" + entry.key + "\")'>" +
                    "</div>";
                //endRow
                newHTML += "</div>";
            }
        });

        document.getElementById("outputTableNumber2").innerHTML = newHTML;
    });

}

function signedOutHandler()
{

}

function showInput()
{
    document.getElementById("inputModal").removeAttribute("style");
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("outputTable").style.display = "none";
    var currentTime = new Date();
    document.getElementById("inputTime").value = currentTime.getFullYear()+"-"+zeroPadded(currentTime.getMonth() + 1)+"-"+zeroPadded(currentTime.getDate())+"T"+zeroPadded(currentTime.getHours())+":"+zeroPadded(currentTime.getMinutes())+":"+zeroPadded(currentTime.getSeconds());
}

function showOutput()
{
    document.getElementById("outputModal").removeAttribute("style");
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("outputTable").style.display = "none";
    var currentTime = new Date();
    document.getElementById("outputTime").value = currentTime.getFullYear()+"-"+zeroPadded(currentTime.getMonth() + 1)+"-"+zeroPadded(currentTime.getDate())+"T"+zeroPadded(currentTime.getHours())+":"+zeroPadded(currentTime.getMinutes())+":"+zeroPadded(currentTime.getSeconds());
}

function saveInput()
{
    var item = document.getElementById("inputItem").value;
    var quantity = document.getElementById("inputQuantity").value;
    var time = document.getElementById("inputTime").value;

    console.log(time);
    if (time.indexOf("Z") != -1)
    {
        time = time.split("Z").join("");
    }
    console.log(time);

    db.child("input").push({
        item: item,
        quantity: quantity,
        time: time
    });

    closeModal();
}

function saveOutput()
{
    var item = document.getElementById("outputItem").value;
    var quantity = document.getElementById("outputQuantity").value;
    var time = document.getElementById("outputTime").value;

    db.child("output").push({
        item: item,
        quantity: quantity,
        time: time
    });

    closeModal();
}

function closeModal()
{
    var modals = document.getElementsByClassName("modal");

    for (var i = 0; i < modals.length; i++)
    {
        modals[i].style.display = "none";
    }
    document.getElementById("inputTable").removeAttribute("style");
    document.getElementById("outputTable").removeAttribute("style");
}

function deleteEntry(data)
{
    db.child(data.split("|")[0]).child(data.split("|")[1]).remove();
}

function showFullInput()
{
    document.getElementById("fullInput").removeAttribute("style");
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("outputTable").style.display = "none";
}

function showFullOutput()
{
    document.getElementById("fullOutput").removeAttribute("style");
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("outputTable").style.display = "none";
}


function showNumber2Output()
{
    document.getElementById("number2Output").removeAttribute("style");
    document.getElementById("inputTable").style.display = "none";
    document.getElementById("outputTable").style.display = "none";
}

function zeroPadded(val) {
    if (val >= 10)
        return val;
    else
        return '0' + val;
}