//your JS code here. If required.
let items = document.querySelectorAll(".grid-item");
let submit = document.getElementById("change_button");
let reset = document.getElementById("reset_button");

submit.addEventListener("click",()=>{
	items.forEach((cell)=>{
		cell.style.backgroundColor ="transparent";
	});
	let block = document.getElementById('block_id').value;
	let color = document.getElementById('colour_id').value;

	let changeCell = document.getElementById(`${block}`)
	changeCell.style.backgroundColor = color;
})


reset.addEventListener("click",()=>{
	items.forEach((cell)=>{
		cell.style.backgroundColor ="transparent";
	});
	});