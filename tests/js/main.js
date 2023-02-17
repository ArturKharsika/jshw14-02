let tests = [
    ['После зимы наступает весна?', true], 
    ['После пятницы наступает понедельник?', false,],
    ['Земля пятая планета от солнца?', false]
]

while (passtest = confirm('Желаете пройти тест?')) {
    let correctAnswers=0;
    for (let question = 0; question < tests.length; question++) {
        let userAnswer = confirm(tests[question][0]);
        if (userAnswer == tests[question][1]) {
            correctAnswers++;
        } else {
            correctAnswers--;
        }
    }

    if (correctAnswers > 0) {
        alert('Тест пройден! Правильных ответов:' + ' ' + correctAnswers);
        let tryAgain = confirm('Желаете пройти тест ещё раз?');
        if (tryAgain == false) {
            break;
        } else {

        }
    } else {
        alert('Тест не пройден. Слишком много неправильных ответов' + ' (' + correctAnswers + ')');
        break;
    }
}