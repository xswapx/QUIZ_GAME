import QuizLogo from '../assets/quiz-logo.png'

function Header(){
    return(
        <header>
            <img src={QuizLogo} alt='Image Loading' />
            <h1>React Quiz</h1>
        </header>
    );
}

export default Header;