import QuestionHeader from './QuestionHeader'
import { Card } from './ui/Card'
QuestionHeader

const QuestionView = ({
  q,
  currentQuestion,
  totalQuestions,
  selectedAnswer,
  onAnswer,
  timeLeft,
  dispatch
}) => {
  return (
    <Card>
      <QuestionHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        timeLeft={timeLeft}
      />
    </Card>
  )
}

export default QuestionView
