console.log("this is working ")
function myfunc(p){
    console.log(p)
    var k = Number(localStorage.getItem("y"))
    setmyvar(p,k)
    if (k%2==1){
        document.getElementById(p).innerHTML="0"
        document.getElementById(p).disabled = true
        k=k+1
        localStorage.setItem("y",k);
    }
    else{
        document.getElementById(p).innerHTML="X"
        document.getElementById(p).disabled = true
        k=k+1
        localStorage.setItem("y",k);
    }
    test_result()
}
function setmyvar(p,k){
    console.log(p)
    console.log(k)
    // odd vala case 
    if(Number(k)%2==0)
    {
        if(p=='1'){
            localStorage.setItem('a',1)
        }
        if(p=='2'){
            localStorage.setItem('b',1)
        }
        if(p=='3'){
            localStorage.setItem('c',1)
        }
        if(p=='4'){
            localStorage.setItem('d',1)
        }
        if(p=='5'){
            localStorage.setItem('e',1)
        }
        if(p=='6'){
            localStorage.setItem('f',1)
        }
        if(p=='7'){
            localStorage.setItem('g',1)
        }
        if(p=='8'){
            localStorage.setItem('h',1)
        }
        if(p=='9'){
            localStorage.setItem('i',1)
        }
    }
    // even vala case
    else
    {
        if(p=='1'){
            localStorage.setItem('a',2)
        }
        if(p=='2'){
            localStorage.setItem('b',2)
        }
        if(p=='3'){
            localStorage.setItem('c',2)
        }
        if(p=='4'){
            localStorage.setItem('d',2)
        }
        if(p=='5'){
            localStorage.setItem('e',2)
        }
        if(p=='6'){
            localStorage.setItem('f',2)
        }
        if(p=='7'){
            localStorage.setItem('g',2)
        }
        if(p=='8'){
            localStorage.setItem('h',2)
        }
        if(p=='9'){
            localStorage.setItem('i',2)
        }
    }
}
function showresult(myvalue)
    {
        if(myvalue=='2')
        {
            console.log('Zero wins')
            document.getElementById('result').innerHTML="<h3>"+document.getElementById('p1').value+" wins"+"</h3>"
            document.getElementById('result').className="alert alert-primary mt-2"
            stop()
        }
        if(myvalue=='1')
        {
            console.log('Kata Win')
            document.getElementById('result').innerHTML="<h3>"+document.getElementById('p2').value+" wins"+"</h3>"
            document.getElementById('result').className="alert alert-primary mt-2"
            stop()
        }
    }
    function stop()
    {
        document.getElementById('1').disabled=true
        document.getElementById('2').disabled=true
        document.getElementById('3').disabled=true
        document.getElementById('4').disabled=true
        document.getElementById('5').disabled=true
        document.getElementById('6').disabled=true
        document.getElementById('7').disabled=true
        document.getElementById('8').disabled=true
        document.getElementById('9').disabled=true
    }
function test_result()
{
    var myresult = false
    var z1 = localStorage.getItem("a")
    var z2 = localStorage.getItem("b")
    var z3 = localStorage.getItem("c")
    var z4 = localStorage.getItem("d")
    var z5 = localStorage.getItem("e")
    var z6 = localStorage.getItem("f")
    var z7 = localStorage.getItem("g")
    var z8 = localStorage.getItem("h")
    var z9 = localStorage.getItem("i")
    var arr1 = [z1, z2, z3]
    var arr2 = [z4, z5, z6]
    var arr3 = [z7, z8, z9]
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)
    if(arr1[0]==arr1[1] && arr1[1]==arr1[2] && arr1[0]!='0' && arr1[1]!='0' && arr1[2]!='0')
    {
        showresult(z1)
        myresult = true
    }
    if(arr2[0]==arr2[1] && arr2[1]==arr2[2] && arr2[0]!='0' && arr2[1]!='0' && arr2[2]!='0')
    {
        showresult(z4)
        myresult = true
    }
    if(arr3[0]==arr3[1] && arr3[1]==arr3[2] && arr3[0]!='0' && arr3[1]!='0' && arr3[2]!='0')
    {
        showresult(z7)
        myresult = true
    }
    if(arr1[0]==arr2[0] && arr2[0]==arr3[0] && arr1[0]!='0' && arr2[0]!='0' && arr3[0]!='0')
    {
        showresult(z1)
        myresult = true
    }
    if(arr1[1]==arr2[1] && arr2[1]==arr3[1] && arr1[1]!='0' && arr2[1]!='0' && arr3[1]!='0')
    {
        showresult(z2)
        myresult = true
    }
    if(arr1[2]==arr2[2] && arr2[2]==arr3[2] && arr1[2]!='0' && arr2[2]!='0' && arr3[2]!='0')
    {
        showresult(z3)
        myresult = true
    }
    if(arr1[0]==arr2[1] && arr2[1]==arr3[2] && arr1[0]!='0' && arr2[1]!='0' && arr3[2]!='0')
    {
        showresult(z1)
        myresult = true
    }
    if(arr1[2]==arr2[1] && arr2[1]==arr3[0] && arr1[2]!='0' && arr2[1]!='0' && arr3[0]!='0')
    {
        showresult(z3)
        myresult = true
    }
    if(myresult==false && localStorage.getItem("y")=='10')
    {
        document.getElementById('result').innerHTML="<h3>"+"tie"+"</h3>"
        document.getElementById('result').className="alert alert-primary"
        stop()
    }
}
