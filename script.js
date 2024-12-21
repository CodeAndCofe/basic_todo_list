const writeUp = document.querySelector("input");
const btn = document.querySelector("button");
const x = document.querySelector(".x");

// function to save our datat in localstorage

function saveData()
{
	localStorage.setItem("data", x.innerHTML);
}

// function to display our saved data

function dispaly_data()
{
	x.innerHTML = localStorage.getItem("data");
}
// function to create new child and add it to our list

function add_list(text)
{
	let new_list = document.createElement("li");
	new_list.innerHTML = text;
	x.appendChild(new_list);
	saveData();
}

//remove child if we cliked on it 
x.addEventListener("click", (e)=>
{
	let v = e.target;
	x.removeChild(v);
	saveData();
})

// main function to create new child and make new note
btn.addEventListener("click", () =>
{
	text = writeUp.value;
	writeUp.value = "";
	if (text != "")
		add_list(text);
	else
		alert("pliise try your best to make sure you field evething :)")
});

// load a saved data
dispaly_data();
