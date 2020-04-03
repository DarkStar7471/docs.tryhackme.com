(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{164:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return r})),o.d(t,"metadata",(function(){return l})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return b}));var n=o(1),a=o(9),i=(o(0),o(187)),r={id:"king-of-the-hill",title:"King of the Hill",sidebar_label:"King of the Hill"},l={id:"koth/king-of-the-hill",title:"King of the Hill",description:'## What is "King of the Hill"?',source:"@site/docs/koth/king-of-the-hill.md",permalink:"/docs/koth/king-of-the-hill",editUrl:"https://github.com/tryhackmeltd/docs.tryhackme.com/edit/master/docs/koth/king-of-the-hill.md",lastUpdatedBy:"Ben Eriksson",lastUpdatedAt:1585923524,sidebar_label:"King of the Hill",sidebar:"docs",previous:{title:"Adding your TryHackMe Level to Discord",permalink:"/docs/discord/verify"}},s=[{value:"What is &quot;King of the Hill&quot;?",id:"what-is-king-of-the-hill",children:[{value:"The Lobby System",id:"the-lobby-system",children:[]}]},{value:"The Rules of the Game Mode:",id:"the-rules-of-the-game-mode",children:[]},{value:"How to Play",id:"how-to-play",children:[{value:"Becoming King",id:"becoming-king",children:[]}]},{value:"How Points are Scored",id:"how-points-are-scored",children:[]},{value:"Feedback and Reporting Issues",id:"feedback-and-reporting-issues",children:[]},{value:"&quot;I Suspect a Player of Cheating&quot;",id:"i-suspect-a-player-of-cheating",children:[]}],c={rightToc:s};function b(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"what-is-king-of-the-hill"},'What is "King of the Hill"?'),Object(i.b)("p",null,"Only accessible to subscribers within TryHackMe, King of the Hill (Koth) is a competitive hacking game, where you play against 6 other hackers to compromise a machine and then patch its vulnerabilities to stop other players from also gaining access. The longer you maintain your access, the more points you get."),Object(i.b)("p",null,"Traditionally you are taught ",Object(i.b)("strong",{parentName:"p"},"how")," to compromise a machine to claim ownership of it. TryHackMe provides plenty of content on how to do so. However, an often overlooked aspect of hacking is maintaining access."),Object(i.b)("p",null,"Koth inspires you to not only apply the knowledge gained from the content within the platform in a competitive, timed setting; Koth also encourages the use of blue-team tactics to prevent others from using similar methods such as those that you employed to compromise the machine."),Object(i.b)("h3",{id:"the-lobby-system"},"The Lobby System"),Object(i.b)("p",null,"The platform creates groups in the form of a lobby. These lobbies consist of a ",Object(i.b)("strong",{parentName:"p"},"maximum of 6 participating")," players but can have spectators."),Object(i.b)("p",null,"This means you can 1v1 or host a lobby to compete against a handful of your friends."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/q0TUfND.png",alt:"lobby-system"}))),Object(i.b)("h4",{id:"creating-your-lobby"},"Creating Your Lobby"),Object(i.b)("p",null,"When creating a lobby, you will be given the option to specify whether or not the lobby will be private or public, as well as how soon the lobby will start (i.e. In an hour from now to allow time for public lobbies to become full) or for example 15 minutes if you are creating a private lobby where you have already arranged with the members."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/3wBo1Pm.png",alt:"create-lobby-private"}))),Object(i.b)("p",null,'When you create a private lobby, a unique invite link will be generated. You can share this link with the members that you want to participate against. This is found under the "Settings" menu (top right) within the lobby.'),Object(i.b)("p",null,'You can also invite "Spectators" to your lobby. They will be able to see the lobby as you see it - such as "King" changes but will have no ability to interfere with the on-going game.'),Object(i.b)("h4",{id:"joining-a-public-lobby"},"Joining a Public Lobby"),Object(i.b)("p",null,"Don't have anyone at hand to play against? Fret not. TryHackMe creates public lobbies daily for you to join. In the meanwhile, there may be others in a similar situation - looking for members to compete against."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"https://i.imgur.com/q0TUfND.png",alt:"lobby-system"}))),Object(i.b)("p",null,"If there is a public lobby that is looking for players, you can simply join and become apart of the lobby yourself."),Object(i.b)("h2",{id:"the-rules-of-the-game-mode"},"The Rules of the Game Mode:"),Object(i.b)("p",null,"To prevent cheating and ensure this game is realistic yet fair to everyone, all players must adhere to the following rules:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"The machine assigned to the lobby must not be rendered completely unavailable to other members. For example, this includes ",Object(i.b)("strong",{parentName:"li"},"denying all traffic")," through firewall rules, terminating ",Object(i.b)("strong",{parentName:"li"},"all services that will physically render the machine inoperable.")),Object(i.b)("li",{parentName:"ol"},"No deleting of flags placed throughout the machine."),Object(i.b)("li",{parentName:"ol"},"No closing of the port: 9999"),Object(i.b)("li",{parentName:"ol"},"No Denial of Service (DoS) attacks whatsoever to and from the machine itself nor members of the lobby or any other infrastructure."),Object(i.b)("li",{parentName:"ol"},"Whilst the target is launched from a pool of potential machines, we do not want any writeups or hints for this game mode. Do not spoil the nature of the competition for others...")),Object(i.b)("p",null,"Lobbies are moderated to ensure fair play where failure to abide by the rules will result in bans within the game mode and/or across the TryHackMe site."),Object(i.b)("h2",{id:"how-to-play"},"How to Play"),Object(i.b)("p",null,'When everyone "readies" within the lobby, you will be provided the IP Address of the machine you all have to compete amongst each other to attack. From now on, you will compete to become ',Object(i.b)("strong",{parentName:"p"},"the first King of the Hill"),"."),Object(i.b)("p",null,"After the lobby has started - the time of which you have specified, the ",Object(i.b)("strong",{parentName:"p"},"game will last for 45 minutes."),' The member with the most points at the end of the game - regardless of the amount of "King Changes" and the like wins!'),Object(i.b)("h3",{id:"becoming-king"},"Becoming King"),Object(i.b)("p",null,"After enumeration and such forth, you will need to add your ",Object(i.b)("strong",{parentName:"p"},"TryHackMe Username")," to ",Object(i.b)("strong",{parentName:"p"},"/root/king.txt")," on the machine itself to become the latest ",Object(i.b)("strong",{parentName:"p"},'"King"'),"."),Object(i.b)("p",null,"It is then down to you to prevent your competitors from replacing your ",Object(i.b)("strong",{parentName:"p"},"TryHackMe Username")," and becoming the new ",Object(i.b)("strong",{parentName:"p"},'"King"'),", however, you ",Object(i.b)("strong",{parentName:"p"},"must follow the rules"),"."),Object(i.b)("h2",{id:"how-points-are-scored"},"How Points are Scored"),Object(i.b)("p",null,"There are two main methods of obtaining points. However, it should be noted that any points gained throughout the game are not persistent and will not be reflected on your TryHackMe profile - nor the next lobby you join. These two methods are the following:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"Be King"')," The longer you have your TryHackMe Username in the /root/king.txt file, the more points you get. You obtain 10 points every ",Object(i.b)("strong",{parentName:"p"},"full-minute")," you are the current ",Object(i.b)("strong",{parentName:"p"},'"King"'),"\nI.e. to obtain 10 points, you must be the current ",Object(i.b)("strong",{parentName:"p"},'"King"')," for 60 seconds (1 full-minute). If you are only the king for 50 seconds, you will not be awarded the 10 points, nor will the person who was ",Object(i.b)("strong",{parentName:"p"},'"King"')," for the remaining 10 seconds of that minute."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},'"Submit Flags"')," There are multiple entry points to the machine, some will have flags hidden throughout. The difficulty of how the value of the flag is obtained will stipulate the points you obtain for it.\nI.e. A harder to reach flag will grant more points then a flag that is easier to obtain."),Object(i.b)("h2",{id:"feedback-and-reporting-issues"},"Feedback and Reporting Issues"),Object(i.b)("p",null,"King of the Hill is an entirely new type of content on TryHackMe. Whilst testing has been done, there's always something that will crop-up."),Object(i.b)("p",null,"We welcome any and all feedback - be it suggestions to improve the game mode, or any issues you're experiencing on our ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tryhackme.com/feedback"}),"feedback")," page!"),Object(i.b)("h2",{id:"i-suspect-a-player-of-cheating"},'"I Suspect a Player of Cheating"'),Object(i.b)("p",null,"If you suspect a player of cheating or rule-breaking, email ",Object(i.b)("inlineCode",{parentName:"p"},"koth@tryhackme.com")," with the ",Object(i.b)("strong",{parentName:"p"},"game ID (shown in URL)")," and the ",Object(i.b)("strong",{parentName:"p"},"Players Username if possible"),". We can investigate..."))}b.isMDXComponent=!0},187:function(e,t,o){"use strict";o.d(t,"a",(function(){return h})),o.d(t,"b",(function(){return m}));var n=o(0),a=o.n(n);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):l({},t,{},e)),o},h=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=b(o),u=n,m=h["".concat(r,".").concat(u)]||h[u]||p[u]||i;return o?a.a.createElement(m,l({ref:t},c,{components:o})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=o[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);