

var exercises = ["pullups","pushups","jogging","curls"]
var coreExercises = ["situps","planks"]

favExercises.onshow=function(){
        selExercises.clear()
        for (i = 0; i <= exercises.length - 1; i++) 
        selExercises.addItem(exercises[i])
        for (i = 0; i <= coreExercises.length - 1; i++) 
        selExercises.addItem(coreExercises[i])
}


btnSelect.onclick=function(){
        // text returned is an array of the text choices made by the user
        let choice = selExercises.value
        if (choice[0] == "situps" && choice[1] == "planks"){
        lblExercise.value = `You chose ${choice[0]} and ${choice[1]} - those are the two core exercises`
        }
      else
        lblExercise.value = `You did not choose the two core exercises`

}

btnNext3.onclick=function(){
  ChangeForm(mobileNav)
}
