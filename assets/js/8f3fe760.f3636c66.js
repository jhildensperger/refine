"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[29308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});n(67294);var a=n(3905);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const s={title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",slug:"tdd-vs-bdd",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/social.png",hide_table_of_contents:!1},l="TDD vs BDD",p={permalink:"/blog/tdd-vs-bdd",source:"@site/blog/2023-06-09-tdd-vs-bdd.md",title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",date:"2023-06-09T00:00:00.000Z",formattedDate:"June 9, 2023",tags:[{label:"javascript",permalink:"/blog/tags/javascript"},{label:"comparison",permalink:"/blog/tags/comparison"}],readingTime:13.085,hasTruncateMarker:!1,authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],frontMatter:{title:"TDD vs BDD - A Detailed Guide",description:"We'll be looking at the differences between TDD and BDD, their pros and cons, and how to implement them in a project.",slug:"tdd-vs-bdd",authors:"deborah_emeni",tags:["javascript","comparison"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/social.png",hide_table_of_contents:!1},prevItem:{title:"Getting started with Astro Framework",permalink:"/blog/astro-js-guide"},nextItem:{title:"A Complete Guide to Listing Docker Containers",permalink:"/blog/docker-list-containers"},relatedPosts:[{title:"A Complete guide to pnpm",description:"We'll explore pnpm, an efficient alternative to npm.",permalink:"/blog/how-to-use-pnpm",formattedDate:"November 27, 2023",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"/img/generic-profile.png",key:"joseph_mawa"}],readingTime:8.995,date:"2023-11-27T00:00:00.000Z"},{title:"Temporal API - A new approach to managing Date and Time in JS",description:"Are we saying goodbye to the JavaScript Date object? Use the Temporal API to manipulate date and time objects in JavaScript.",permalink:"/blog/temporal-date-api",formattedDate:"August 19, 2022",authors:[{name:"Muhammed  Sarwar",title:"Software Engineer",url:"https://twitter.com/arslans171",imageURL:"/img/generic-profile.png",key:"muhammed_arslan"}],readingTime:6.745,date:"2022-08-19T00:00:00.000Z"},{title:"GraphQL vs REST - Key Differences and Use Cases",description:"We'll explore the key differences between GraphQL and REST, and discuss the use cases where each approach excels.",permalink:"/blog/graphql-vs-rest",formattedDate:"December 3, 2023",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:14.74,date:"2023-12-03T00:00:00.000Z"}],authorPosts:[{title:"How to use Conditional Rendering in React",description:"We'll implement Conditional Rendering in React and the various ways to use it in your React applications.",permalink:"/blog/react-conditional-rendering",formattedDate:"December 14, 2022",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:10.1,date:"2022-12-14T00:00:00.000Z"},{title:"The Important Differences between URI VS URL",description:"We'll be looking at the differences between URI and URL, and how they are used in web development.",permalink:"/blog/uri-vs-url",formattedDate:"February 1, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:7.715,date:"2023-02-01T00:00:00.000Z"},{title:"gRPC vs REST - A Brief Comparison",description:"We'll explore practical use cases of REST and gRPC to enable you to select the most appropriate API for your project.",permalink:"/blog/grpc-vs-rest",formattedDate:"June 23, 2023",authors:[{name:"Deborah Emeni",title:"Software Engineer",url:"https://github.com/debemenitammy",imageURL:"https://github.com/debemenitammy.png",key:"deborah_emeni"}],readingTime:12.52,date:"2023-06-23T00:00:00.000Z"}]},d={authorsImageUrls:[void 0]},c=[{value:"Overview of Test-Driven Development",id:"overview-of-test-driven-development",level:2},{value:"Pros and cons of TDD",id:"pros-and-cons-of-tdd",level:3},{value:"Step-by-step demo example of TDD implementation",id:"step-by-step-demo-example-of-tdd-implementation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Overview of Behavior-Driven Development",id:"overview-of-behavior-driven-development",level:2},{value:"Pros and cons of BDD",id:"pros-and-cons-of-bdd",level:3},{value:"Step-by-step demo example of BDD implementation",id:"step-by-step-demo-example-of-bdd-implementation",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Comparison of TDD and BDD",id:"comparison-of-tdd-and-bdd",level:2}],u={toc:c};function m(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){r(e,t,n[t])}))}return e}({},u,n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Software testing is critical in the software development cycle and ensures that the developed products are reliable and of high quality. The quality of the application is vital for providing a satisfying user experience. Paying attention to the development methodology used in writing tests in an application is also important."),(0,a.kt)("p",null,"Test-Driven Development (TDD) and Behavior Driven Development (BDD) are two popular and effective methodologies developers use to write quality tests that benefit developers, users, product managers and stakeholders."),(0,a.kt)("p",null,"In this article, you\u2019ll learn about Test-Driven Development (TDD) and Behavior Driven Development (BDD), including what they entail, their principles, advantages, disadvantages, how they work and their key differences."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tdd-vs-bdd"},"TDD vs BDD"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview-of-test-driven-development"},"Overview of Test-Driven Development"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pros-and-cons-of-tdd"},"Pros and cons of TDD")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#step-by-step-demo-example-of-tdd-implementation"},"Step-by-step demo example of TDD implementation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#overview-of-behavior-driven-development"},"Overview of Behavior-Driven Development"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pros-and-cons-of-bdd"},"Pros and cons of BDD")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#step-by-step-demo-example-of-bdd-implementation"},"Step-by-step demo example of BDD implementation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#prerequisites-1"},"Prerequisites")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#comparison-of-tdd-and-bdd"},"Comparison of TDD and BDD")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#conclusion"},"Conclusion"))),(0,a.kt)("h2",{id:"overview-of-test-driven-development"},"Overview of Test-Driven Development"),(0,a.kt)("p",null,"TDD is a repetitive and continuous process based on ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Agile_software_development"},"agile development methodology")," that involves creating test cases at each stage of developing an application to define the expected code behavior."),(0,a.kt)("p",null,"In TDD, developers first create a unit test case to showcase the desired behavior of the code before actually implementing it. If the test fails, they iteratively write new code until it successfully passes. Afterwards, they proceed to refactor the application's source code, which involves restructuring the code without introducing new features or compromising the original functionality of the application."),(0,a.kt)("p",null,"To implement TDD effectively, the process entails breaking down the application's functions and generating tests for each aspect. This approach ensures systematic and thorough testing and monitoring of the components."),(0,a.kt)("p",null,"A good example of TDD can be seen in building an Authentication system in an application. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/tdd-illustration.png",alt:"tdd vs bdd"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"According to the illustration above, the developer begins by identifying and defining the authentication system's requirements, including authentication methods such as OAuth, username, password, etc. The developer then writes a test that defines the expected behavior for one of the authentication system's components, such as the login functionality."),(0,a.kt)("p",null,"After that, the developer would run the tests, which would initially fail because the functionality had not yet been implemented. The developer then writes the code necessary to pass the test.\nThe tests are then re-run, and the code is refactored. After refactoring, the tests are rerun to ensure they continue to pass. "),(0,a.kt)("p",null,"After the login functionality has been validated, additional test cases for other functions, such as account verification, registration, and password reset, are created, and the TDD process is repeated."),(0,a.kt)("h3",{id:"pros-and-cons-of-tdd"},"Pros and cons of TDD"),(0,a.kt)("p",null,"TDD offer several benefits. Still, it also has some drawbacks, as seen below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Faster Development Cycle"),": TDD allows for the continuous delivery of software updates, and its architecture enables developers to quickly identify and fix bugs in their code. The rapid integration of updates promotes faster development and the delivery of high-quality software.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Improved Code quality"),": Writing test cases before writing the code enables developers to understand the desired functionality better and write well-structured code. Also, using the TDD approach makes it easier to refractor the section of the code and make it less buggy without affecting the existing functionality.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Time-consuming"),": TDD requires more time and effort in writing test cases before implementing the functionality, which may slow down the development process for projects with limited resources and short deadlines.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Rigid"),": The TDD approach of writing tests before implementing code is rigid because it is unsuitable for complex projects with constantly changing requirements."))),(0,a.kt)("h2",{id:"step-by-step-demo-example-of-tdd-implementation"},"Step-by-step demo example of TDD implementation"),(0,a.kt)("p",null,"Let's see how TDD works in practice by building a simple app."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow along with the tutorial, ensure you have the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Nodejs")," installed"),(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"JavaScript")),(0,a.kt)("li",{parentName:"ul"},"Terminal"),(0,a.kt)("li",{parentName:"ul"},"Code editor (",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code editor"),")")),(0,a.kt)("p",null,"To begin, create the project directory on your system by running this command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir tdd-project\n")),(0,a.kt)("p",null,"Next, change into the directory by running this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd tdd-project\n")),(0,a.kt)("p",null,"Open the project in your code editor, and in your project\u2019s directory, run the following command to initialize a new Node.js project: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init\n")),(0,a.kt)("p",null,"Next, you need to install a testing framework that will be used for performing unit testing in your project. Several testing frameworks are available depending on the programming language used to create an application. For example, ",(0,a.kt)("a",{parentName:"p",href:"https://junit.org/"},"JUnit")," is commonly used for Java apps, ",(0,a.kt)("a",{parentName:"p",href:"https://pytest.org/"},"pytest")," for Python apps, ",(0,a.kt)("a",{parentName:"p",href:"https://nunit.org/"},"NUnit")," for .NET apps, ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," for JavaScript apps, and so on. We\u2019ll use the Jest framework for this tutorial since we are using JavaScript."),(0,a.kt)("p",null,"To install the Jest testing framework as a dev dependency in your project's directory, simply run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install jest --save-dev\n")),(0,a.kt)("p",null,"Once the installation is successful, jest will be installed and added to your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file. Replace your test script with this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="package.json"',title:'"package.json"'},'"test": "jest"\n')),(0,a.kt)("p",null,"Your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file should look like this:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{width:"300px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/package-json.png",alt:"tdd vs bdd"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Using the TDD approach to build your application demands that you start by writing the tests. Create a file called ",(0,a.kt)("strong",{parentName:"p"},"sub.test.js")," in the root directory of the ",(0,a.kt)("strong",{parentName:"p"},"tdd-project")," that will contain the tests. Jest uses a .",(0,a.kt)("strong",{parentName:"p"},"test.js")," naming convention for files, so ensure your file has that extension."),(0,a.kt)("p",null,"Now, you can start writing your tests. Let\u2019s say you want to create a small calculator app, and the first functionality you\u2019d like to implement is the subtraction function. The Jest framework has its unique way of writing tests as defined in the ",(0,a.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/getting-started"},"documentation"),". "),(0,a.kt)("p",null,"Jest uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"test()")," function, which accepts a description as the first argument where you can describe the behavior you want to test and a callback where you can use an ",(0,a.kt)("inlineCode",{parentName:"p"},"expect()")," function and a ",(0,a.kt)("inlineCode",{parentName:"p"},"toBe()")," matcher that lets you define the expected behavior of your code and check if the behavior matches those expectations. "),(0,a.kt)("p",null,"Let\u2019s see the ",(0,a.kt)("inlineCode",{parentName:"p"},"test()")," function in practice. In your ",(0,a.kt)("strong",{parentName:"p"},"sub.test.js file"),", add the following test that will define the behavior of subtracting values with the subtract method that you will define later in the code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="sub.test.js"',title:'"sub.test.js"'},"const Calc = require('./calc');\n\ntest('subtraction', () => {\n  const calc = new Calc();\n  const sub = calc.subtract(20, 10);\n  expect(sub).toBe(10);\n});\n")),(0,a.kt)("p",null,"Next, we\u2019ll try running the test, which will fail because you haven\u2019t written the functionality yet. However, this is an essential step as the test failing shows that the test is testing the behavior."),(0,a.kt)("p",null,"Run the test with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm test\n")),(0,a.kt)("p",null,"After running that command, the following will be displayed in your terminal:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"800px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/alt-name.png",alt:"tdd vs bdd"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Next, let\u2019s write the code that implements the functionality. In your project\u2019s root directory, create a file called ",(0,a.kt)("strong",{parentName:"p"},"calc.js")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="calc.js"',title:'"calc.js"'},"class Calc {\n\n  subtract(x, y) {\n    return x - y;\n  }\n}\n\nmodule.exports = Calc;\n")),(0,a.kt)("p",null,"Here, we are creating a class called ",(0,a.kt)("inlineCode",{parentName:"p"},"Calc")," and adding a ",(0,a.kt)("inlineCode",{parentName:"p"},"subtract()")," method for the values we defined in the test case. Then we are exporting the class to use it outside of this module. "),(0,a.kt)("p",null,"Now, you can rerun the test with this command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm test\n")),(0,a.kt)("p",null,"If you implemented the subtract method correctly, then the test should pass as shown below:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"800px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/altname-pass.png",alt:"tdd vs bdd"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You have successfully written your first test case for one functionality in your application. If your test case fails, you can correct and refactor your code. Then, you can write and run more test cases for other functionalities like sum, average, division and more. "),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Next, we\u2019ll look at Behavior-Driven Development (BDD)")),(0,a.kt)("h2",{id:"overview-of-behavior-driven-development"},"Overview of Behavior-Driven Development"),(0,a.kt)("p",null,"BDD is another agile-based development process for creating tests that describe an application's expected behavior based on users\u2019 expectations. Compared to TDD, BDD focuses on meeting business needs and user requirements rather than simply passing tests."),(0,a.kt)("p",null,"With BDD, developers can create products focused on meeting users' needs based on their interactions with the product. The BDD approach encourages collaboration between product managers (usually in charge of defining the product's requirements), developers and testers. "),(0,a.kt)("p",null,"In BDD, developers can use testing tools such as ",(0,a.kt)("a",{parentName:"p",href:"https://cucumber.io/"},"Cucumber"),", ",(0,a.kt)("a",{parentName:"p",href:"https://specflow.org/"},"SpecFlow"),", ",(0,a.kt)("a",{parentName:"p",href:"https://behave.readthedocs.io/"},"Behave"),", and others to plan and write tests in a language known as ",(0,a.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/"},"Gherkin"),", which helps define the product's business requirements or specifications in a structured format using keywords in human-readable syntax."),(0,a.kt)("p",null,"See an illustration of the BDD workflow below:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/bdd-illustration.png",alt:"tdd vs bdd"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The BDD workflow, as illustrated above, consists of several stages, which are explained below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Identifying User Features"),": This is the first stage in BDD where the features that need to be developed are identified. The features are described here based on the users' expectations.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create Feature files"),": This stage entails creating files to document the application's features in a structured format that developers, product teams, and testers can understand using the Gherkin language. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Writing Scenarios"),": At this stage, test cases are defined in feature files with examples describing the expected behavior of the feature. The Gherkin language has a syntax for defining test cases.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Team Assessment"),":This is the stage at which the developers, product team, and testers collaborate to evaluate the feature files and scenarios created and defined in previous stages. The evaluation is performed to ensure that the defined scenarios align with the business requirements and the expectations of the users.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Writing Step Implementations"),": At this point, the implementation of the scenarios described in the Gherkin language begins. Developers write code in a specific programming language (e.g., JavaScript or Java) that depends on the BDD framework to map each step in the scenario to the corresponding actions that must be executed. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test Automation"),": After the steps defined in the scenarios are implemented, automated tests are written to run the scenarios by simulating user interactions with the application and determining whether the behavior matches the specifications in the scenarios. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Test Validation and Reporting"),": At this stage, the automated tests are run, and the outcome of the scenarios (whether fail or pass) are recorded for the developers, product team, and testers to review.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Continuous Development"),": As developers receive new requirements from users or the product team, updates are made to the feature files and scenarios, and the entire cycle (i.e. the previous BDD stages) is repeated until the expected behavior is achieved."))),(0,a.kt)("h3",{id:"pros-and-cons-of-bdd"},"Pros and cons of BDD"),(0,a.kt)("p",null,"BDD has several pros as well as cons. Here are a few:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Building Customer-centric Products"),": Products developed using the BDD approach are customer-centric because most of the features implemented are based on customer feedback. As a result, BDD ensures that the products align with and meet the customers' expectations. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Foster Collaboration and Transparency"),": The BDD approach provides transparency for developers, product teams, and testers to collaborate and understand the features defined, ensuring that they align with business requirements and user expectations. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Feedback-based"),": BDD depends on clear and effective communication between users and developers. When the communication channel is disrupted, the feature development process is hampered by a lack of collaboration between users and developers."))),(0,a.kt)("h2",{id:"step-by-step-demo-example-of-bdd-implementation"},"Step-by-step demo example of BDD implementation"),(0,a.kt)("p",null,"In this example, you\u2019ll learn how to create tests using the BDD approach. "),(0,a.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,a.kt)("p",null,"To follow along with this tutorial, you\u2019ll need the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Code editor (",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"Visual Studio Code editor"),")"),(0,a.kt)("li",{parentName:"ul"},"Terminal"),(0,a.kt)("li",{parentName:"ul"},"Basic knowledge of ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},"JavaScript")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Nodejs")," installed")),(0,a.kt)("p",null,"Let\u2019s start by creating a directory for the project. Open your terminal and run the following command to create a folder called ",(0,a.kt)("strong",{parentName:"p"},"bdd-project"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir bdd-project\n")),(0,a.kt)("p",null,"Open the project in your code editor. In the root project\u2019s directory, run the following command to initialize a new Node.js project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm init -y\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/installation/javascript/"},"Cucumber.js")," works with Node.js and is available as an npm module, so you\u2019ll use it as your testing framework. Within your project directory, run the following command to install Cucumber.js as a development dependency:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install --save-dev @cucumber/cucumber\n")),(0,a.kt)("p",null,"Next, create a folder called ",(0,a.kt)("strong",{parentName:"p"},"features")," with a file called ",(0,a.kt)("strong",{parentName:"p"},"auth.feature")," (the ",(0,a.kt)("strong",{parentName:"p"},".feature")," extension is compulsory) that will contain the scenarios you\u2019ll define.\nIn the ",(0,a.kt)("strong",{parentName:"p"},"auth.feature")," file, you\u2019ll use ",(0,a.kt)("a",{parentName:"p",href:"https://cucumber.io/docs/gherkin/reference/"},"keywords")," provided by the Gherkin Syntax to describe the behavior of logging into the application from the users\u2019 perspective as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="features/auth.feature"',title:'"features/auth.feature"'},'Feature: Login feature\nAs a customer\nI would like to log into the application\nSo that I can gain access to my account\n\nScenario: Successful login\nGiven I am at the login page\nWhen I type in my correct username and password\nAnd click the "Login" button\nThen I should be redirected to my home page\n')),(0,a.kt)("p",null,"The keywords used above are explained below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Feature"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#feature"},"Feature")," keyword is the first keyword that describes the feature in a short text."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scenario"),": This ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#example"},"Scenario")," keyword defines the specific test case that describes a particular behavior of the login feature. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Given"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#given"},"Given")," keyword specifies the initial state of the scenario. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"When"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#when"},"When")," keyword describes the action performed by the user on the login feature."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"And"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#and-but"},"And")," keyword adds more steps to the scenario that describe an action carried out by the user"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Then"),": The ",(0,a.kt)("a",{parentName:"li",href:"https://cucumber.io/docs/gherkin/reference/#then"},"Then")," keyword specifies the expected outcome after the previous steps have been executed in this scenario")),(0,a.kt)("p",null,"So far, you have defined steps in your feature file, next you\u2019ll need to map the steps to their respective code implementation. To do this, create a file called ",(0,a.kt)("strong",{parentName:"p"},"step_implement.js")," and paste the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="step_implement.js"',title:'"step_implement.js"'},"const { Given, When, Then, And } = require('@cucumber/cucumber');\n\nGiven('I am at the login page', function () {\n  // write code that navigates to the login page\n});\n\nWhen('I type in my correct username and password', function () {\n  // write code to enter valid user credentials\n});\n\nWhen('click the {string} button', function (buttonText) {\n  // write code to click on the specified button\n});\n\nThen('I should be redirected to my home page', function () {\n  // write code to verify the redirection to the home page\n});\n")),(0,a.kt)("p",null,"You're importing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Given"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"When"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Then"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"And")," keywords from the Cucumber npm module you installed and writing the code to implement all of the steps and actions defined in the Scenario."),(0,a.kt)("p",null,"To execute the steps defined in the feature file, create another file called configure.js that will contain the Cucumber.js configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="configure.js"',title:'"configure.js"'},"module.exports = {\n  default: '--format-options \\'{\"snippetInterface\": \"synchronous\"}\\'',\n};\n")),(0,a.kt)("p",null,"You're configuring the default options for the Cucumber.js test runner here by specifying the format of the output generated by Cucumber to synchronous."),(0,a.kt)("p",null,"In your ",(0,a.kt)("strong",{parentName:"p"},"package.json")," file, set your ",(0,a.kt)("strong",{parentName:"p"},"test")," script to this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="package.json"',title:'"package.json"'},'"test": "cucumber-js"\n')),(0,a.kt)("p",null,"Then, run the tests with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npx cucumber-js\n")),(0,a.kt)("p",null,"Once you run the command, the outcome should be displayed in your terminal as follows:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center",width:"800px"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/cucumber.png",alt:"TDD vs BDD"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The tests will pass once you add the appropriate code to implement the scenarios."),(0,a.kt)("h2",{id:"comparison-of-tdd-and-bdd"},"Comparison of TDD and BDD"),(0,a.kt)("p",null,"So far, you've learned what TDD and BDD are, what they entail, and how they work. Let's look at how they differ in various aspects, as shown in the table below:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-06-09-tdd-vs-bdd/comparing.png",alt:"TDD vs BDD"})),(0,a.kt)("br",null),(0,a.kt)("h1",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Finally, you've reached the end of this article, where you learned about Test-Driven Development (TDD) and Behavior-Driven Development (BDD), including what they entail, their principles, their benefits and drawbacks, and how they differ. You also saw TDD and BDD in action in a demo application."))}m.isMDXComponent=!0}}]);