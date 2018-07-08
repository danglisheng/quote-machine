/* global $ */
class Utils {
    static getRandomQuote(Quotes) {
        return Quotes[Math.floor(Math.random() * Quotes.length)];
    }
    static AnimateBodyColor(colors, colorIdx) {
        $("html body").animate({
                backgroundColor: colors[colorIdx],
                color: colors[colorIdx]
            },
            1000
        );

    }
    static AnimationForShowingText(App, currentQuote) {
        const showStartTextOpacity = 0;
        let showStart = null;

        return new Promise(function(resolve, reject) {
            function showAnimate(timestamp) {
                if (!showStart) showStart = timestamp;
                const targetTextOpacity = 1;
                const speed = (targetTextOpacity - showStartTextOpacity) / 120;
                let nextTextOpacity = Math.min(showStartTextOpacity + (timestamp - showStart) * speed, targetTextOpacity);
                App.setState({ textOpacity: nextTextOpacity });
                if (nextTextOpacity < targetTextOpacity) {
                    window.requestAnimationFrame(showAnimate);
                }
                else {
                    resolve("show completely");
                }

            }
            App.setState({ currentQuote: currentQuote });
            window.requestAnimationFrame(showAnimate);
        })

    }
    static AnimationForHidingText(App, currentQuote) {
        let hideStart = null;
        const textOpacity = App.state.textOpacity;

        return new Promise(function(resolve, reject) {
            const hideAnimate = timestamp => {
                if (!hideStart) hideStart = timestamp;
                const targetTextOpacity = 0;
                const speed = (textOpacity - targetTextOpacity) / 120;
                let nextTextOpacity = Math.max(textOpacity - (timestamp - hideStart) * speed, targetTextOpacity);
                App.setState({ textOpacity: nextTextOpacity });
                if (nextTextOpacity > targetTextOpacity) {
                    window.requestAnimationFrame(hideAnimate);
                } else {
                     resolve("hide completely");
                }
            }
            window.requestAnimationFrame(hideAnimate);

        })

    }
    static openURL(url) {
        window.open(url,'Share','width=550,height=400,toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=0,left='+(window.screen.width-550)/2+',top='+(window.screen.height-400)/2);
    }
}
export default Utils;