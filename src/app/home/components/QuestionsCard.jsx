
export default function QuestionsCard({questions}){
    return (
        <article>
            {
                questions.preguntas.map((item, index)=>{
                    return(
                        <div key={index}>
                            <h1>{item.pregunta}</h1>
                            {
                                item.respuestas.map((res , index)=>{
                                  return(
                                    <p key={index}  className={` ${item.correcta-1 === index ? 'bg-green-400' : 'bg-red-600'}`}>{res}</p>
                                  )
                                })
                            }
                        </div>
                    )
                })
            }
        </article>
    )
}