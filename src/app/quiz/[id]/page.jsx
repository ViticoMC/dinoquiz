"use client";

import { useState, useEffect } from "react";
import { useRouter  , useParams} from "next/navigation";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Progress } from "../../../components/ui/progress";
import { ArrowLeft, Clock, HelpCircle, Home } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { getQuestions } from "../../utils/getQuestions";

// Datos de ejemplo para el quiz


export default function QuizPage({ params }) {
  const router = useRouter();
  const {id} = useParams()

  const quizData = {
    title: id,
    questions: getQuestions(id) || [],
    timePerQuestion: 30, // segundos por pregunta
  };
   // ID del quiz (no se utiliza en este ejemplo)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timer, setTimer] = useState(quizData.timePerQuestion);
  const [answers, setAnswers] = useState(
    Array(quizData.questions.length).fill(null)
  );

  const currentQuestion = quizData.questions[currentQuestionIndex];
  const progress =
    ((currentQuestionIndex + 1) / quizData.questions.length) * 100;

    

  useEffect(() => {
    // Reiniciar el temporizador cuando cambia la pregunta
    setTimer(quizData.timePerQuestion);

    // Configurar el temporizador
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(countdown);
          // Si se acaba el tiempo, avanzar a la siguiente pregunta
          if (
            currentQuestionIndex < quizData.questions.length - 1 &&
            !selectedAnswer
          ) {
            setTimeout(() => {
              handleNextQuestion();
            }, 1000);
          } else if (
            currentQuestionIndex === quizData.questions.length - 1 &&
            !selectedAnswer
          ) {
            finishQuiz();
          }
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [currentQuestionIndex, selectedAnswer]);

  const handleAnswerSelect = (answer) => {
    if (selectedAnswer) return; // Evitar seleccionar múltiples respuestas

    setSelectedAnswer(answer);

    // Actualizar las respuestas
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = answer;
    setAnswers(newAnswers);

    // Actualizar la puntuación
    if (answer === currentQuestion.options[currentQuestion.correctAnswer-1]) {
      setScore((prevScore) => prevScore + 1);
    }

    // Avanzar a la siguiente pregunta después de un breve retraso
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setTimeout(() => {
        handleNextQuestion();
      }, 1500);
    } else {
      setTimeout(() => {
        finishQuiz();
      }, 1500);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const finishQuiz = () => {
    setShowResult(true);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setAnswers(Array(quizData.questions.length).fill(null));
  };

  const getOptionClass = (option) => {
    if (!selectedAnswer) return "bg-card hover:bg-accent";

    if (option === currentQuestion.options[currentQuestion.correctAnswer-1]) {
      return "bg-green-100 border-green-500 dark:bg-green-900 dark:border-green-600";
    }

    if (
      option === selectedAnswer &&
      selectedAnswer !== currentQuestion.options[currentQuestion.correctAnswer-1]
    ) {
      return "bg-red-100 border-red-500 dark:bg-red-900 dark:border-red-600";
    }

    return "bg-card opacity-50";
  };

  if (showResult) {
    return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b bg-background">
          <div className="flex h-16 items-center px-4 md:px-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push("/home")}
            >
              <Home className="h-5 w-5" />
              <span className="sr-only">Inicio</span>
            </Button>
            <h1 className="ml-4 text-xl font-bold">{quizData.title}</h1>
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center p-4 md:p-8">
          <Card className="mx-auto w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Resultados del Quiz
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">
                  {score} / {quizData.questions.length}
                </p>
                <p className="text-muted-foreground">Respuestas correctas</p>
              </div>

              <div className="space-y-4 mt-8">
                {quizData.questions.map((q, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <p className="font-medium mb-2">
                      {index + 1}. {q.question}
                    </p>
                    <div className="flex items-center text-sm">
                      <span className="font-semibold mr-2">Tu respuesta:</span>
                      
                      <span
                        className={
                          answers[index] === (q.options[q.correctAnswer-1])
                            ? "text-green-600 dark:text-green-400"
                            : "text-red-600 dark:text-red-400"
                        }
                      >
                        {answers[index] || "Sin respuesta"}
                      </span>
                    </div>
                    <div className="flex items-center text-sm mt-1">
                      <span className="font-semibold mr-2">
                        Respuesta correcta:
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        {q.correctAnswer}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => router.push("/home")}>
                Volver al inicio
              </Button>
              <Button onClick={restartQuiz}>Reintentar Quiz</Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 md:px-6">
          <Button variant="ghost" size="icon" onClick={() => router.push("/home")}>
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Button>
          <h1 className="ml-4 text-xl font-bold">{quizData.title}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{timer}s</span>
            </Badge>
          </div>
        </div>
        <Progress value={progress} className="h-1 rounded-none" />
      </header>
      <main className="flex flex-1 flex-col p-4 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Pregunta {currentQuestionIndex + 1} de {quizData.questions.length}
          </div>
        </div>
        <Card className="mx-auto w-full max-w-2xl">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQuestion?.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {currentQuestion?.options?.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`justify-start h-auto p-4 text-left ${getOptionClass(
                    option
                  )}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border mr-4">
                      {String.fromCharCode(65 + index)}
                    </div>
                    {option}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <HelpCircle className="h-4 w-4" />
                <span className="sr-only">Ayuda</span>
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  if (currentQuestionIndex < quizData.questions.length - 1) {
                    handleNextQuestion();
                  } else {
                    finishQuiz();
                  }
                }}
                disabled={
                  currentQuestionIndex === quizData.questions.length - 1
                }
              >
                Saltar
              </Button>
            </div>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
