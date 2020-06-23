
import React from 'react';
import ReactDOM from 'react-dom';

//this function hides and reveals the add note form
function display(){
	
  var x = document.getElementById("row-1");
  var y = document.getElementById("addbtn");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.innerHTML="Add";
  } else {
    x.style.display = "block";
    y.innerHTML="Hide";
  }
};

var counter = 2;

//add the note
function addnote(event){
	event.preventDefault();

	console.log("fxn 2");
	var noteDiv = document.getElementById("note");

	counter = counter + 1;

	var node = document.createElement("DIV");                	
	node.className="row-" + counter;		
	node.id="row-" + counter;			// Create a <div> node with the note
	colourchoice(node);

	var textnode = document.createTextNode(document.getElementById("notetext").value);
	node.appendChild(textnode); 

	//create the delete button
	var btn = document.createElement("BUTTON");
	btn.innerHTML="Delete";
	btn.id= "delrow-" + counter;

 //Rxjs for delete
 DeleteClick = Rx.Observable.fromEvent(btn,"click");
 DeleteClick.subscribe(() => deleteNote(btn.id,node.id));

//create the edit button
	var btn2 = document.createElement("BUTTON");
	btn2.innerHTML="Edit";
	btn2.id="edrow-" + counter;
	console.log(btn.id);

//Rxjs for edit
EditbtnClick = Rx.Observable.fromEvent(btn2,"click");
EditbtnClick.subscribe(() => editnote(btn2.id, node.id));

// Append the text to <div>
	noteDiv.appendChild(node); 
	node.appendChild(btn);
	node.appendChild(btn2);
	console.log("append");

};

function colourchoice(nodeid){
	
	var colourId = document.getElementById("color");//get the chosen color
	console.log(colourId.value);
	colorchosesn = colourId.value
	nodeid.style.backgroundColor = colorchosesn;//change color doesnt cause it to delete adding text does why?
}



function deleteNote(delbtn,noteid) {
  
  console.log(delbtn, noteid);
  var note = document.getElementById(noteid);
  note.parentNode.removeChild(note);
}

function editnote(editbtn,noteid){
		console.log("edit fxn", noteid);
		var NoteToEdit = document.getElementById(noteid);
		NoteToEdit.contentEditable = true;
	};

