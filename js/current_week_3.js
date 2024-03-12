let current_date_1 = new Date();
let initial_date_1 = new Date("2024-03-01");
let final_date_1 = new Date("2024-03-31");

if (current_date_1 >= initial_date_1 && current_date_1 <= final_date_1) {
  document.getElementById("week_1").style.display = "block";
} else {
  document.getElementById("week_1").style.display = "none";
}

let current_date_2 = new Date();
let initial_date_2 = new Date("2024-03-29");
let final_date_2 = new Date("2024-04-28");
if (current_date_2 >= initial_date_2 && current_date_2 <= final_date_2) {
  document.getElementById("week_2").style.display = "block";
} else {
  document.getElementById("week_2").style.display = "none";
}

let current_date_3 = new Date();
let initial_date_3 = new Date("2024-04-29");
let final_date_3 = new Date("2024-05-26");
if (current_date_3 >= initial_date_3 && current_date_3 <= final_date_3) {
  document.getElementById("week_3").style.display = "block";
} else {
  document.getElementById("week_3").style.display = "none";
}

let current_date_4 = new Date();
let initial_date_4 = new Date("2024-05-27");
let final_date_4 = new Date("2024-06-30");
if (current_date_4 >= initial_date_4 && current_date_4 <= final_date_4) {
  document.getElementById("week_4").style.display = "block";
} else {
  document.getElementById("week_4").style.display = "none";
}
