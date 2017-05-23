var howToUseTemplete ='<div class="howToUse-box">' +
        '<div class="howToUse-box-title">'+
            '<h1>%number%</h1>'+
        '</div>'+
        '<div class="howToUse-box-description">'+
            '<p>%description%</p>'+
        '</div>' +
        '<div class="howToUse-box-imgBox">' +
            '<img class="howToUse-box-imgBox-img" src="%imgSrc%">'+
        '</div>'+
    '</div>'

var quizTemplete = '<div class="quiz-box">'+
        '<div class="quiz-progress">'+
            '<h2>%number%/8</h2>'+
        '</div>'+
        '<h1>%quiz%</h1>'+
        '<ul class="answerList">%answer%</ul>'+
        '<button class="btn btn-question">NEXT</button>'+
    '</div>';

var resultTemplete = '<div class="result-box">'+
            '<h1>%type%</h1>'+
            '<h2>%content%</h2>'+
            '<ul class="recomandList">%recommandation%</ul>'+
        '</div>'