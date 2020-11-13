var selectedDay;
$(document).ready(function() {


    selectedDay = $(radio).checked;
    if (selectedDay === "monday") {
        switch (selectedDay) {
            case "monday":
                $("#event").text("Work")
                $("#time").text("11:00 PM - 7:30 AM")
        }
    }
});