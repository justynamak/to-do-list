const form = document.querySelector(".tasks");
const ul = document.querySelector("ul");
const input = document.querySelector(".tasks > input");
const searchBtn = document.querySelector(".search > button");
const searchInput = document.querySelector(".search > input");
const tasks = [];


const removeElement = (e) =>{
//	e.target.parentNode.remove();
	const key = e.target.dataset.key;
	tasks.splice(key,1);
	console.log(tasks);
	
	ul.innerHTML = "";
	
	tasks.forEach((li,key) =>{
		li.dataset.key = key;
		ul.appendChild(li);
	});
};

const addTask = (e) =>{
	
	e.preventDefault();	
	let inputVal = input.value.toLowerCase();
	if(inputVal === "") return;
	const task = document.createElement("li");
	task.innerHTML = inputVal + " <button class=\"remove\">-</button";	
	ul.appendChild(task);
	tasks.push(task);
	input.value = "";
	
	tasks.forEach((li,key) =>{
		li.dataset.key = key;
	});
	
	ul.innerHTML = "";
	
	tasks.forEach((li) =>{		
		ul.appendChild(li);
	});
	
	document.querySelectorAll(".remove").forEach(btn =>{
		btn.addEventListener("click", removeElement);
	});
};

const searchTask = (e) =>{
		const inputVal = searchInput.value.toLowerCase();
		e.preventDefault();
		ul.innerHTML = "";		
		const search = tasks.filter(task => task.textContent.includes(inputVal));
	
		search.forEach((result) =>{
				ul.appendChild(result);
		});
		
};


form.addEventListener("submit", addTask);
searchInput.addEventListener("input", searchTask);
