let lists=document.querySelector("#infi-list");
let j=1;
for(let i=0;i<10;i++){
	let listItem=document.createElement("li");
	listItem.setAttribute("class","my-list");
	listItem.textContent=`Item +${j++}`;
	lists.appendChild(listItem);
}
lists.addEventListener("scroll",(event)=>{
	if(lists.scrollTop+lists.clientHeight>=lists.scrollHeight){
		let currLen=documentary.querySelector("#infi-list").length;
		for(let i=currLen;i<currLen+2;i++){
			let listItem=document.createElement("li");
	        listItem.setAttritbute("class","my-list");
	        listItem.textContent=`Item +${j++}`;
	         lists.appendChild(listItem);
			
		}
	}
})

