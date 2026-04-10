function name_of_fxn() {
  document.getElementById("heading1").innerText = "HELLO MITRO.THEEK OO?";
}
//yehi line bahar chal rahi hee but iss fxn mee nahi.so jo fxn ke andar ka logic automatically nahi chalta hota hee usko call krne padta hee call karne pee hi execute hota hee woh..isiliye we create fxn tanki khud se ee execute naa hoo.jab ham call kare toh hi execute ho

function DisplayHTML() {
  // document.getElementById("block") //id here is block
  document.getElementById("block").innerHTML = "<h1>HELLO MITRO.THEEK OO?</h1><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Optio eaque illod</p>";
  //jado iko line ch howy saara heading ty paragraph wala code te double quotes
  //  ch likh sakde aa jiwen hun line8 de vich hi waa sara code inner html wala.
  // je 2 lines ch wa jan uss ton jada phir backticks laun di jarurat paindi aa
}
// innerHTML="<h1>HELLO MITRO.THEEK OO?</h1>
// <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Optio eaque illod</p>";}
// in inner html here no "" no'' here we will us ``(button just below esc called as bacticks)and "" double quotes work only agar Aap poora HTML content ek hi line mein likh rahe ho... But agar aap multi-line ya multiple tags likhne jao, tab dikkat aayegi..Kyuki double quotes " " multi-line handle nahi kar sakte.
// Reason: Backticks allow multi-line string + preserve tags properly.
//  }

// document.getElementById("block").innerText="<h1>HELLO MITRO.THEEK OO?</h1>"; so tag ko bhi as a text bana ke display karwa diyaa hee naa ki as an html usko render karwaya usne..
// on using innerText innstead of inner HTML YEH <h1>HELLO MITRO.THEEK OO?</h1> output aa jayegi.So inner text sirf text display karwany ke kaam aata hee

// heading aur paragraph ko "" mein enclose karke daal diya
function imageChange() {
  document.getElementById("image").src = "../phone3dimage.jpg";
  // jo src se path likhte thee woh directly upar=""daal ke likh diya likhne ka format html jaisa hi thaa "../"; use kar kee
}
function videoChange() {
  document.getElementById("video").src = "../samplevideo2.mp4";
}
