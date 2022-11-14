const courses = ["  Machine Learning", "  Data Mining", "  Python", "  Digital Electronics", "  Web Development", "  Operating Systems", "  Data Structures", "  Design Thinking", "Psychology"];
const colours = ["french blue", "french blue", "french blue", "french blue", "french blue", "french blue", "french blue", "french blue", "french blue" ];
var speed = 70;

document.addEventListener("DOMContentLoaded", function(event) { 
  printCourses();
});

function printCourses(){
  var time1 = 2500;
  var time2 = time1+courses[0].length*speed+800;
  type("Our most popular courses are ", "t1");  
  
  for (let i = 0; i<20000 ; i++){
    setTimeout(function(){typeCourses(i%10);}, time1);
    setTimeout(function(){deleteCourses(i%10);}, time2);
    time1+=courses[i%10].length*2*speed+800;
    time2+=courses[i%10].length*speed + courses[(i+1)%10].length*speed+800;
  }
}

function typingAction(sentence, clicked_id){
  time3 = 0;
  time4 = time3+sentence.length*118;
  for(let j=0; j<2000; j++){
    setTimeout(function(){type(sentence, clicked_id)}, time3);
    setTimeout(function(){untype(sentence, clicked_id)}, time4);
    time3+=(sentence.length*118*2)+1000;
    time4+=(sentence.length*118*2)+1000;
  }
  
}

function type(sentence, clicked_id, i=0) {
  if (i < sentence.length) {
    document.getElementById(clicked_id).insertAdjacentHTML('beforeend', sentence.charAt(i));
    i++;
    setTimeout(function(){type(sentence, clicked_id, i)}, speed);
  }
}

function untype(sentence, clicked_id, i=0) {
  if (i < sentence.length) {
    document.getElementById(clicked_id).innerHTML = sentence.substring(0, sentence.length-i-1);
    i++;
    setTimeout(function(){untype(sentence, clicked_id, i)}, speed);
  }
}

function typeCourses(i, char_i=0){
  if (char_i < courses[i].length) {
    document.getElementById("t1").innerHTML += courses[i].charAt(char_i).fontcolor(colours[i]);
    char_i++;
    setTimeout(function(){typeCourses(i, char_i);}, speed);
  }
}

function deleteCourses(i, char_i=0){
  if (char_i < courses[i].length) {
    document.getElementById("t1").innerHTML = "The most popular courses are"+(courses[i].substring(0, (courses[i].length)-char_i-1));
    char_i++;
    setTimeout(function(){deleteCourses(i, char_i);}, speed);
  }
}
