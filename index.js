
let myArray = [];
const btnEl = document.getElementById("btn-el");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list-el");
const delBtnEl = document.getElementById("delBtn-el");
const saveTabeEl = document.getElementById("saveTab-el");

let leadFromLS = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadFromLS);

if (leadFromLS) {
    myArray = leadFromLS;
    render(myArray);
}


saveTabeEl.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myArray.push(tabs[0].url);
        localStorage.setItem("myleads", JSON.stringify(myArray));
        render(myArray);

    })

})



delBtnEl.addEventListener("dblclick", function () {
    myArray = [];
    localStorage.clear();
    render(myArray);
})


btnEl.addEventListener("click", function () {
    myArray.push(inputEl.value);
    inputEl.value = " ";
    localStorage.setItem("myLeads", JSON.stringify(myArray));
    render(myArray);
})


function render(leads) {
    let listItems = "";
    for (let i = 0; i < myArray.length; i++) {
        listItems += "<li> <a target='blank'  href='" + leads[i] + "' > " + leads[i] + " </a></li>";
    }
    listEl.innerHTML = listItems;
}

