let current_date_1 = new Date();
let initial_date_1 = new Date("2024-03-11");
let final_date_1 = new Date("2024-03-17");

if (current_date_1 >= initial_date_1 && current_date_1 <= final_date_1) {
  document.getElementById("week_1").style.display = "block";
} else {
  document.getElementById("week_1").style.display = "none";
}

let current_date_2 = new Date();
let initial_date_2 = new Date("2024-03-18");
let final_date_2 = new Date("2024-03-24");
if (current_date_2 >= initial_date_2 && current_date_2 <= final_date_2) {
  document.getElementById("week_2").style.display = "block";
} else {
  document.getElementById("week_2").style.display = "none";
}

let current_date_3 = new Date();
let initial_date_3 = new Date("2024-03-25");
let final_date_3 = new Date("2024-03-31");
if (current_date_3 >= initial_date_3 && current_date_3 <= final_date_3) {
  document.getElementById("week_3").style.display = "block";
} else {
  document.getElementById("week_3").style.display = "none";
}

let current_date_4 = new Date();
let initial_date_4 = new Date("2024-03-25");
let final_date_4 = new Date("2024-03-31");
if (current_date_4 >= initial_date_4 && current_date_4 <= final_date_4) {
  document.getElementById("week_4").style.display = "block";
} else {
  document.getElementById("week_4").style.display = "none";
}
