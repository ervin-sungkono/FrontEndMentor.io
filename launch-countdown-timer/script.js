class Countdown {
    constructor(el, values, $){
        this.el = el
        this.$ = $
        this.values = values
        this.countdown_interval = null
        this.total_seconds = 0
    }
    
    init(){
        this.total_seconds =
            this.values.days * 24 * 60 * 60 +
            this.values.hours * 60 * 60 +
            this.values.minutes * 60 +
            this.values.seconds

        this.count();
    }

    count(){
        const that = this;
        this.countdown_interval = setInterval(function () {
            if (that.total_seconds > 0) {
                that.total_seconds--

                const seconds = that.total_seconds
                that.values.days = Math.floor(seconds / (3600*24))
                that.values.hours = Math.floor(seconds % (3600*24) / 3600)
                that.values.minutes = Math.floor(seconds % 3600 / 60)
                that.values.seconds = Math.floor(seconds % 60)
                that.checkHour(that.$.days, that.values.days)
                that.checkHour(that.$.hours, that.values.hours)
                that.checkHour(that.$.minutes, that.values.minutes)
                that.checkHour(that.$.seconds, that.values.seconds)
            }
            else {
                clearInterval(that.countdown_interval);
            }
        }, 1000)
    }

    animateFigure(el, value){
        const
            top         = el.querySelector('.top'),
            bottom      = el.querySelector('.bottom'),
            back_top    = el.querySelector('.top-back'),
            back_bottom = el.querySelector('.bottom-back')

        back_top.querySelector("span").innerText = value
        back_bottom.querySelector("span").innerText = value

        TweenMax.to(top, 0.8, {
            rotationX           : '-180deg',
            transformPerspective: 300,
            ease                : Quart.easeOut,
            onComplete          : function() {
                top.querySelector("span").innerText = value;
                bottom.querySelector("span").innerText = value;
                TweenMax.set(top, { rotationX: 0});
            }
        });
    
        TweenMax.to(back_top, 0.8, { 
            rotationX           : 0,
            transformPerspective: 300,
            ease                : Quart.easeOut,
            clearProps: 'all'
        });    
    }

    checkHour(el, value){
        const figValue = el.querySelector(".top").innerText
        if(figValue != value){
            this.animateFigure(el, `${value < 10 ? "0" : ""}${value}`)
        }
    }
}

function startCountdown() {  
    const $ = {
        days: document.querySelector(".bloc-time.days .figure"),
        hours: document.querySelector(".bloc-time.hours .figure"),
        minutes: document.querySelector(".bloc-time.min .figure"),
        seconds: document.querySelector(".bloc-time.sec .figure")
    }

    const values = {
        days: parseInt(document.querySelector(".bloc-time.days").getAttribute("data-init-value")),
        hours: parseInt(document.querySelector(".bloc-time.hours").getAttribute("data-init-value")),
        minutes: parseInt(document.querySelector(".bloc-time.min").getAttribute("data-init-value")),
        seconds: parseInt(document.querySelector(".bloc-time.sec").getAttribute("data-init-value"))
    }
    
    const countdown = new Countdown(document.querySelector(".countdown"), values, $)
    countdown.init()
}

startCountdown()