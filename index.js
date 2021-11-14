document.addEventListener('DOMContentLoaded',()=>{
    //AJAX connect to my whoami API
    const xhr = new XMLHttpRequest();
    xhr.open("GET","https://boilerplate-project-headerparser.adrianburgoscol.repl.co/api/whoami");
    xhr.send();
    xhr.onload = ()=>{
        const json = JSON.parse(xhr.responseText);
        const keys = Object.keys(json);
        let header = "<h1><ul>";
        keys.forEach(element => {
            header+=`<li>${element}: ${json[element]}</li>`
        });
        header+="</ul></h1>"
        document.getElementsByTagName("header")[0].innerHTML = header;
    };
}); 