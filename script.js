function openFeature() {
    let allElems = document.querySelectorAll(".elem")
    let allFullElems = document.querySelectorAll(".fullElems");
    let allBackBtn = document.querySelectorAll(".fullElems .back")

    allElems.forEach(function (val) {

        val.addEventListener("click", function () {
            allFullElems[val.id].style.display = "block"
        })

    })

    allBackBtn.forEach(function (btn) {
        console.log(btn.id);
        btn.addEventListener("click", function () {
            console.log(`${btn.id} is clicked`);
            allFullElems[btn.id].style.display = "none"

        })

    })
}

openFeature()
let form = document.querySelector("form");
let input = document.querySelector("input");
let texarea = document.querySelector("textarea");
let taskHeading = document.querySelector("#heading");
console.log(form);

form.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(input.value);
    console.log(texarea.value);
    taskHeading.textContent = `${input.value}`
    
    
})

