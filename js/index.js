(function(){

    // -------------------- templete rendering ----------------------
    var i;
    var templeteString = "";
    var answerArray = [];

    var render_howToUse = function(){
        for(i = 0; i< howToUseDB.length; i++){
            var templete = howToUseTemplete;

            templete = templete.replace("%number%", howToUseDB[i].number);
            templete = templete.replace("%description%", howToUseDB[i].description);
            templete = templete.replace("%imgSrc%", howToUseDB[i].imgSrc);

            templeteString += templete;
        }

        $(".howToUse-container").append(templeteString);
        templeteString = "";
    }

    var render_quiz = function(num){
        var templete = quizTemplete;

        templete = templete.replace("%quiz%", 'Q' + Number(num+1) +'. ' + quizDB[num].question);
        templete = templete.replace("%number%", num+1);

        for(i = 0; i < quizDB[num].answer.length; i++){
            templeteString += '<li>' +
            '<input type="radio" name="quiz'+num +'" value='+ i +'>' +
            quizDB[num].answer[i]+'</li>';
        }



        templete = templete.replace("%answer%", templeteString);

        $('.coverPage-container').html(templete);
        $('input[value="0"]').attr('checked','checked');
        templeteString = "";


        //다음 퀴즈 버튼 실행 부분

        $('.btn-question').on('click', function(){
            var answer = $('input:checked').attr('value');
            nextQuiz(num, Number(answer));
        });
    }

    var nextQuiz = function(num, answer){
        answerArray.push(answer);

        if(num == quizDB.length-1){
            alert("모든 질문이 끝났습니다 결과를 확인하세요 ");
            render_result(answerArray);
        } else {
            render_quiz(++num);
        }
    }

    var render_result = function(answerArr){
        alert('알고리즘 미탑재로 인해 임시적으로 spring type으로 대치합니다');

        var answerO = {'a':0, 'b':0, 'c':0, 'd':0};
        for(i=0; i<answerArr.length;i++){
            var answer = answerArr[i];
            switch(answer){
                case 0 :
                    answerO['a']++;
                    break;
                case 1 :
                    answerO['b']++;
                    break;
                case 2 :
                    answerO['c']++;
                    break;
                case 3 :
                    answerO['d']++;
                    break;
                default :
                    break;
            }
        }

        alert("a :" + answerO['a'] + "번 b: " +  answerO['b'] + "번 c: " +  answerO['c'] + "번 d: " +  answerO['d'] + "번");

        var type = 'spring';
        var templete = resultTemplete;

        templete = templete.replace("%type%", type);
        templete = templete.replace("%content%", skinTypeDB[type].content);

        for(i=0; i<skinTypeDB[type].recommandation.length;i++){
            templeteString += '<li>' + skinTypeDB[type].recommandation[i] + '</li>';
        }

        templete = templete.replace("%recommandation%", templeteString);

        $('.coverPage-container').html(templete);
        templeteString = "";
    }

    // -------------------- exucute ----------------------

    $(".coverPage-container").css("padding-top", (585 - $(".coverPage-container").height()) /2);

    $('.btn-getStarted').on('click', function(){
        var $page = $(".coverPage");
        $page.css("height", $(window).height() - 50);
        $(".coverPage-buttonBox").remove();
        $(".coverPage-textBox").remove();
        $(".howToUse").remove();
        render_quiz(0);
    })

    render_howToUse();

})();