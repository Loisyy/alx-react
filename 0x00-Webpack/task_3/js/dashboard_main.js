import $ from "jquery";
import "../css/main.css";

$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - Holberton School</p>");
});

const updateCounter = () => {
  let times = $("#count").html() || 0;
  $("button").on("click", () => {
    times++;
    $("#count").html(`${times} clicks on the button`);
  });
};

const debouncedUpdateCounter = _.debounce(updateCounter, 500);
debouncedUpdateCounter();
