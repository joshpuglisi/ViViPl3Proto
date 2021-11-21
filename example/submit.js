function download(){
    var text = document.getElementById("my-text").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var text2 = document.getElementById("my-text2").value;
    text2 = text2.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob(["Damit " + text + ", moechte ich als " + text2], { type: "odt"});
    var anchor = document.createElement("a");
    anchor.download = "story.odt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
 }