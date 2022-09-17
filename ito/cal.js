
function acale() {
    setTimeout("acale()",100);
    const form = document.forms['aform'];
    var aweapon = parseFloat(form.elements.aweapon.value);
    var acollection = parseFloat(form.elements.acollection.value);
    var acollection2 = parseFloat(form.elements.acollection2.value);
    var acollection3 = parseInt(form.elements.acollection3.value);//固
    var acollection4 = parseInt(form.elements.acollection4.value);//固
    var afrp = parseFloat(form.elements.afrp.value);
    var afrpp = parseFloat(form.elements.afrpp.value);
    var afrf = parseInt(form.elements.afrf.value);
    var afrff = parseInt(form.elements.afrff.value);
    var asrp = parseFloat(form.elements.asrp.value);
    var asrpp = parseFloat(form.elements.asrpp.value);
    var asrf = parseInt(form.elements.asrf.value);
    var asrff = parseInt(form.elements.asrff.value);
    var amrp = parseFloat(form.elements.amrp.value);
    var amrpp = parseFloat(form.elements.amrpp.value);
    var amrppp = parseFloat(form.elements.amrppp.value);
    var amrf = parseInt(form.elements.amrf.value);
    var amrff = parseInt(form.elements.amrff.value);
    var amrfff = parseInt(form.elements.amrfff.value);
    var aatt = parseInt(form.elements.aatt.value);
    var acombination = parseFloat(form.elements.acombination.value);
//                         0       1          2             3           4           5     6    7   8     9     10   11    12   13   14    15    16    17    18     19     20                           
    var nv = new Array(aweapon,acollection,acollection2,acollection3,acollection4,afrp,afrpp,afrf,afrff,asrp,asrpp,asrf,asrff,amrp,amrpp,amrppp,amrf,amrff,amrfff,aatt,acombination)   
    for(var i=0;i<21;i++){
        nv[i] = +nv[i] || 0;       
    } 

    var abase1 = nv[19]+nv[7]+nv[8]+nv[11]+nv[12]+nv[16]+nv[17]+nv[18]+nv[3]+nv[4];
    var abase2 = nv[0]+nv[1]+nv[2]+nv[5]+nv[6]+nv[9]+nv[10]+nv[13]+nv[14]+nv[15];

    var matt = abase1*(1+(abase2/100))*(1+(nv[20]/100));

    mma.innerHTML = matt; 
}

/*function up() {
    if (document.getElementById("").value == "0" || document.getElementById("input").value == "") {
        document.getElementById("input").value = "";
    }
    else {
        document.getElementById("input").value = this.document.getElementById("input").value;
    }
}
function down() {
    if (document.getElementById("input").value == "0" || document.getElementById("input").value == "") {
        document.getElementById("input").value = "0";
    }
    else {
        document.getElementById("input").value = this.document.getElementById("input").value;
    }
}*/