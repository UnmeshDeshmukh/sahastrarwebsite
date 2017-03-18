import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "audio": {
        "display": "block"
    },
    "canvas": {
        "display": "block"
    },
    "command": {
        "display": "block"
    },
    "datalist": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "embed": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block"
    },
    "footer": {
        "display": "block",
        "width": "100%",
        "textAlign": "center"
    },
    "header": {
        "display": "block",
        "width": "100%",
        "position": "relative",
        "zIndex": 2
    },
    "hgroup": {
        "display": "block"
    },
    "keygen": {
        "display": "block"
    },
    "meter": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "output": {
        "display": "block"
    },
    "progress": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "source": {
        "display": "block"
    },
    "video": {
        "display": "block"
    },
    "mark": {
        "display": "inline"
    },
    "rp": {
        "display": "inline"
    },
    "rt": {
        "display": "inline"
    },
    "ruby": {
        "display": "inline"
    },
    "summary": {
        "display": "inline"
    },
    "time": {
        "display": "inline"
    },
    "html": {
        "width": "100%",
        "height": "100%"
    },
    "body": {
        "fontFamily": "Arial, Helvetica, sans-serif",
        "fontSize": 13,
        "lineHeight": 25,
        "color": "#999",
        "minWidth": 960,
        "height": "100%",
        "background": "url(../images/body-bg.jpg) center top no-repeat #f3f3f3"
    },
    "ic": {
        "border": 0,
        "float": "right",
        "background": "#fff",
        "color": "#f00",
        "width": "50%",
        "lineHeight": 10,
        "fontSize": 10,
        "marginTop": "-220%",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "hidden",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bg": {
        "width": "100%",
        "background": "url(../images/bg-top.jpg) center 0 no-repeat"
    },
    "main": {
        "width": 960,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "a": {
        "color": "rgb(127,19,115)",
        "outline": "none"
    },
    "a:hover": {
        "textDecoration": "none"
    },
    "col-1": {
        "float": "left"
    },
    "col-2": {
        "float": "left"
    },
    "wrapper": {
        "width": "100%",
        "height": "auto",
        "overflow": "hidden",
        "position": "relative"
    },
    "extra-wrap": {
        "overflow": "hidden"
    },
    "p": {
        "marginBottom": 10
    },
    "p1": {
        "marginBottom": 4
    },
    "p2": {
        "marginBottom": 15
    },
    "p3": {
        "marginBottom": 30
    },
    "p4": {
        "marginBottom": 40
    },
    "p5": {
        "marginBottom": 50
    },
    "reg": {
        "textTransform": "uppercase"
    },
    "fleft": {
        "float": "left"
    },
    "fright": {
        "float": "right"
    },
    "alignright": {
        "textAlign": "right"
    },
    "aligncenter": {
        "textAlign": "center"
    },
    "it": {
        "fontStyle": "italic"
    },
    "color-1": {
        "color": "#3c74a9"
    },
    "color-2": {
        "color": "#49a69e"
    },
    "color-3": {
        "color": "#f3ad29"
    },
    "color-4": {
        "color": "#dc5130"
    },
    "color-5": {
        "color": "#4c4c4c"
    },
    "indent": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "indent-left": {
        "paddingLeft": 20
    },
    "indent-left2": {
        "paddingLeft": 10
    },
    "indent-left3": {
        "paddingLeft": 15
    },
    "indent-right": {
        "paddingRight": 20
    },
    "indent-bot": {
        "marginBottom": 20
    },
    "indent-bot2": {
        "marginBottom": 30
    },
    "indent-bot3": {
        "marginBottom": 45
    },
    "prev-indent-bot": {
        "marginBottom": 10
    },
    "img-indent-bot": {
        "marginBottom": 25
    },
    "margin-bot": {
        "marginBottom": 35
    },
    "img-indent": {
        "float": "left",
        "marginTop": 8,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "img-indent2": {
        "float": "left",
        "marginTop": 0,
        "marginRight": 20,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "img-indent-r": {
        "float": "right",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 40
    },
    "buttons a:hover": {
        "cursor": "pointer"
    },
    "menu li a": {
        "textDecoration": "none"
    },
    "list-1 a": {
        "textDecoration": "none",
        "display": "inline-block"
    },
    "list-2 a": {
        "textDecoration": "none",
        "display": "block",
        "color": "#1799cf",
        "paddingLeft": 12,
        "background": "url(../images/marker-1.gif) 0 10px no-repeat"
    },
    "link": {
        "textDecoration": "none"
    },
    "button": {
        "textDecoration": "none",
        "display": "inline-block",
        "paddingTop": 5,
        "paddingRight": 19,
        "paddingBottom": 5,
        "paddingLeft": 19,
        "fontSize": 13,
        "lineHeight": 1.23,
        "color": "#fff",
        "background": "#4c4c4c",
        "cursor": "pointer"
    },
    "h1 a": {
        "textDecoration": "none",
        "display": "inline-block",
        "fontSize": 49,
        "lineHeight": 2,
        "color": "#4c4c4c",
        "letterSpacing": -2
    },
    "h1": {
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "float": "left"
    },
    "h1 strong": {
        "color": "#dc5130"
    },
    "menu": {
        "paddingTop": 51,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "float": "right"
    },
    "menu li": {
        "float": "left",
        "position": "relative",
        "paddingLeft": 12
    },
    "menu > li:first-child": {
        "paddingLeft": 0
    },
    "menu a": {
        "display": "inline-block",
        "fontSize": 13,
        "lineHeight": 20,
        "paddingTop": 3,
        "paddingRight": 20,
        "paddingBottom": 3,
        "paddingLeft": 20,
        "color": "#999"
    },
    "menu aactive": {
        "background": "rgb(127,19,115)",
        "color": "#fff"
    },
    "menu a:hover": {
        "background": "rgb(127,19,115)",
        "color": "#fff"
    },
    "banners": {
        "position": "relative",
        "zIndex": 2,
        "width": "100%",
        "height": 147,
        "overflow": "hidden",
        "textAlign": "center"
    },
    "banners > div": {
        "width": "100%",
        "paddingTop": 13,
        "background": "#f4f4f4"
    },
    "prev": {
        "display": "block",
        "width": 10,
        "height": 19,
        "textIndent": -9999,
        "position": "absolute",
        "zIndex": 99,
        "top": "50%",
        "marginTop": -11,
        "background": "url(../images/prev.gif) 0 0 no-repeat",
        "left": 27
    },
    "next": {
        "display": "block",
        "width": 10,
        "height": 19,
        "textIndent": -9999,
        "position": "absolute",
        "zIndex": 99,
        "top": "50%",
        "marginTop": -11,
        "background": "url(../images/next.gif) 0 0 no-repeat",
        "right": 29
    },
    "title-1": {
        "display": "block",
        "fontSize": 59,
        "lineHeight": 1.2,
        "color": "#4c4c4c",
        "letterSpacing": -2,
        "marginBottom": -10
    },
    "title-2": {
        "display": "block",
        "fontSize": 38,
        "lineHeight": 1.3,
        "color": "#999",
        "letterSpacing": -1
    },
    "title-3": {
        "display": "block",
        "fontSize": 23,
        "lineHeight": 2,
        "letterSpacing": -1,
        "background": "url(../images/pic-1.gif) left bottom repeat-x",
        "textIndent": 8,
        "paddingBottom": 2,
        "marginBottom": 10
    },
    "content": {
        "width": "100%",
        "paddingTop": 22,
        "paddingRight": 0,
        "paddingBottom": 58,
        "paddingLeft": 0,
        "position": "relative",
        "zIndex": 1
    },
    "page1 content": {
        "paddingTop": 29,
        "paddingRight": 0,
        "paddingBottom": 58,
        "paddingLeft": 0
    },
    "spacer-1": {
        "width": "100%",
        "background": "url(../images/pic-1.gif) 217px 0 repeat-y"
    },
    "h3": {
        "fontSize": 30,
        "lineHeight": 1.8,
        "color": "#4c4c4c",
        "letterSpacing": -2,
        "background": "url(../images/h3-tail.gif) 0 bottom repeat-x",
        "marginBottom": 8
    },
    "h5": {
        "color": "#4c4c4c",
        "fontWeight": "normal"
    },
    "h6": {
        "color": "#dc5130",
        "fontWeight": "normal"
    },
    "border-bot": {
        "width": "100%",
        "paddingBottom": 1,
        "background": "url(../images/border-bot.gif) 0 bottom repeat-x"
    },
    "border-bot2": {
        "width": "100%",
        "paddingBottom": 15,
        "background": "url(../images/border-bot.gif) 0 bottom repeat-x"
    },
    "box": {
        "width": "100%",
        "background": "#fff",
        "boxShadow": "0 0 2px #ddd",
        "MozBoxShadow": "0 0 2px #ddd",
        "WebkitBoxShadow": "0 0 2px #ddd",
        "marginBottom": 2
    },
    "box padding": {
        "paddingTop": 10,
        "paddingRight": 19,
        "paddingBottom": 34,
        "paddingLeft": 19
    },
    "box a": {
        "fontSize": 13,
        "lineHeight": 20,
        "color": "#999",
        "display": "inline-block"
    },
    "button:hover": {
        "background": "#dc5130"
    },
    "tdate-1": {
        "display": "block"
    },
    "tdate-1 a": {
        "color": "#4c4c4c"
    },
    "list-1 li": {
        "lineHeight": 19,
        "paddingTop": 8,
        "paddingRight": 0,
        "paddingBottom": 8,
        "paddingLeft": 14,
        "background": "url(../images/marker-1.gif) 0 15px no-repeat"
    },
    "list-1 a:hover": {
        "color": "#4c4c4c"
    },
    "list-2 li": {
        "fontSize": 14,
        "lineHeight": 24,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "background": "url(../images/pic-1.gif) 0 bottom repeat-x"
    },
    "list-2 a:hover": {
        "color": "#fff"
    },
    "list-2 last-item": {
        "background": "none"
    },
    "link:hover": {
        "textDecoration": "underline"
    },
    "link-1": {
        "display": "inline-block",
        "fontSize": 14,
        "paddingRight": 8,
        "background": "url(../images/marker-3.gif) right 8px no-repeat"
    },
    "link-1:hover": {
        "color": "#fff"
    },
    "numb": {
        "display": "block",
        "fontSize": 40,
        "lineHeight": 1.8,
        "color": "#dc5130",
        "float": "left",
        "marginRight": 10
    },
    "dl dt": {
        "marginBottom": 10
    },
    "dl span": {
        "float": "left",
        "width": 69
    },
    "contact-form": {
        "display": "block",
        "width": "100%"
    },
    "contact-form label": {
        "display": "block",
        "height": 30,
        "overflow": "hidden"
    },
    "contact-form input": {
        "float": "left",
        "width": 280,
        "fontSize": 13,
        "lineHeight": 1.23,
        "color": "#999",
        "paddingTop": 2,
        "paddingRight": 10,
        "paddingBottom": 2,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Arial, Helvetica, sans-serif",
        "border": "1px solid #ececec",
        "background": "#fff",
        "outline": "none"
    },
    "contact-form textarea": {
        "float": "left",
        "height": 305,
        "minHeight": 305,
        "maxHeight": 305,
        "width": 500,
        "maxWidth": 500,
        "minWidth": 500,
        "fontSize": 13,
        "lineHeight": 1.23,
        "color": "#999",
        "paddingTop": 5,
        "paddingRight": 10,
        "paddingBottom": 5,
        "paddingLeft": 10,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontFamily": "Arial, Helvetica, sans-serif",
        "border": "1px solid #ececec",
        "background": "#fff",
        "overflow": "auto",
        "outline": "none"
    },
    "text-form": {
        "float": "left",
        "display": "block",
        "fontSize": 13,
        "lineHeight": 24,
        "width": 78,
        "color": "#999",
        "fontFamily": "Arial, Helvetica, sans-serif"
    },
    "buttons": {
        "paddingTop": 17,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textAlign": "right"
    },
    "buttons a": {
        "marginLeft": 6
    },
    "footer span": {
        "display": "block"
    },
    "footer inner": {
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10
    },
    "footer-bg": {
        "width": "100%",
        "background": "url(../images/footer-tail.gif) left top repeat-x",
        "paddingTop": 25,
        "paddingRight": 0,
        "paddingBottom": 45,
        "paddingLeft": 0
    },
    "list-services": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "list-services li": {
        "float": "left",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 10
    }
});