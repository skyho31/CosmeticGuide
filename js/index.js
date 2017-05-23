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
            '<input type="radio" name="quiz'+num +'" value="'+ i +'"">' +
            quizDB[num].answer[i]+'</li>';
        }

        templete = templete.replace("%answer%", templeteString);

        $('.coverPage-container').html(templete);
        //hold_center();
        templeteString = "";



        //다음 퀴즈 버튼 실행 부분

        $('.btn-question').on('click', function(){
            if($('input:checked') == undefined)
                alert("선택지를 골라주세요")
            else{
                var answer = $('input:checked').attr('value');
                nextQuiz(num, Number(answer));
            }
        });
    }

    var nextQuiz = function(num, answer){
        answerArray.push(answer);
        console.log(answerArray);

        if(num == quizDB.length-1){
            //alert("모든 질문이 끝났습니다 결과를 확인하세요 ");
            render_result(answerArray);
        } else {
           render_quiz(++num);
        }
    }

    var render_result = function(answerArr){
        //alert('알고리즘 미탑재로 인해 임시적으로 spring type으로 대치합니다');

        var type = 'spring';
        var templete = resultTemplete;

        templete = templete.replace("%type%", type);
        templete = templete.replace("%content%", skinTypeDB[type].content);

        for(i=0; i<skinTypeDB[type].recommandation.length;i++){
            templeteString += '<li>' + skinTypeDB[type].recommandation[i] + '</li>';
        }

        templete = templete.replace("%recommandation%", templeteString);

        console.log(templete);
        $('.coverPage-container').html(templete);
        //hold_center();

        templeteString = "";
    }


    var hold_center = function(){
        $('.coverPage-container').css("padding-top", (winHeight - $('.coverPage-container').height() - 50)/2);
    }


    // -------------------- layout ----------------------

    var outerHeight = 585;
    var coverHeight = $(".coverPage-container").height();
    var winHeight = $(window).height();



    $(".coverPage-container").css("padding-top", (outerHeight - coverHeight) /2);

    $('.btn-getStarted').on('click', function(){
        var $page = $(".coverPage");
        $page.css("height", winHeight - 50);
        $(".coverPage-buttonBox").remove();
        $(".coverPage-textBox").remove();
        $(".howToUse").remove();
        render_quiz(0);
    })


    // -------------------- exucute ----------------------
    render_howToUse();

})();