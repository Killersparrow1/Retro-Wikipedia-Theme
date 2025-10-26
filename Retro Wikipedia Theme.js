// ==UserScript==
// @name         Retro Wikipedia Theme
// @namespace    https://tampermonkey.net/
// @version      1.0
// @description  Makes Wikipedia look like an old-school 90s website (retro internet aesthetic)
// @author       Killersparrow1
// @match        https://*.wikipedia.org/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Remove the modern Wikipedia header and footer clutter
    document.querySelector('#mw-head, #mw-panel, #footer').style.display = 'none';

    // Add a retro marquee header
    const marquee = document.createElement('marquee');
    marquee.textContent = "📚 Welcome to Retro Wikipedia — Powered by Github@Killersparrow1! 📞";
    marquee.setAttribute('scrollamount', '5');
    marquee.style = `
        background: #000080;
        color: #00FF00;
        font-family: 'Courier New', monospace;
        font-size: 18px;
        padding: 10px;
        border-bottom: 3px double #00FF00;
    `;
    document.body.prepend(marquee);

    // Apply retro CSS styles
    GM_addStyle(`
        body {
            background-color: #c0c0c0 !important;
            color: black !important;
            font-family: "Courier New", monospace !important;
            background-image: url('https://www.transparenttextures.com/patterns/old-wall.png');
        }

        #content {
            background: #fff !important;
            border: 4px ridge #808080 !important;
            padding: 20px !important;
            max-width: 800px !important;
            margin: 40px auto !important;
            box-shadow: 4px 4px 0px #000;
        }

        a {
            color: #0000EE !important;
            text-decoration: underline !important;
        }

        a:visited {
            color: #551A8B !important;
        }

        h1, h2, h3, h4, h5, h6 {
            color: #000080 !important;
            border-bottom: 2px dashed #00FF00 !important;
            text-shadow: 1px 1px #fff;
        }

        img {
            border: 2px solid #000 !important;
            box-shadow: 3px 3px 0 #808080 !important;
        }

        table, th, td {
            border: 1px solid black !important;
            border-collapse: collapse !important;
            background: #e0e0e0 !important;
        }

        th {
            background: #a0a0a0 !important;
        }

        #siteSub, #contentSub {
            color: #333;
            font-style: italic;
        }

        ::selection {
            background: #00FF00;
            color: #000;
        }
    `);
})();
