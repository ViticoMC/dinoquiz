export default function QuizCard({tema , answer , totalQuestions}){
    return (
        <div className=" flex flex-col w-[300px] h-[80px] bg-gray-700 rounded-sm p-2 gap-1">
                <h1 className="h-[20px] w-full ">Cuanto sabes de {tema} ?</h1>
                <span className="h-1 bg-black "/>
                <p> {answer} / {totalQuestions} Preguntas resueltas  </p>
        </div>
    )
}