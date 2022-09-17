
function cale() {
    setTimeout("cale()",100);
    const form = document.forms['form'];
    var armor = parseFloat(form.elements.armor.value);
    var collection = parseFloat(form.elements.collection.value);
    var collection2 = parseFloat(form.elements.collection2.value);
    var collection3 = parseInt(form.elements.collection3.value);//固
    var collection4 = parseInt(form.elements.collection4.value);//固
    var frp = parseFloat(form.elements.frp.value);
    var frpp = parseFloat(form.elements.frpp.value);
    var frf = parseInt(form.elements.frf.value);
    var frff = parseInt(form.elements.frff.value);
    var srp = parseFloat(form.elements.srp.value);
    var srpp = parseFloat(form.elements.srpp.value);
    var srf = parseInt(form.elements.srf.value);
    var srff = parseInt(form.elements.srff.value);
    var mrp = parseFloat(form.elements.mrp.value);
    var mrpp = parseFloat(form.elements.mrpp.value);
    var mrppp = parseFloat(form.elements.mrppp.value);
    var mrf = parseInt(form.elements.mrf.value);
    var mrff = parseInt(form.elements.mrff.value);
    var mrfff = parseInt(form.elements.mrfff.value);
    var hp = parseInt(form.elements.hp.value);
    var combination = parseFloat(form.elements.combination.value);
//                        0      1          2           3           4        5    6   7   8    9   10   11  12   13  14   15   16   17   18   19   20                    
    var nv = new Array(armor,collection,collection2,collection3,collection4,frp,frpp,frf,frff,srp,srpp,srf,srff,mrp,mrpp,mrppp,mrf,mrff,mrfff,hp,combination)   
    for(var i=0;i<21;i++){
        nv[i] = +nv[i] || 0;       
    } 
    var hbase1 = nv[19]+nv[7]+nv[8]+nv[12]+nv[11]+nv[17]+nv[16]+nv[18]+nv[3]+nv[4];
    var hbase2 = nv[0]+nv[1]+nv[2]+nv[5]+nv[6]+nv[9]+nv[10]+nv[14]+nv[15]+nv[13];

    var mhp = hbase1*(1+(hbase2/100))*(1+(nv[20]/100));

    mmh.innerHTML = mhp;
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