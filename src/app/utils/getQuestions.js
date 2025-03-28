

export   function getQuestions(id){
    try{
        const  questions = require(`../questions/${id}.json`)
        return questions.questions
    }catch(e){
        console.log(e)
        return null
    }
   
}