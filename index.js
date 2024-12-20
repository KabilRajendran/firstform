function beforesubmit(){
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log(outputdate,inputdate);
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatteddate;
}