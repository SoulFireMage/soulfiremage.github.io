[<Literal>]
let head = """<!--Template for a Connor lesson :) -->
<!DOCTYPE html>
<html>
<head>
<title>Summary_Lesson_1</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link type="text/css" rel="stylesheet" href="css/lesson.css">
    <script type="text/javascript" src="scripts/shCore.js"></script>
    <script type="text/javascript" src="scripts/shBrushCSharp.js"></script>
    <link type="text/css" rel="stylesheet" href="css/shCoreDefault.css"/>
     <link type="text/css" rel="stylesheet" href="css/main.css"/> 
    
    <script type="text/javascript">SyntaxHighlighter.all();</script>
    <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {inlineMath: [["$","$"],["\\(","\\)"]]}
    });
    </script>
    <script type="text/javascript" src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML-full"></script>
    <STYLE TYPE="text/css">
     
        @page { margin: 10px }
        body { margin: 10px ;}
         
    </STYLE>
</head>
<body>"""
let tail = """</body>
</html>"""

let divBox s = """<div class="box"><BR>""" + s + """<BR></div>"""
let box1 = "<p>This is a sample of a template I'll be using to build more lessons in the future.</p><p>Right now, this concept map covers the things I'm interested in studying and bringing together</p>"	
let box2 = "<h3>Long Term - Ten Year personal plan</h3><br><p>To bring in the various skills required to produce a smart flying AI companion</p>"
let box3 = "<h3>Skills needed</h3><ol><li>Fundemental Coding skills</li><li>Machine learning</li><li>Higher maths</li></ol>"
let allBoxs =   [box1;box2;box3] |> List.fold(fun a x -> a + "\n" + divBox x ) ""  

printfn "%A" (head + allBoxs + tail)