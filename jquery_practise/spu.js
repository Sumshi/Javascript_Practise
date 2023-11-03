// JavaScript code can be added to make the calendar interactive
document.addEventListener("DOMContentLoaded", function () {
    const months = document.querySelectorAll(".month");

    months.forEach((month) => {
        month.addEventListener("click", function () {
            alert(`You clicked on ${month.textContent}`);
        });
    });
});
