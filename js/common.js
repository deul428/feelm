var userAgent = navigator.userAgent.toLowerCase();
if(userAgent.indexOf('edge')>-1){
    $("html").addClass("edge");
}else if(userAgent.indexOf('whale')>-1){
    $("html").addClass("whale");
}else if(userAgent.indexOf('chrome')>-1){
    $("html").addClass("chrome");
}else if(userAgent.indexOf('firefox')>-1){
    $("html").addClass("firefox");
}else{
    $("html").addClass("ie");
}

$.fn.preload = function(){
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var preload_path = "img/"; 
$([ preload_path+"visual_large.jpg",
    preload_path+"visual_medium.jpg",
    preload_path+"visual_small.jpg",
    preload_path+"visual_logo.png",

    preload_path+"ad/img_ad.jpg",
    preload_path+"ad/img_ad_medium.jpg",

    preload_path+"artist/actors_01_LeonardoDicaprio.jpg",
    preload_path+"artist/actors_02_TomHolland.jpg",
    preload_path+"artist/actors_03_BenedictCumberbatch.jpg",
    preload_path+"artist/actors_04_AnneHathaway.jpg",
    preload_path+"artist/actors_05_EmmaStone.jpg",
    preload_path+"artist/actors_06_TildaSwinton.jpg",
    
    preload_path+"artist/directors_01_BongJoonHo.jpg",
    preload_path+"artist/directors_02_AriAster.jpg",
    preload_path+"artist/directors_03_MichelGondry.jpg",
    preload_path+"artist/directors_04_CelineSciamma.jpg",
    preload_path+"artist/directors_05_StevenSpielberg.jpg",
    preload_path+"artist/directors_06_TimBurton.jpg",

    preload_path+"collections/collection_01.jpg",
    preload_path+"collections/collection_02.jpg",
    preload_path+"collections/collection_03.jpg",

    preload_path+"logo/ci_disney.png",
    preload_path+"logo/ci_netflix.png",
    preload_path+"logo/ci_pv.png",
    preload_path+"logo/ci_watcha.png",
    preload_path+"logo/icon_disneyplus.png",
    preload_path+"logo/icon_netflix.svg",
    preload_path+"logo/icon_prime_video.png",
    preload_path+"logo/icon_watcha.jpg",

    preload_path+"top10/d/poster_01.jpg",
    preload_path+"top10/d/poster_02.jpg",
    preload_path+"top10/d/poster_03.jpg",
    preload_path+"top10/d/poster_04.jpg",
    preload_path+"top10/d/poster_05.jpg",
    preload_path+"top10/d/poster_06.jpg",
    preload_path+"top10/d/poster_07.jpg",
    preload_path+"top10/d/poster_08.jpg",
    preload_path+"top10/d/poster_09.jpg",
    preload_path+"top10/d/poster_10.jpg",

    preload_path+"top10/w/poster_01.jpg",
    preload_path+"top10/w/poster_02.jpg",
    preload_path+"top10/w/poster_03.jpg",
    preload_path+"top10/w/poster_04.jpg",
    preload_path+"top10/w/poster_05.jpg",
    preload_path+"top10/w/poster_06.jpg",
    preload_path+"top10/w/poster_07.jpg",
    preload_path+"top10/w/poster_08.jpg",
    preload_path+"top10/w/poster_09.jpg",
    preload_path+"top10/w/poster_10.jpg",

    preload_path+"top10/n/poster_01.jpg",
    preload_path+"top10/n/poster_02.jpg",
    preload_path+"top10/n/poster_03.jpg",
    preload_path+"top10/n/poster_04.jpg",
    preload_path+"top10/n/poster_05.jpg",
    preload_path+"top10/n/poster_06.jpg",
    preload_path+"top10/n/poster_07.jpg",
    preload_path+"top10/n/poster_08.jpg",
    preload_path+"top10/n/poster_09.jpg",
    preload_path+"top10/n/poster_10.jpg",

    preload_path+"top10/p/poster_01.jpg",
    preload_path+"top10/p/poster_02.jpg",
    preload_path+"top10/p/poster_03.jpg",
    preload_path+"top10/p/poster_04.jpg",
    preload_path+"top10/p/poster_05.jpg",
    preload_path+"top10/p/poster_06.jpg",
    preload_path+"top10/p/poster_07.jpg",
    preload_path+"top10/p/poster_08.jpg",
    preload_path+"top10/p/poster_09.jpg",
    preload_path+"top10/p/poster_10.jpg",

    preload_path+"watching/d/thumbnail_01.jpg",
    preload_path+"watching/d/thumbnail_02.jpg",
    preload_path+"watching/d/thumbnail_03.jpg",
    preload_path+"watching/d/thumbnail_04.jpg",
    preload_path+"watching/d/thumbnail_05.jpg",
    preload_path+"watching/d/thumbnail_06.jpg",
    
    preload_path+"watching/w/thumbnail_01.jpg",
    preload_path+"watching/w/thumbnail_02.jpg",
    preload_path+"watching/w/thumbnail_03.jpg",
    preload_path+"watching/w/thumbnail_04.jpg",
    preload_path+"watching/w/thumbnail_05.jpg",
    preload_path+"watching/w/thumbnail_06.jpg",

    preload_path+"watching/n/thumbnail_01.jpg",
    preload_path+"watching/n/thumbnail_02.jpg",
    preload_path+"watching/n/thumbnail_03.jpg",
    preload_path+"watching/n/thumbnail_04.jpg",
    preload_path+"watching/n/thumbnail_05.jpg",
    preload_path+"watching/n/thumbnail_06.jpg",

    preload_path+"watching/p/thumbnail_01.jpg",
    preload_path+"watching/p/thumbnail_02.jpg",
    preload_path+"watching/p/thumbnail_03.jpg",
    preload_path+"watching/p/thumbnail_04.jpg",
    preload_path+"watching/p/thumbnail_05.jpg",
    preload_path+"watching/p/thumbnail_06.jpg",
]).preload();


$(window).load(function(){
    setTimeout(function(){
        //loading cover
        $(".loading_cover").fadeOut(1000, function(){ //1000ms동안 페이드아웃
            setTimeout(function(){ //타이머 만료 시 실행할 함수
                $("html").removeClass("loading_cover");
            }, 3000); 
        });
    }, 1500); 
});

$(function(){
    // ================ header scroll easing ================
    $(document).on('click', 'a[href^="#"]', function (event) {
        var scroll_margin = 0;
        event.preventDefault();
        $("html,body").stop().animate({
            scrollTop: $($.attr(this, 'href')).offset().top - scroll_margin
        }, 2000,'easeInOutCubic');
    });
    
    // ================ nav open btn toggle ================
    $("#header .width_con .btn_open_nav").click(function(){
        $("body").toggleClass("open_nav");
    });

    // ================ brand_con 제어 ================
    var selected_tab,
        $tabs_box_con,
        slick_data;

    //로딩 시 초기값
    viewBrand("n", false, $("#top10 .box_con"), [1200, 810, 480]);
    viewBrand("n", false, $("#watching .box_con"), [1000, 480]);
    contents();

    $(".brand_con .btn").each(function(){ //brand_con btn마다
        $(this).click(function(){ //클릭할 때 실행하라
            $tabs_box_con = $(this).parents(".width_con").find(".box_con"); //해당 버튼의 부모인 .width_con에서 .box_con을 찾아 변수에 저장하라 
            slick_data = $tabs_box_con.attr("data-view-count").split("@"); //responsive data handling

            $(this).parent(".brand_con").find(".btn").removeClass("selected"); //this 객체의 부모 클래스(.brand_con)에서 .btn 클래스를 찾아 제거하라
            $(this).addClass("selected"); //현재 눌린 탭 콘에 selected 클래스 할당
            selected_tab = $(this).attr("class").replace(/btn/g,"").replace(/selected/g,"").trim(); //필요한 클래스 제외한 모든  텍스트 제거, n, w, p, d만 남김 

            viewBrand(selected_tab, true, $tabs_box_con, slick_data); //viewBrand()에 파라미터를 던져 줌
        });
    });

});
//해당 브랜드의 콘텐츠들을 보여 줌
function viewBrand(brand, un, $selected_box_con, slick_viewport){
    var $what_section = $selected_box_con.parents(".sections").attr("id");
    console.log('$what_section:: ', $what_section, 
                '\nselected brand:: ', brand,
                '\nslick_viewport:: ', slick_viewport);

    var show_hide_time = 250;
    var hide_con, show_con;
    
    clearTimeout(hide_con); //setTimeout() 초기화
    clearTimeout(show_con);

    $selected_box_con.addClass("hide");

    hide_con = setTimeout(function(){
        if(un == true){ //un이 true면 unslick
            $selected_box_con.filter('.slick-initialized').slick('unslick');            
        }
        $selected_box_con.html(""); //.html("")으로 .boxes 안의 문서를 교체함으로써 초기화
    
        // 반복문 돌릴 섹션 조건문
        var section;
        if ($what_section == 'top10') {
            section = top_10_posters;
            show = 5;
            resp = [ 
                {  
                    breakpoint: slick_viewport[0],
                    settings: {
                        slidesToShow: 4
                    } 
                },
                {  
                    breakpoint: slick_viewport[1],
                    settings: {
                        slidesToShow: 3
                    } 
                },
                { 
                    breakpoint: slick_viewport[2],
                    settings: {	
                        slidesToShow: 2 
                    } 
                }
            ]
        } else if ($what_section == 'watching') {
            section = watching_posters;
            show = 4;
            resp = [ 
                {  
                    breakpoint: slick_viewport[0], //화면 사이즈 960px
                    settings: {
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        slidesToShow: 3
                    } 
                },
                { 
                    breakpoint: slick_viewport[1], //화면 사이즈 479px
                    settings: {	
                        //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                        slidesToShow: 2 
                    } 
                }
            ]
        }

        //이하 콘텐츠 반복문과 슬릭 함수를 hide_con에 설계한 이유는 show_con으로 넣어서 클릭할 때마다 슬릭을 만들어 주면, 함수 실행하면서 처리하는 시간 동안 콘텐츠가 비어서 버튼을 누를 때마다 들썩거리게 되기 때문이다.
        for(i=0; i<4; i++){ //i for문으로 n, w, p, d 순회
            if(section[i][0] == brand){ //section 객체의 i의 0번째 (n, w, p, d)가 넘어온 파라미터 값(n, w, p, d 중 하나)와 같다면
                for(j=1; j<section[i].length; j++){ //j for문으로 no 반복해서 뿌려 줌. j[0]은 n, w, p, d이므로 j[1]부터
                    var no = j;
                    //파일명 10보다 작으면 j 앞에 0 넘버링 : 파일명이 10보다 크면 no 그대로 출력
                    j < 10 ? (no = "0" + j) : (no = String(no));

                    //html 제어 
                    //$selected_box_con에 append( 이하 텍스트 추가 (여기서는 html 코드)
                    if($what_section == 'top10'){
                        $selected_box_con.append(
                            "<div class='box box_"+ no +"' data-no='"+j+"'>" +
                                "<div class='num num_" + no + "'>"+ j +"</div>" +
                                "<div class='img_area'>" +
                                    "<img src='img/"+ $what_section + "/" + brand + "/" + section[i][j] +"'>" +
                                "</div>"+
                            "</div>");
                    } else if ($what_section == 'watching'){
                        $selected_box_con.append(
                            "<div class='box box_"+ no +"' data-no='"+j+"'>" +
                                "<div class='img_area'>" +
                                    "<img src='img/"+ $what_section + "/" + brand + "/" + section[i][j] +"'>" +
                                "</div>"+
                                "<div class='playbar playbar_" + no + "'>" +
                                    "<div class='play play_" + no + "' style= ' width: " + watching_play[i][j] + "%';></div>" + 
                                "</div>" +
                            "</div>");
                        switch(brand){
                            case 'n':
                                $(".box .playbar .play").css('background','#d81f26');
                                break;
                            case 'w':
                                $(".box .playbar .play").css('background','#ff0558');
                                break;
                            case 'p':
                                $(".box .playbar .play").css('background','#00a8e1');
                                break;
                            case 'd':
                                $(".box .playbar .play").css('background','#0066ff');
                                break;
                        }
                    }
                }
            }
        }

        //slick을 여러 번 불러와 오류가 나는 것을 방지하기 위해 .not('.slick-initialized') 사용
        $selected_box_con.not('.slick-initialized').slick({
            slidesToShow: show,
            slidesToScroll: 1,
            prevArrow:"<i class='far fa-chevron-left slick-prev'></i>",
            nextArrow:"<i class='far fa-chevron-right slick-next'></i>",
            responsive: resp
        });

        show_con = setTimeout(function(){
            $selected_box_con.removeClass("hide");
        }, show_hide_time);
    }, show_hide_time);
}

function contents(){
    var box, btn_style;

    // ======================== keyword ========================
    console.log("keyword start");
    var keyword_mood = $("#keyword .width_con .box_con .mood .boxes");
    var keyword_genre = $("#keyword .width_con .box_con .genre .boxes");
    var keyword_ott = $("#keyword .width_con .box_con .ott .boxes");

    for(i=0; i<3; i++){ 
        switch (keywords[i][0]){
            case "mood":
                box = keyword_mood;
                btn_style = ""
            break;
            case "genre":
                box = keyword_genre;
                btn_style = " sky"
            break;
            case "ott":
                box = keyword_ott;
                btn_style = " mid";
            break;
        }
        for(j=1; j<keywords[i].length; j++){
            var no = j;
            //파일명 10보다 작으면 j 앞에 0 넘버링 : 파일명이 10보다 크면 no 그대로 출력
            j < 10 ? (no = "0" + j) : (no = String(no));

            box.append(
                "<div class='box box_"+ no +"' data-no='"+ j +"'>" +
                    "<button type='button' class='btn btn_blue"+ btn_style + "'>" +
                        "<span>#" + keywords[i][j] + "</span>"+
                    "</button>" +
                "</div>");
        }
        box.not('.slick-initialized').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            draggable: true,
            prevArrow: false,
            nextArrow: false,
            responsive: [
                {  
                    breakpoint: 1080, 
                    settings: {
                        slidesToShow: 6
                    } 
                },
                {  
                    breakpoint: 765,
                    settings: {
                        slidesToShow: 5
                    } 
                },
                {  
                    breakpoint: 650, 
                    settings: {
                        slidesToShow: 4
                    } 
                },
                { 
                    breakpoint: 470, 
                    settings: {	
                        slidesToShow: 3
                    } 
                }
            ]
        });
    }

    // ======================== collections ========================
    console.log("collections start");
    var collections_user = $("#collections .width_con .box_con .user .boxes");
    var collections_ai = $("#collections .width_con .box_con .ai .boxes");

    for(i=0; i<2; i++){ 
        for(j=1; j<collections_img[i].length; j++){
            var no = j;
            //파일명 10보다 작으면 j 앞에 0 넘버링 : 파일명이 10보다 크면 no 그대로 출력
            j < 10 ? (no = "0" + j) : (no = String(no));
            
            (collections_img[i][0] == 'user') ? 
            (h3 = "<h3>by user" + no +"</h3>", box = collections_user) : (h3 = '', box = collections_ai);

            box.append(
                "<div class='box box_"+ no +"' data-no='"+ j +"'>" +
                    "<div class='img_area'>"+
                        "<img src='img/" + collections_img[i][j] + "'>" +
                    "</div>" + 
                    h3 +
                    "<h2>" + collections_h2[i][j] + "</h2>" +
                "</div>");
        }

        box.not('.slick-initialized').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<i class='far fa-chevron-left slick-prev'></i>",
            nextArrow:"<i class='far fa-chevron-right slick-next'></i>",
            responsive: [
                {  
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2
                    } 
                },
                { 
                    breakpoint: 480,
                    settings: {	
                        slidesToShow: 2
                    } 
                }
            ]
        });
    }
}