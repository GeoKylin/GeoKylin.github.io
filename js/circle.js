

//	create by nasir farhadi
//	email : nasirfarhadi92@gmail.com
//	Github : nasirfarhadi92



	let i=2;

	
	$(document).ready(function(){
		var radius = 200;
		var fields = $('.itemDot'); //所有小图标
		var container = $('.dotCircle'); //容器
		var width = container.width();
		radius = width/2.5;
		var time;
 
 		var height = container.height();
		var angle = 0, step = (2*Math.PI) / fields.length; //角度间隔

		// 小图标位置初始化
		fields.each(function() {
			var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
			var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
			
			$(this).css({
				left: x + 'px',
				top: y + 'px'
			});
			angle += step;
		});

		// 自动旋转
        time = setInterval(function(){
            // var dataTab= $('.itemDot.active').data("tab");
            // if(dataTab>10||i>10){
            // dataTab=1;
            // i=1;
            // }
            // $('.itemDot').removeClass('active');
            // $('[data-tab="'+i+'"]').addClass('active');
            // $('.CirItem').removeClass('active');
            // $( '.CirItem'+i).addClass('active');
            // i++;

            $('.itemDot').css({
                "transform":"rotate("+(-i*0.2)+"deg)",
                // "transition":"1s"
            });
            $('.dotCircle').css({
                "transform":"rotate("+(i*0.2)+"deg)",
                // "transition":"2s"
            });


            i++;
        }, 50);
		
		// 点击事件
		$('.itemDot').click(function(){

			var dataTab= $(this).data("tab"); //小图标编号
			i=dataTab;
            switch(i)
            {
                case 1:
                    window.open('./html/Academic.html');
                    // window.open('./html/developing.html');
                    break;
                case 2:
                    // window.open('https://blog.seisman.info');
                    window.open('./blog/');
                    break;
                case 3:
                    // window.open('https://wiki.seisman.info');
                    window.open('./wiki/');
                    break;
                case 4:
                    // window.open('https://link.seisman.info');
                    window.open('./links/');
                    break;
                case 5:
                    window.open('https://github.com/GeoKylin');
                    // window.open('./html/developing.html');
                    break;
                case 6:
                    window.open('mailto:wangkai185@mails.ucas.edu.cn');
                    // window.open('./html/developing.html');
                    break;
                default:
                    break;
            }
		});

        // 悬停事件
        $('.itemDot').hover(function(){
        	clearInterval(time);
		},function(){
            time = setInterval(function(){
                // var dataTab= $('.itemDot.active').data("tab");
                // if(dataTab>10||i>10){
                // dataTab=1;
                // i=1;
                // }
                // $('.itemDot').removeClass('active');
                // $('[data-tab="'+i+'"]').addClass('active');
                // $('.CirItem').removeClass('active');
                // $( '.CirItem'+i).addClass('active');
                // i++;

                $('.itemDot').css({
                    "transform":"rotate("+(-i*0.2)+"deg)",
                    // "transition":"1s"
                });
                $('.dotCircle').css({
                    "transform":"rotate("+(i*0.2)+"deg)",
                    // "transition":"2s"
                });


                i++;
            }, 50);
        });
		

		
	});



