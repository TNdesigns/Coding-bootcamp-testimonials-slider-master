document.addEventListener("DOMContentLoaded", function() {
    const b1 = document.getElementById("b1");
    const b2 = document.getElementById("b2");
    const tm1 = document.getElementById("tm1");
    const tm2 = document.getElementById("tm2");

    let isTm1Visible = true;

    b2.addEventListener("click", function() {
        if (isTm1Visible) {
            // Hide tm1 and show tm2
            tm1.style.display = "none";
            tm2.style.display = "flex";
            isTm1Visible = false;
        } else {
            // Hide tm2 and show tm1
            tm2.style.display = "none";
            tm1.style.display = "flex";
            isTm1Visible = true;
        }
    });

    b1.addEventListener("click", function() {
        if (isTm1Visible) {
            // Hide tm1 and show tm2
            tm1.style.display = "none";
            tm2.style.display = "flex";
            isTm1Visible = false;
        } else {
            // Hide tm2 and show tm1
            tm2.style.display = "none";
            tm1.style.display = "flex";
            isTm1Visible = true;
        }
    })
})