(function(){

    var outerHeight = 585;
    var coverHeight = $(".coverPage-container").height();
    var winHeight = $(window).height();

    //가운데 중심 잡기
    $(".coverPage-container").css("padding-top", (outerHeight - coverHeight) /2);

    $('.btn-getStarted').on('click', function(){
        var $page = $(".coverPage");

        //$page.css("background", "white");
        //$page.css("color", "white");
        $page.css("height", winHeight - 50);
        $(".coverPage-buttonBox").fadeOut();
        $(".coverPage-textBox").fadeOut();
        $(".howToUse").fadeOut();
    })

})();

