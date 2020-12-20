(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        var setting = {
            speed: 1000,   
            interval: 3000,
            
        };
        $.extend(true, setting, options);
         var states = [
            { $zIndex: 1, width: 600, height: 250, top: 175, left: 350, $opacity: 0.2 },
            { $zIndex: 2, width: 600, height: 250, top: 175, left: 0, $opacity: 0.4 },
            { $zIndex: 3, width: 800, height: 350, top: 125, left: 100, $opacity: 0.7 },
            { $zIndex: 4, width: 900, height: 550, top: 25, left: 200, $opacity: 1 },
            { $zIndex: 3, width: 800, height: 350, top: 125, left: 400, $opacity: 0.7 },
            { $zIndex: 2, width: 600, height: 250, top: 175, left: 700, $opacity: 0.4 },
            { $zIndex: 1, width: 600, height: 250, top: 175, left: 350, $opacity: 0.2 }
        ];

        var $lis = $ele.find('li');
        var timer = null;

        $ele.find('.next').on('click', function() {
            next();
        });
        $ele.find('.prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        return this;
    }
})(jQuery);