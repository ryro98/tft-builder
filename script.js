let katalogchamp = [];
let katalogorigin = [];
let katalogclass = [];
let katalogoriginclass = [];
let synergiescheck = 0;
let champitemsconst = false;

function generujplansze() {
    let tabela1 = document.createElement("TABLE");
    tabela1.setAttribute("id","tabela1");
    tabela1.style.float = "right";
    let tabela2 = document.createElement("TABLE");
    tabela2.setAttribute("id","tabela2");
    tabela2.style.float = "left";
    tabela2.style.marginLeft = "2px";
    let tabela3 = document.createElement("TABLE");
    tabela3.setAttribute("id","tabela3");
    tabela3.style.float = "right";
    for (let y = 1; y <= 3; y++) {
        let tr = document.createElement("TR");
        for (let x = 1; x <= 7; x++) {
            let td = document.createElement("TD");
            td.setAttribute("id", "plansza" + y + "." + x);
            td.setAttribute("ondrop", 'drop(event)');
            td.setAttribute("ondragover", 'allowDrop(event)');
            tr.appendChild(td);
        }
        if (y === 1) tabela1.appendChild(tr);
        if (y === 2) tabela2.appendChild(tr);
        if (y === 3) tabela3.appendChild(tr);
    }
    document.getElementById("plansza").appendChild(tabela1);
    document.getElementById("plansza").appendChild(tabela2);
    document.getElementById("plansza").appendChild(tabela3);
}

function generujchampitems() {
    let tabela = document.createElement("DIV");
    tabela.style.position = "absolute";
    tabela.style.top = "17px";
    tabela.style.left = "31px";
    tabela.style.border = "none";
    let tr = document.createElement("TR");
    for (let x = 1; x <= 3; x++) {
        let td = document.createElement("TD");
        td.setAttribute("id","champitem" + x);
        td.style.width = "46px";
        td.style.height = "48px";
        tr.appendChild(td);
    }
    tabela.appendChild(tr);
    document.getElementById("champitems").appendChild(tabela);
}

function generujkarte() {
    let nazwa = document.createElement("DIV");
    nazwa.setAttribute("id","nazwa");
    nazwa.style.width = "91%";
    nazwa.style.height = "12%";
    nazwa.style.fontSize = "35px";
    nazwa.style.paddingTop = "5px";
    let koszt = document.createElement("DIV");
    koszt.setAttribute("id","koszt");
    koszt.style.width = "8.5%";
    koszt.style.height = "12%";
    koszt.style.fontSize = "35px";
    koszt.style.fontWeight = "bold";
    koszt.style.paddingTop = "5px";
    let champobraz = document.createElement("DIV");
    champobraz.setAttribute("id","champobraz");
    champobraz.style.position = "absolute";
    champobraz.style.top = "4px";
    champobraz.style.right = "70px";
    champobraz.style.width = "46px";
    champobraz.style.height = "46px";
    let origintytul = document.createElement("DIV");
    origintytul.setAttribute("id","origintytul");
    origintytul.style.width = "100%";
    origintytul.style.height = "40%";
    origintytul.style.fontSize = "20px";
    origintytul.style.paddingTop = "5px";
    origintytul.innerHTML = "Origin";
    let origintext = document.createElement("DIV");
    origintext.setAttribute("id","origintext");
    origintext.style.width = "100%";
    origintext.style.height = "60%";
    origintext.style.clear = "both";
    origintext.style.fontSize = "20px";
    let origin = document.createElement("DIV");
    origin.setAttribute("id","origin");
    origin.style.width = "25%";
    origin.style.height = "15%";
    origin.style.clear = "both";
    origin.appendChild(origintytul);
    origin.appendChild(origintext);
    let origin2tytul = document.createElement("DIV");
    origin2tytul.setAttribute("id","origin2tytul");
    origin2tytul.style.width = "100%";
    origin2tytul.style.height = "40%";
    origin2tytul.style.fontSize = "20px";
    origin2tytul.style.paddingTop = "5px";
    let origin2text = document.createElement("DIV");
    origin2text.setAttribute("id","origin2text");
    origin2text.style.width = "100%";
    origin2text.style.height = "60%";
    origin2text.style.clear = "both";
    origin2text.style.fontSize = "20px";
    let origin2 = document.createElement("DIV");
    origin2.setAttribute("id","origin2");
    origin2.style.width = "25%";
    origin2.style.height = "15%";
    origin2.appendChild(origin2tytul);
    origin2.appendChild(origin2text);
    let klasatytul = document.createElement("DIV");
    klasatytul.setAttribute("id","klasatytul");
    klasatytul.style.width = "100%";
    klasatytul.style.height = "40%";
    klasatytul.style.fontSize = "20px";
    klasatytul.style.paddingTop = "5px";
    klasatytul.innerHTML = "Class";
    let klasatext = document.createElement("DIV");
    klasatext.setAttribute("id","klasatext");
    klasatext.style.width = "100%";
    klasatext.style.height = "60%";
    klasatext.style.clear = "both";
    klasatext.style.fontSize = "20px";
    let klasa = document.createElement("DIV");
    klasa.setAttribute("id","klasa");
    klasa.style.width = "25%";
    klasa.style.height = "15%";
    klasa.appendChild(klasatytul);
    klasa.appendChild(klasatext);
    let klasa2tytul = document.createElement("DIV");
    klasa2tytul.setAttribute("id","klasa2tytul");
    klasa2tytul.style.width = "100%";
    klasa2tytul.style.height = "40%";
    klasa2tytul.style.fontSize = "20px";
    klasa2tytul.style.paddingTop = "5px";
    let klasa2text = document.createElement("DIV");
    klasa2text.setAttribute("id","klasa2text");
    klasa2text.style.width = "100%";
    klasa2text.style.height = "60%";
    klasa2text.style.clear = "both";
    klasa2text.style.fontSize = "20px";
    let klasa2 = document.createElement("DIV");
    klasa2.setAttribute("id","klasa2");
    klasa2.style.width = "25%";
    klasa2.style.height = "15%";
    klasa2.appendChild(klasa2tytul);
    klasa2.appendChild(klasa2text);
    let health = document.createElement("DIV");
    health.setAttribute("id","health");
    health.style.width = "14.1%";
    health.style.height = "10%";
    health.style.marginTop = "10px";
    health.style.lineHeight = "20px";
    health.style.marginLeft = "5px";
    let ad = document.createElement("DIV");
    ad.setAttribute("id","ad");
    ad.style.width = "14.1%";
    ad.style.height = "10%";
    ad.style.marginTop = "10px";
    ad.style.lineHeight = "20px";
    let dps = document.createElement("DIV");
    dps.setAttribute("id","dps");
    dps.style.width = "14.1%";
    dps.style.height = "10%";
    dps.style.marginTop = "10px";
    dps.style.lineHeight = "20px";
    let attackrange = document.createElement("DIV");
    attackrange.setAttribute("id","attackrange");
    attackrange.style.width = "14.1%";
    attackrange.style.height = "10%";
    attackrange.style.marginTop = "10px";
    attackrange.style.lineHeight = "20px";
    let as = document.createElement("DIV");
    as.setAttribute("id","as");
    as.style.width = "14.1%";
    as.style.height = "10%";
    as.style.marginTop = "10px";
    as.style.lineHeight = "20px";
    let armor = document.createElement("DIV");
    armor.setAttribute("id","armor");
    armor.style.width = "14.1%";
    armor.style.height = "10%";
    armor.style.marginTop = "10px";
    armor.style.lineHeight = "20px";
    let mr = document.createElement("DIV");
    mr.setAttribute("id","mr");
    mr.style.width = "14.1%";
    mr.style.height = "10%";
    mr.style.marginTop = "10px";
    mr.style.lineHeight = "20px";
    let skillimage = document.createElement("DIV");
    skillimage.setAttribute("id","skillimage");
    skillimage.style.width = "12%";
    skillimage.style.height = "56.3%";
    skillimage.style.paddingTop = "8px";
    let skillinfo = document.createElement("DIV");
    skillinfo.setAttribute("id","skillinfo");
    skillinfo.style.width = "86%";
    skillinfo.style.height = "56.3%";
    skillinfo.style.padding = "5px";
    skillinfo.style.textAlign = "left";
    skillinfo.style.lineHeight = "20px";

    nazwa.style.borderRight = "solid 2px rgb(6,30,54)";
    nazwa.style.borderBottom = "solid 2px rgb(6,30,54)";
    koszt.style.borderBottom = "solid 2px rgb(6,30,54)";
    origintext.style.borderBottom = "solid 2px rgb(6,30,54)";
    origin2text.style.borderBottom = "solid 2px rgb(6,30,54)";
    klasatext.style.borderBottom = "solid 2px rgb(6,30,54)";
    klasa2text.style.borderBottom = "solid 2px rgb(6,30,54)";
    health.style.borderBottom = "solid 2px rgb(6,30,54)";
    ad.style.borderBottom = "solid 2px rgb(6,30,54)";
    dps.style.borderBottom = "solid 2px rgb(6,30,54)";
    attackrange.style.borderBottom = "solid 2px rgb(6,30,54)";
    as.style.borderBottom = "solid 2px rgb(6,30,54)";
    armor.style.borderBottom = "solid 2px rgb(6,30,54)";
    mr.style.borderBottom = "solid 2px rgb(6,30,54)";
    skillimage.style.borderRight = "solid 2px rgb(6,30,54)";

    document.getElementById("karta").appendChild(nazwa);
    document.getElementById("karta").appendChild(champobraz);
    document.getElementById("karta").appendChild(koszt);
    document.getElementById("karta").appendChild(origin);
    document.getElementById("karta").appendChild(origin2);
    document.getElementById("karta").appendChild(klasa);
    document.getElementById("karta").appendChild(klasa2);
    document.getElementById("karta").appendChild(health);
    document.getElementById("karta").appendChild(ad);
    document.getElementById("karta").appendChild(dps);
    document.getElementById("karta").appendChild(attackrange);
    document.getElementById("karta").appendChild(as);
    document.getElementById("karta").appendChild(armor);
    document.getElementById("karta").appendChild(mr);
    document.getElementById("karta").appendChild(skillimage);
    document.getElementById("karta").appendChild(skillinfo);
    document.getElementById("karta").style.visibility = "hidden";
}

function generujsynergie() {
    let syndemon = document.createElement("DIV");
    syndemon.setAttribute("id","syndemon");
    syndemon.ile = 0;
    syndemon.addEventListener("mouseenter",showsynergy);
    syndemon.addEventListener("mouseleave",hidesynergy);
    syndemon.innerHTML = "Demon";
    let syndragon = document.createElement("DIV");
    syndragon.setAttribute("id","syndragon");
    syndragon.ile = 0;
    syndragon.addEventListener("mouseenter",showsynergy);
    syndragon.addEventListener("mouseleave",hidesynergy);
    syndragon.innerHTML = "Dragon";
    let synexile = document.createElement("DIV");
    synexile.setAttribute("id","synexile");
    synexile.ile = 0;
    synexile.addEventListener("mouseenter",showsynergy);
    synexile.addEventListener("mouseleave",hidesynergy);
    synexile.innerHTML = "Exile";
    let synglacial = document.createElement("DIV");
    synglacial.setAttribute("id","synglacial");
    synglacial.ile = 0;
    synglacial.addEventListener("mouseenter",showsynergy);
    synglacial.addEventListener("mouseleave",hidesynergy);
    synglacial.innerHTML = "Glacial";
    let synhextech = document.createElement("DIV");
    synhextech.setAttribute("id","synhextech");
    synhextech.ile = 0;
    synhextech.addEventListener("mouseenter",showsynergy);
    synhextech.addEventListener("mouseleave",hidesynergy);
    synhextech.innerHTML = "Hextech";
    let synimperial = document.createElement("DIV");
    synimperial.setAttribute("id","synimperial");
    synimperial.ile = 0;
    synimperial.addEventListener("mouseenter",showsynergy);
    synimperial.addEventListener("mouseleave",hidesynergy);
    synimperial.innerHTML = "Imperial";
    let synninja = document.createElement("DIV");
    synninja.setAttribute("id","synninja");
    synninja.ile = 0;
    synninja.bonus = 0;
    synninja.multiplier = 1;
    synninja.addEventListener("mouseenter",showsynergy);
    synninja.addEventListener("mouseleave",hidesynergy);
    synninja.innerHTML = "Ninja";
    let synnoble = document.createElement("DIV");
    synnoble.setAttribute("id","synnoble");
    synnoble.ile = 0;
    synnoble.addEventListener("mouseenter",showsynergy);
    synnoble.addEventListener("mouseleave",hidesynergy);
    synnoble.innerHTML = "Noble";
    let synphantom = document.createElement("DIV");
    synphantom.setAttribute("id","synphantom");
    synphantom.ile = 0;
    synphantom.addEventListener("mouseenter",showsynergy);
    synphantom.addEventListener("mouseleave",hidesynergy);
    synphantom.innerHTML = "Phantom";
    let synpirate = document.createElement("DIV");
    synpirate.setAttribute("id","synpirate");
    synpirate.ile = 0;
    synpirate.addEventListener("mouseenter",showsynergy);
    synpirate.addEventListener("mouseleave",hidesynergy);
    synpirate.innerHTML = "Pirate";
    let synrobot = document.createElement("DIV");
    synrobot.setAttribute("id","synrobot");
    synrobot.ile = 0;
    synrobot.addEventListener("mouseenter",showsynergy);
    synrobot.addEventListener("mouseleave",hidesynergy);
    synrobot.innerHTML = "Robot";
    let synvoid = document.createElement("DIV");
    synvoid.setAttribute("id","synvoid");
    synvoid.ile = 0;
    synvoid.addEventListener("mouseenter",showsynergy);
    synvoid.addEventListener("mouseleave",hidesynergy);
    synvoid.innerHTML = "Void";
    let synwild = document.createElement("DIV");
    synwild.setAttribute("id","synwild");
    synwild.ile = 0;
    synwild.addEventListener("mouseenter",showsynergy);
    synwild.addEventListener("mouseleave",hidesynergy);
    synwild.innerHTML = "Wild";
    let synyordle = document.createElement("DIV");
    synyordle.setAttribute("id","synyordle");
    synyordle.ile = 0;
    synyordle.addEventListener("mouseenter",showsynergy);
    synyordle.addEventListener("mouseleave",hidesynergy);
    synyordle.innerHTML = "Yordle";
    let synassassin = document.createElement("DIV");
    synassassin.setAttribute("id","synassassin");
    synassassin.ile = 0;
    synassassin.addEventListener("mouseenter",showsynergy);
    synassassin.addEventListener("mouseleave",hidesynergy);
    synassassin.innerHTML = "Assassin";
    let synblademaster = document.createElement("DIV");
    synblademaster.setAttribute("id","synblademaster");
    synblademaster.ile = 0;
    synblademaster.addEventListener("mouseenter",showsynergy);
    synblademaster.addEventListener("mouseleave",hidesynergy);
    synblademaster.innerHTML = "Blademaster";
    let synbrawler = document.createElement("DIV");
    synbrawler.setAttribute("id","synbrawler");
    synbrawler.ile = 0;
    synbrawler.addEventListener("mouseenter",showsynergy);
    synbrawler.addEventListener("mouseleave",hidesynergy);
    synbrawler.innerHTML = "Brawler";
    let synelementalist = document.createElement("DIV");
    synelementalist.setAttribute("id","synelementalist");
    synelementalist.ile = 0;
    synelementalist.addEventListener("mouseenter",showsynergy);
    synelementalist.addEventListener("mouseleave",hidesynergy);
    synelementalist.innerHTML = "Elementalist";
    let synguardian = document.createElement("DIV");
    synguardian.setAttribute("id","synguardian");
    synguardian.ile = 0;
    synguardian.addEventListener("mouseenter",showsynergy);
    synguardian.addEventListener("mouseleave",hidesynergy);
    synguardian.innerHTML = "Guardian";
    let syngunslinger = document.createElement("DIV");
    syngunslinger.setAttribute("id","syngunslinger");
    syngunslinger.ile = 0;
    syngunslinger.addEventListener("mouseenter",showsynergy);
    syngunslinger.addEventListener("mouseleave",hidesynergy);
    syngunslinger.innerHTML = "Gunslinger";
    let synknight = document.createElement("DIV");
    synknight.setAttribute("id","synknight");
    synknight.ile = 0;
    synknight.addEventListener("mouseenter",showsynergy);
    synknight.addEventListener("mouseleave",hidesynergy);
    synknight.innerHTML = "Knight";
    let synranger = document.createElement("DIV");
    synranger.setAttribute("id","synranger");
    synranger.ile = 0;
    synranger.addEventListener("mouseenter",showsynergy);
    synranger.addEventListener("mouseleave",hidesynergy);
    synranger.innerHTML = "Ranger";
    let synshapeshifter = document.createElement("DIV");
    synshapeshifter.setAttribute("id","synshapeshifter");
    synshapeshifter.ile = 0;
    synshapeshifter.addEventListener("mouseenter",showsynergy);
    synshapeshifter.addEventListener("mouseleave",hidesynergy);
    synshapeshifter.innerHTML = "Shapeshifter";
    let synsorcerer = document.createElement("DIV");
    synsorcerer.setAttribute("id","synsorcerer");
    synsorcerer.ile = 0;
    synsorcerer.addEventListener("mouseenter",showsynergy);
    synsorcerer.addEventListener("mouseleave",hidesynergy);
    synsorcerer.innerHTML = "Sorcerer";

    document.getElementById("teamcomp").appendChild(syndemon);
    document.getElementById("teamcomp").appendChild(syndragon);
    document.getElementById("teamcomp").appendChild(synexile);
    document.getElementById("teamcomp").appendChild(synglacial);
    document.getElementById("teamcomp").appendChild(synhextech);
    document.getElementById("teamcomp").appendChild(synimperial);
    document.getElementById("teamcomp").appendChild(synninja);
    document.getElementById("teamcomp").appendChild(synnoble);
    document.getElementById("teamcomp").appendChild(synphantom);
    document.getElementById("teamcomp").appendChild(synpirate);
    document.getElementById("teamcomp").appendChild(synrobot);
    document.getElementById("teamcomp").appendChild(synvoid);
    document.getElementById("teamcomp").appendChild(synwild);
    document.getElementById("teamcomp").appendChild(synyordle);
    document.getElementById("teamcomp").appendChild(synassassin);
    document.getElementById("teamcomp").appendChild(synblademaster);
    document.getElementById("teamcomp").appendChild(synbrawler);
    document.getElementById("teamcomp").appendChild(synelementalist);
    document.getElementById("teamcomp").appendChild(synguardian);
    document.getElementById("teamcomp").appendChild(syngunslinger);
    document.getElementById("teamcomp").appendChild(synknight);
    document.getElementById("teamcomp").appendChild(synranger);
    document.getElementById("teamcomp").appendChild(synshapeshifter);
    document.getElementById("teamcomp").appendChild(synsorcerer);

    for (let x = 0; x < document.getElementById("teamcomp").childElementCount; x++) {
        document.getElementById("teamcomp").children[x].style.backgroundImage = "url(./originclass/" + document.getElementById("teamcomp").children[x].id.slice(3,15) + ".png)";
        document.getElementById("teamcomp").children[x].priority = 0;
        katalogoriginclass.push(document.getElementById("teamcomp").children[x]);
    }
}

function generujitemsheet() {
    let tabela = document.createElement("TABLE");
    for (let y = 1; y <= 9; y++) {
        let tr = document.createElement("TR");
        for (let x = 1; x <= 9; x++) {
            let td = document.createElement("TD");
            td.setAttribute("id","item" + y + "." + x);
            let item = document.createElement("IMG");
            if (y === 1 && x === 1) td.style.border = "none";
            if ((y === 1 && x === 2) || (y === 2 && x === 1)) item.setAttribute("src","./items/components/sword.png");
            if ((y === 1 && x === 3) || (y === 3 && x === 1)) item.setAttribute("src","./items/components/bow.png");
            if ((y === 1 && x === 4) || (y === 4 && x === 1)) item.setAttribute("src","./items/components/rod.png");
            if ((y === 1 && x === 5) || (y === 5 && x === 1)) item.setAttribute("src","./items/components/tear.png");
            if ((y === 1 && x === 6) || (y === 6 && x === 1)) item.setAttribute("src","./items/components/vest.png");
            if ((y === 1 && x === 7) || (y === 7 && x === 1)) item.setAttribute("src","./items/components/cloak.png");
            if ((y === 1 && x === 8) || (y === 8 && x === 1)) item.setAttribute("src","./items/components/belt.png");
            if ((y === 1 && x === 9) || (y === 9 && x === 1)) item.setAttribute("src","./items/components/spatula.png");
            if (y === 2 && x === 2) item.setAttribute("src","./items/full/infinity_edge.png");
            if ((y === 2 && x === 3) || (y === 3 && x === 2)) item.setAttribute("src","./items/full/sword_of_the_divine.png");
            if ((y === 2 && x === 4) || (y === 4 && x === 2)) item.setAttribute("src","./items/full/hextech_gunblade.png");
            if ((y === 2 && x === 5) || (y === 5 && x === 2)) item.setAttribute("src","./items/full/spear_of_shojin.png");
            if ((y === 2 && x === 6) || (y === 6 && x === 2)) item.setAttribute("src","./items/full/guardian_angel.png");
            if ((y === 2 && x === 7) || (y === 7 && x === 2)) item.setAttribute("src","./items/full/the_bloodthirster.png");
            if ((y === 2 && x === 8) || (y === 8 && x === 2)) item.setAttribute("src","./items/full/zeke's_herald.png");
            if ((y === 2 && x === 9) || (y === 9 && x === 2)) item.setAttribute("src","./items/full/youmuu's_ghostblade.png");
            if (y === 3 && x === 3) item.setAttribute("src","./items/full/rapid_firecannon.png");
            if ((y === 3 && x === 4) || (y === 4 && x === 3)) item.setAttribute("src","./items/full/guinsoo's_rageblade.png");
            if ((y === 3 && x === 5) || (y === 5 && x === 3)) item.setAttribute("src","./items/full/statikk_shiv.png");
            if ((y === 3 && x === 6) || (y === 6 && x === 3)) item.setAttribute("src","./items/full/phantom_dancer.png");
            if ((y === 3 && x === 7) || (y === 7 && x === 3)) item.setAttribute("src","./items/full/cursed_blade.png");
            if ((y === 3 && x === 8) || (y === 8 && x === 3)) item.setAttribute("src","./items/full/titanic_hydra.png");
            if ((y === 3 && x === 9) || (y === 9 && x === 3)) item.setAttribute("src","./items/full/botrk.png");
            if (y === 4 && x === 4) item.setAttribute("src","./items/full/rabadon's_deathcap.png");
            if ((y === 4 && x === 5) || (y === 5 && x === 4)) item.setAttribute("src","./items/full/luden's_echo.png");
            if ((y === 4 && x === 6) || (y === 6 && x === 4)) item.setAttribute("src","./items/full/locket_of_the_iron_solari.png");
            if ((y === 4 && x === 7) || (y === 7 && x === 4)) item.setAttribute("src","./items/full/ionic_spark.png");
            if ((y === 4 && x === 8) || (y === 8 && x === 4)) item.setAttribute("src","./items/full/morellonomicon.png");
            if ((y === 4 && x === 9) || (y === 9 && x === 4)) item.setAttribute("src","./items/full/yuumi.png");
            if (y === 5 && x === 5) item.setAttribute("src","./items/full/seraph's_embrace.png");
            if ((y === 5 && x === 6) || (y === 6 && x === 5)) item.setAttribute("src","./items/full/frozen_heart.png");
            if ((y === 5 && x === 7) || (y === 7 && x === 5)) item.setAttribute("src","./items/full/hush.png");
            if ((y === 5 && x === 8) || (y === 8 && x === 5)) item.setAttribute("src","./items/full/redemption.png");
            if ((y === 5 && x === 9) || (y === 9 && x === 5)) item.setAttribute("src","./items/full/darkin.png");
            if (y === 6 && x === 6) item.setAttribute("src","./items/full/thornmail.png");
            if ((y === 6 && x === 7) || (y === 7 && x === 6)) item.setAttribute("src","./items/full/sword_breaker.png");
            if ((y === 6 && x === 8) || (y === 8 && x === 6)) item.setAttribute("src","./items/full/red_buff.png");
            if ((y === 6 && x === 9) || (y === 9 && x === 6)) item.setAttribute("src","./items/full/knight's_vow.png");
            if (y === 7 && x === 7) item.setAttribute("src","./items/full/dragon's_claw.png");
            if ((y === 7 && x === 8) || (y === 8 && x === 7)) item.setAttribute("src","./items/full/zephyr.png");
            if ((y === 7 && x === 9) || (y === 9 && x === 7)) item.setAttribute("src","./items/full/runaan's_hurricane.png");
            if (y === 8 && x === 8) item.setAttribute("src","./items/full/warmog's_armor.png");
            if ((y === 8 && x === 9) || (y === 9 && x === 8)) item.setAttribute("src","./items/full/frozen_mallet.png");
            if (y === 9 && x === 9) item.setAttribute("src","./items/full/force_of_nature.png");
            item.addEventListener("mouseenter",showitem);
            item.addEventListener("mouseleave",hideitem);
            item.setAttribute("ondrop", 'drop(event)');
            item.setAttribute("ondragover", 'allowDrop(event)');
            td.appendChild(item);
            tr.appendChild(td);
        }
        tabela.appendChild(tr);
    }
    document.getElementById("itemsheet").appendChild(tabela);
}

function generujitemsheetinfo() {
    let itemnazwa = document.createElement("DIV");
    itemnazwa.setAttribute("id","itemnazwa");
    itemnazwa.style.width = "85%";
    itemnazwa.style.height = "30%";
    let itemlogo = document.createElement("DIV");
    itemlogo.setAttribute("id","itemlogo");
    itemlogo.style.width = "15%";
    itemlogo.style.height = "30%";
    let itemopis = document.createElement("DIV");
    itemopis.setAttribute("id","itemopis");
    itemopis.style.width = "100%";
    itemopis.style.height = "70%";

    document.getElementById("itemsheetinfo").appendChild(itemnazwa);
    document.getElementById("itemsheetinfo").appendChild(itemlogo);
    document.getElementById("itemsheetinfo").appendChild(itemopis);
}

function bazachamp() {
    function champ(nazwa,koszt,origin,origin2,klasa,klasa2,zdj,health1,ad1,attackrange,as,ap,armor,mr,skillname,skillimage,manastart,skillmana,skillinfo) {
        return {
            nazwa,
            koszt,
            origin,
            origin2,
            klasa,
            klasa2,
            zdj,
            health1,
            ad1,
            attackrange,
            as,
            ap,
            armor,
            mr,
            skillname,
            skillimage,
            manastart,
            skillmana,
            skillinfo
        }
    }

    const aatrox = champ("Aatrox",3,"demon",null,"blademaster",null,"./champs/aatrox.png",700,65,"melee",0.65,0,25,20,"The Darkin Blade","./champs/skills/aatrox.png",0,75,"Aatrox cleaves the area in front of him, dealing damage to enemies inside it.<br>Damage: 300 / 600 / 900");
    const ahri = champ("Ahri",2,"wild",null,"sorcerer",null,"./champs/ahri.png",450,50,3,0.55,0,20,20,"Orb of Deception","./champs/skills/ahri.png",0,75,"Ahri fires an orb in a line that returns to her, damages enemies it passes through.<br>Damage: 100 / 200 / 300");
    const akali = champ("Akali",4,"ninja",null,"assassin",null,"./champs/akali.png",700,80,"melee",0.75,0,20,20,"Five Point Strike","./champs/skills/akali.png",0,25,"Akali throws shurikens in front of her, dealing damage. This spell can crit.<br>Damage: 150 / 275 / 400");
    const anivia = champ("Anivia",5,"glacial",null,"elementalist",null,"./champs/anivia.png",700,40,3,0.6,0,20,20,"Glacial Storm","./champs/skills/anivia.png",0,100,"Anivia channels a large hailstorm, damaging and slowing the attack speed of enemies inside of it.<br>Total Damage: 700 / 950 / 1200<br>Attack Speed reduction: 50% / 70% / 90%");
    const ashe = champ("Ashe",3,"glacial",null,"ranger",null,"./champs/ashe.png",550,65,4,0.7,0,20,20,"Enchanted Crystal Arrow","./champs/skills/ashe.png",0,100,"Ashe fires an arrow the stuns and damages the farthest enemy. The stun is longer the farther the enemy is.<br>Damage: 200 / 400 / 600<br>Stun duration: 1 / 1.5 / 2");
    const aurelion_sol = champ("Aurelion Sol",4,"dragon",null,"sorcerer",null,"./champs/aurelion_sol.png",650,40,3,0.6,0,20,20,"Voice of Light","./champs/skills/aurelion_sol.png",0,125,"Aurelion Sol breathes a large of fire in a line, dealing damage to enemies.<br>Damage: 250 / 500 / 750");
    const blitzcrank = champ("Blitzcrank",2,"robot",null,"brawler",null,"./champs/blitzcrank.png",600,50,"melee",0.5,0,35,20,"Rocket Grab","./champs/skills/blitzcrank.png",0,125,"Blitzcrank pulls the furthest enemy to him and stuns them for 2.5s. Next attack will knockup enemy.<br>Damage: 100 / 450 / 800");
    const brand = champ("Brand",4,"demon",null,"elementalist",null,"./champs/brand.png",700,60,3,0.6,0,25,20,"Pyroclasm","./champs/skills/brand.png",50,150,"Brand launches a bouncing fireball, damaging enemies hit.<br>Damage: 250 / 450 / 650<br>Max Bounces: 4 / 6 / 20");
    const braum = champ("Braum",2,"glacial",null,"guardian",null,"./champs/braum.png",650,40,"melee",0.6,0,75,20,"Unbreakable","./champs/skills/braum.png",0,50,"Braum gains a barrier that blocks incoming damage.<br>Damage Reduction: 70% / 80% / 90%");
    const camille = champ("Camille",1,"hextech",null,"blademaster",null,"./champs/camille.png",550,50,"melee",0.6,0,30,20,"The Hextech Ultimatum","./champs/skills/camille.png",75,125,"Camille singles out an enemy, dealing magic damage and rooting them. Camille's allies in range will prioritize attacking that enemy.<br>Damage: 200 / 325 / 450<br>Rooting Duration: 4 / 5 / 6");
    const chogath = champ("Cho'Gath",4,"void",null,"brawler",null,"./champs/chogath.png",1000,70,"melee",0.6,0,20,20,"Rupture","./champs/skills/chogath.png",50,150,"Cho'Gath ruptures an area, knockup and damaging enemies inside of it.<br>Damage: 175 / 350 / 525<br>Knockup Duration: 1.5 / 1.75 / 2");
    const darius = champ("Darius",1,"imperial",null,"knight",null,"./champs/darius.png",600,50,"melee",0.5,0,40,20,"Decimate","./champs/skills/darius.png",0,100,"Darius swings his axe, damaging nearby enemies and healing himself based off enemies hit.<br>Damage: 150 / 200 / 250<br>Heal: 100 / 150 / 200");
    const draven = champ("Draven",4,"imperial",null,"blademaster",null,"./champs/draven.png",650,70,3,0.75,0,25,20,"Spinning Axes","./champs/skills/draven.png",0,50,"Draven gains Spinning Axes, dealing bonus on-hit damage. Stacks up to two times.<br>AD Scaling: 1.5 / 2 / 2.5");
    const elise = champ("Elise",1,"demon",null,"shapeshifter",null,"./champs/elise.png",500,45,2,0.6,0,20,20,"Spider Form","./champs/skills/elise.png",0,100,"Elise summons Spiderlings and transforms into melee, gaining Lifesteal.<br>Lifesteal: 60% / 90% / 120%<br>Num Spiderlings: 1 / 2 / 4");
    const evelynn = champ("Evelynn",3,"demon",null,"assassin",null,"./champs/evelynn.png",600,70,"melee",0.6,0,20,20,"Last Caress","./champs/skills/evelynn.png",0,75,"Evelynn deals damage to the 3 closest enemies and teleports away. Damage is increased against enemies with 65% or less health.<br>Damage: 200 / 300 / 400<br>Damage Multiplier: 300% / 500% / 700%");
    const fiora = champ("Fiora",1,"noble",null,"blademaster",null,"./champs/fiora.png",400,40,"melee",1.0,0,25,20,"Riposte","./champs/skills/fiora.png",0,75,"Fiora becomes immune to damage and spells. After a short delay, she stuns and damages the closest enemy.<br>Damage: 100 / 250 / 400");
    const gangplank = champ("Gangplank",3,"pirate",null,"blademaster","gunslinger","./champs/gangplank.png",700,55,"melee",0.65,0,20,20,"Powder Kegs","./champs/skills/gangplank.png",0,100,"Gangplank periodically creates barrels. On cast, Gangplank detonates the barrels, damaging nearby enemies. Applies on-hit effects.<br>Damage: 150 / 250 / 350");
    const garen = champ("Garen",1,"noble",null,"knight",null,"./champs/garen.png",600,50,"melee",0.6,0,40,20,"Judgement","./champs/skills/garen.png",0,100,"Garen spins his sword around for 4 seconds, becoming immune to magic damage and dealing damage to nearby enemies.<br>Damage per Tick: 40 / 65 / 90");
    const gnar = champ("Gnar",4,"wild","yordle","shapeshifter",null,"./champs/gnar.png",750,50,2,0.7,0,30,20,"GNAR!","./champs/skills/gnar.png",0,100,"Gnar transforms into melee, gaining health, AD and jumping behind the furthest enemy, damaging and stunning enemies nearby for 2 seconds.<br>Damage: 200 / 300 / 400<br>Transform Health: 300 / 600 / 900<br>Transform AD: 50 / 100 / 150");
    const graves = champ("Graves",1,"pirate",null,"gunslinger",null,"./champs/graves.png",450,55,"melee",0.55,0,20,20,"Buckshot","./champs/skills/graves.png",null,"No cost","Graves' attacks deal increased damage and hit all enemies in front of him.<br>Bonus Damage: 5% / 10% / 15%");
    const jayce = champ("Jayce",2,"hextech",null,"shapeshifter",null,"./champs/jayce.png",600,60,"melee",0.65,0,35,20,"Mercury Cannon","./champs/skills/jayce.png",50,100,"Jayce knocks away an enemy in melee range, dealing damage and stunning them. Then transforms his hammer into a cannon, increasing his attack range by 3 hexes and gaining max Attack Speed for a few attacks.<br>Damage: 200 / 350 / 500<br>Stun Duration: 2.5 / 4.25 / 6<br>Attacks: 3 / 5 / 7");
    const jinx = champ("Jinx",4,"hextech",null,"gunslinger",null,"./champs/jinx.png",550,75,3,0.65,0,20,20,"Get Excited!","./champs/skills/jinx.png",null,"No cost","Jinx gets excited as participates in kills: On her first takedown, she gains attack speed. On her second takedown, she swaps to her rocket launcher causing her attacks to deal bonus area damage.<br>Attack Speed: 60% / 80% / 100%<br>Damage: 100 / 200 / 300");
    const karthus = champ("Karthus",5,"phantom",null,"sorcerer",null,"./champs/karthus.png",850,65,3,0.65,0,25,20,"Requiem","./champs/skills/karthus.png",40,125,"Karthus deals damage to a number of random enemies after a long channel.<br>Damage: 350 / 600 / 850<br>Number of Targets: 5 / 7 / 9");
    const kassadin = champ("Kassadin",1,"void",null,"sorcerer",null,"./champs/kassadin.png",550,55,"melee",0.6,0,25,20,"Nether Blade","./champs/skills/kassadin.png",null,"No cost","Kassadin's attacks steal mana from enemies, converting it into a shield that lasts for 4 seconds.<br>Shield Amount: 20 / 40 / 60");
    const katarina = champ("Katarina",3,"imperial",null,"assassin",null,"./champs/katarina.png",450,65,"melee",0.65,0,20,20,"Death Lotus","./champs/skills/katarina.png",0,100,"Katarina channels for 2.5 seconds and fires daggers at a number of nearby enemies, dealing damage and reducing healing.<br>Damage: 40 / 60 / 80<br>Number of Targets: 4 / 6 / 8");
    const kayle = champ("Kayle",5,"noble",null,"knight",null,"./champs/kayle.png",750,70,3,1.0,0,40,20,"Divine Judgement","./champs/skills/kayle.png",50,125,"Kayle shields the weakest ally, making them immune to damage.<br>Damage: 500 / 800 / 1100<br>Duration: 2 / 2.5 / 3<br>Extra Targets: 0 / 1 / 2");
    const kennen = champ("Kennen",3,"ninja","yordle","elementalist",null,"./champs/kennen.png",550,70,2,0.65,0,20,20,"Slicing Maelstrom","./champs/skills/kennen.png",50,150,"Kennen summons a storm around him, dealing damage and stunning enemies inside of it for 1.5 seconds.<br>Damage: 225 / 450 / 675");
    const khazix = champ("Kha'Zix",1,"void",null,"assassin",null,"./champs/khazix.png",500,55,"melee",0.6,0,20,20,"Taste their Fear","./champs/skills/khazix.png",0,50,"Kha'Zix slashes the closest enemy, dealing bonus damage to enemies that are isolated.<br>Damage: 150 / 250 / 350<br>Isolation Damage: 400 / 600 / 800");
    const kindred = champ("Kindred",4,"phantom",null,"ranger",null,"./champs/kindred.png",600,60,3,0.65,0,20,20,"Lamb's Respite","./champs/skills/kindred.png",50,150,"Kindred create a zone around theyself that prevents allies from dying.<br>Duration: 4 / 5 / 6<br>Minimum Health: 300 / 600 / 900");
    const leona = champ("Leona",4,"noble",null,"guardian",null,"./champs/leona.png",750,45,"melee",0.55,0,100,20,"Solar Flare","./champs/skills/leona.png",50,100,"Leona calls down a solar ray that damages and slows enemies inside it. The enemy in the center is stunned.<br>Damage: 175/250/325<br>Duration: 5 / 7 / 9");
    const lissandra = champ("Lissandra",2,"glacial",null,"elementalist",null,"./champs/lissandra.png",500,40,2,0.6,0,20,20,"Frozen Tomb","./champs/skills/lissandra.png",0,85,"Lissandra encases the target in ice for 1.5 seconds, dealing damage to nearby enemies. Below half HP, Lissandra instead encases herself, becoming untargetable for 2 seconds.<br>Damage: 175 / 325 / 475");
    const lucian = champ("Lucian",2,"noble",null,"gunslinger",null,"./champs/lucian.png",600,65,3,0.65,0,25,20,"Relentless Pursuit","./champs/skills/lucian.png",0,35,"Lucian dashes away to safety, and attacks an enemy twice, once with AD and once with Spell Damage.<br>Damage: 100 / 225 / 350");
    const lulu = champ("Lulu",2,"yordle",null,"sorcerer",null,"./champs/lulu.png",500,50,2,0.6,0,20,20,"Wild Growth","./champs/skills/lulu.png",50,150,"Lulu grants allies bonus Health, knocking up enemies near them for 1.25 seconds.<br>Bonus Health: 300 / 400 / 500<br>Extra Targets: 0 / 1 / 2");
    const miss_fortune = champ("Miss Fortune",5,"pirate",null,"gunslinger",null,"./champs/miss_fortune.png",700,75,3,0.85,0,20,20,"Bullet Time","./champs/skills/miss_fortune.png",0,75,"Miss Fortune channels for 3 seconds, firing several waves of bullets damaging enemies in a cone.<br>Total Damage: 900 / 1300 / 1700");
    const mordekaiser = champ("Mordekaiser",1,"phantom",null,"knight",null,"./champs/mordekaiser.png",550,50,"melee",0.5,0,40,20,"Obliterate","./champs/skills/mordekaiser.png",0,100,"Mordekaiser slams his mace in front of him, dealing damage to two enemies in a line.<br>Damage: 200 / 325 / 450");
    const morgana = champ("Morgana",3,"demon",null,"sorcerer",null,"./champs/morgana.png",650,50,2,0.6,0,30,20,"Soul Shackles","./champs/skills/morgana.png",50,150,"Morgana fires chains to nearby enemies, dealing damage and stunning after a short delay if they are still nearby.<br>Damage: 175 / 300 / 425<br>Stun Duration: 2 / 4 / 6");
    const nidalee = champ("Nidalee",1,"wild",null,"shapeshifter",null,"./champs/nidalee.png",500,50,3,0.65,0,20,20,"Primal Surge","./champs/skills/nidalee.png",0,85,"Nidalee heals herself and the weakest ally, then transforms gaining AD.<br>Heal: 150 / 375 / 600<br>Transform AD: 20 / 70 / 120");
    const pantheon = champ("Pantheon",5,"dragon",null,"guardian",null,"./champs/pantheon.png",1000,80,"melee",0.75,0,80,20,"Grand Starfall","./champs/skills/pantheon.png",150,200,"Pantheon leaps in the air, crashing down towards the farthest enemy, stunning them for 2 seconds. Enemies in Pantheon's path take % of their maximum health as magic damage. Then they burn for an additional 20% of their maximum health as true damage over 10 seconds. Applies Grievous Wounds.<br>Damage: 10% / 20% / 30%");
    const poppy = champ("Poppy",3,"yordle",null,"knight",null,"./champs/poppy.png",800,50,"melee",0.5,0,40,20,"Keeper's Verdict","./champs/skills/poppy.png",0,75,"Poppy swings her hammer, damaging and knocking up the closest enemy.<br>Damage: 300 / 500 / 700<br>Stun Duration: 2 / 3 / 4<br> Number of Targets: 1 / 2 / 3");
    const pyke = champ("Pyke",2,"pirate",null,"assassin",null,"./champs/pyke.png",600,60,"melee",0.6,0,25,20,"Phantom Undertow","./champs/skills/pyke.png",75,125,"Pyke dashes nehind the furthest enemy, creating an afterimage that stuns enemies is passes through.<br>Damage: 150 / 200 / 250<br> Stun Duration: 1.5 / 2 / 2.5");
    const reksai = champ("Rek'Sai",2,"void",null,"brawler",null,"./champs/reksai.png",650,50,"melee",0.65,0,20,20,"Burrow","./champs/skills/reksai.png",50,150,"Rek'Sai burrows for a short duration becoming untargetable and healing. When Rek'Sai unburrows she deals damage and knocks up the closest enemy for 1.75 seconds.<br>Heal: 150 / 300 / 450<br>Damage: 200 / 350 / 500");
    const rengar = champ("Rengar",3,"wild",null,"assassin",null,"./champs/rengar.png",550,70,"melee",0.6,0,20,20,"Savagery","./champs/skills/rengar.png",0,75,"Rengar leaps to the lowest health enemy and stabs them for bonus on-hit damage. After dealing damage, Rengar gains Attack Speed and 25% Critical Strike Chance.<br>AD Scaling: 200% / 300% / 400%<br>Attack Speed: 30% / 50% / 70%");
    const sejuani = champ("Sejuani",4,"glacial",null,"knight",null,"./champs/sejuani.png",850,45,"melee",0.55,0,40,20,"Glacial Prison","./champs/skills/sejuani.png",50,150,"Sejuani creates a large glacial storm, stunning enemies within it after a short delay.<br>Damage: 100 / 175 / 250<br>Stun Duration: 2 / 4 / 6");
    const shen = champ("Shen",2,"ninja",null,"blademaster",null,"./champs/shen.png",700,65,"melee",0.7,0,30,20,"Spirit's Refuge","./champs/skills/shen.png",100,150,"Shen creates a zone around himself, allowing allies to dodge all attacks.<br>Duration: 3 / 4 / 5");
    const shyvana = champ("Shyvana",3,"dragon",null,"shapeshifter",null,"./champs/shyvana.png",650,50,"melee",0.7,0,30,20,"Dragon's Descent","./champs/skills/shyvana.png",0,85,"Shyvana dashes and transforms, gaining AD and Attack Range. When transformed, her attacks set enemies on fire.<br>Damage: 250 / 375 / 500<br>AD while Dragon: 100 / 150 / 200");
    const swain = champ("Swain",5,"demon","imperial","shapeshifter",null,"./champs/swain.png",850,65,2,0.65,0,25,20,"Demonflare","./champs/skills/swain.png",0,100,"Swain transforms, draining health from all nearby enemies. At the end of his transformation, Swain sends out a burst of energy dealing damage to nearby enemies.<br>Damage per Tick: 50 / 100 / 150<br>Heal per Tick: 40 / 70 / 100<br>Soul Flare Damage: 300 / 600 / 900");
    const tristana = champ("Tristana",1,"yordle",null,"gunslinger",null,"./champs/tristana.png",500,50,4,0.7,0,20,20,"Explosive Charge","./champs/skills/tristana.png",0,50,"Tristana places a bomb on her current target that detonates after 3 attacks, damaging nearby enemies.<br>Damage: 60 / 90 / 120<br>Explosive Charge Damage: 150 - 300");
    const twisted_fate = champ("Twisted Fate",2,"pirate",null,"sorcerer",null,"./champs/twisted_fate.png",450,40,3,0.7,0,20,20,"Pick a Card","./champs/skills/twisted_fate.png",0,50,"Twisted Fate throws a card that either stuns, deals damage around his target or restores mana to himself and nearby allies.<br>Damage: 150 / 250 / 350<br>Stun Duration: 2 / 3 / 4<br> Mana Restore: 20 / 35 / 50");
    const varus = champ("Varus",2,"demon",null,"ranger",null,"./champs/varus.png",500,50,4,0.7,0,25,20,"Piercing Arrow","./champs/skills/varus.png",0,75,"Varus charges and fires an arrow, dealing damage to all enemies in a line.<br>Damage: 300 / 550 / 800");
    const vayne = champ("Vayne",1,"noble",null,"ranger",null,"./champs/vayne.png",550,40,3,0.7,0,25,20,"Silver Bolts","./champs/skills/vayne.png",null,"No cost","Vayne deals bonus true damage every third attack based on the enemy's maximum Health.<br>Percentage Damage: 8% / 12% / 16%");
    const veigar = champ("Veigar",3,"yordle",null,"sorcerer",null,"./champs/veigar.png",500,45,3,0.55,0,20,20,"Primordial Burst","./champs/skills/veigar.png",0,75,"Veigar blasts an enemy with magical energy, dealing damage. This spell instantly kills, if the enemy is lower star level than Veigar.<br>Damage: 300 / 550 / 800");
    const vi = champ("Vi",3,"hextech",null,"brawler",null,"./champs/vi.png",650,60,"melee",0.65,0,25,20,"Assault and Battery","./champs/skills/vi.png",75,150,"Vi charges down the furthest enemy, knocking aside anyone in her way. When she reaches her target, she deals damage and knocks them up. Other enemies knocked aside take the same damage.<br>Damage: 250 / 450 / 650<br>Stun Duration: 2 / 2.5 / 3");
    const volibear = champ("Volibear",3,"glacial",null,"brawler",null,"./champs/volibear.png",700,75,"melee",0.55,0,35,20,"Thunder Claws","./champs/skills/volibear.png",0,75,"Volibear empowers his attacks to chaim between enemies, applying on-hit effects.<br>Max Bounces: 2 / 3 / 4<br>Chain AD Multipier: 0.8 / 0.9 / 1.0");
    const warwick = champ("Warwick",1,"wild",null,"brawler",null,"./champs/warwick.png",650,50,"melee",0.6,0,30,20,"Infinite Duress","./champs/skills/warwick.png",50,150,"Warwick pounces onto the lowest health enemy, stunning them for 1.5 seconds, damaging them and healing himself. Applies on-hit effects.<br>Damage: 150 / 225 / 300");
    const yasuo = champ("Yasuo",5,"exile",null,"blademaster",null,"./champs/yasuo.png",700,75,"melee",1.0,0,35,20,"Tempest Steel","./champs/skills/yasuo.png",0,25,"Yasuo stabs forwards, damaging two enemies in a line. On third cast Yasuo instead launches a tornado dealing damage and knocking up enemies in a line for 1.5 seconds. Applies on-hit effects.<br>Damage: 150 / 350 / 550");
    const zed = champ("Zed",2,"ninja",null,"assassin",null,"./champs/zed.png",550,65,"melee",0.7,0,25,20,"Razor Shuriken","./champs/skills/zed.png",0,75,"Zed throws a shuriken, dealing damage to enemies in a line.<br>Damage: 200 / 350 / 500");

    katalogchamp.push(aatrox);
    katalogchamp.push(ahri);
    katalogchamp.push(akali);
    katalogchamp.push(anivia);
    katalogchamp.push(ashe);
    katalogchamp.push(aurelion_sol);
    katalogchamp.push(blitzcrank);
    katalogchamp.push(brand);
    katalogchamp.push(braum);
    katalogchamp.push(camille);
    katalogchamp.push(chogath);
    katalogchamp.push(darius);
    katalogchamp.push(draven);
    katalogchamp.push(elise);
    katalogchamp.push(evelynn);
    katalogchamp.push(fiora);
    katalogchamp.push(gangplank);
    katalogchamp.push(garen);
    katalogchamp.push(gnar);
    katalogchamp.push(graves);
    katalogchamp.push(jayce);
    katalogchamp.push(jinx);
    katalogchamp.push(karthus);
    katalogchamp.push(kassadin);
    katalogchamp.push(katarina);
    katalogchamp.push(kayle);
    katalogchamp.push(kennen);
    katalogchamp.push(khazix);
    katalogchamp.push(kindred);
    katalogchamp.push(leona);
    katalogchamp.push(lissandra);
    katalogchamp.push(lucian);
    katalogchamp.push(lulu);
    katalogchamp.push(miss_fortune);
    katalogchamp.push(mordekaiser);
    katalogchamp.push(morgana);
    katalogchamp.push(nidalee);
    katalogchamp.push(pantheon);
    katalogchamp.push(poppy);
    katalogchamp.push(pyke);
    katalogchamp.push(reksai);
    katalogchamp.push(rengar);
    katalogchamp.push(sejuani);
    katalogchamp.push(shen);
    katalogchamp.push(shyvana);
    katalogchamp.push(swain);
    katalogchamp.push(tristana);
    katalogchamp.push(twisted_fate);
    katalogchamp.push(varus);
    katalogchamp.push(vayne);
    katalogchamp.push(veigar);
    katalogchamp.push(vi);
    katalogchamp.push(volibear);
    katalogchamp.push(warwick);
    katalogchamp.push(yasuo);
    katalogchamp.push(zed);


    let tabela = document.createElement("TABLE");
    for (let y = 0; y <= 5; y++) {
        let tr = document.createElement("TR");
        for (let x = 1; x <= 10; x++) {
            let td = document.createElement("TD");
            td.style.border = "none";
            td.setAttribute("ondrop", 'drop(event)');
            td.setAttribute("ondragover", 'allowDrop(event)');
            tr.appendChild(td);
            if (y === 5 && x === 6) break;
        }
        tabela.appendChild(tr);
    }

    document.getElementById("champs").appendChild(tabela);

    let pola = document.getElementById("champs").getElementsByTagName("td");
    for (let p = 0; p < pola.length; p++) {
        pola[p].setAttribute("id", "baza" + katalogchamp[p].nazwa);

        let jpg = document.createElement("IMG");
        jpg.setAttribute("id", "champ" + katalogchamp[p].nazwa);
        jpg.setAttribute("src", katalogchamp[p].zdj);
        jpg.setAttribute("draggable", true);
        jpg.setAttribute("ondragstart", 'drag(event)');
        jpg.nazwa = katalogchamp[p].nazwa;
        jpg.koszt = katalogchamp[p].koszt;
        jpg.origin = katalogchamp[p].origin;
        jpg.origin2 = katalogchamp[p].origin2;
        jpg.klasa = katalogchamp[p].klasa;
        jpg.klasa2 = katalogchamp[p].klasa2;
        jpg.health1 = katalogchamp[p].health1;
        jpg.health2 = Math.round(katalogchamp[p].health1 * 1.8);
        jpg.health3 = Math.round(katalogchamp[p].health1 * 3.6);
        jpg.ad1 = katalogchamp[p].ad1;
        jpg.ad2 = Math.round(katalogchamp[p].ad1 * 1.8);
        jpg.ad3 = Math.round(katalogchamp[p].ad1 * 3.6);
        jpg.realad = katalogchamp[p].ad1;
        jpg.dps1 = Math.round(jpg.ad1 * katalogchamp[p].as);
        jpg.dps2 = Math.round(jpg.ad2 * katalogchamp[p].as);
        jpg.dps3 = Math.round(jpg.ad3 * katalogchamp[p].as);
        jpg.attackrange = katalogchamp[p].attackrange;
        jpg.as = katalogchamp[p].as;
        jpg.ap = katalogchamp[p].ap;
        jpg.realap = 0;
        if (katalogchamp[p].origin === "ninja" || katalogchamp[p].origin2 === "ninja") jpg.bonus = 0;
        jpg.armor = katalogchamp[p].armor;
        jpg.mr = katalogchamp[p].mr;
        jpg.skillname = katalogchamp[p].skillname;
        jpg.skillimage = katalogchamp[p].skillimage;
        jpg.manastart = katalogchamp[p].manastart;
        jpg.skillmana = katalogchamp[p].skillmana;
        jpg.skillinfo = katalogchamp[p].skillinfo;
        if (katalogchamp[p].klasa != "assassin" && katalogchamp[p].klasa2 != "assassin") jpg.isAssassin = false;
        if (katalogchamp[p].klasa != "blademaster" && katalogchamp[p].klasa2 != "blademaster") jpg.isBlademaster = false;
        if (katalogchamp[p].klasa != "sorcerer" && katalogchamp[p].klasa2 != "sorcerer") jpg.isSorcerer = false;
        if (katalogchamp[p].origin != "demon" && katalogchamp[p].origin2 != "demon") jpg.isDemon = false;
        if (katalogchamp[p].klasa != "knight" && katalogchamp[p].klasa2 != "knight") jpg.isKnight = false;
        if (katalogchamp[p].origin != "glacial" && katalogchamp[p].origin2 != "glacial") jpg.isGlacial = false;
        jpg.addEventListener("mouseenter",showchamp);
        jpg.addEventListener("mouseenter",showchampitems);
        jpg.addEventListener("mouseleave",hidechamp);
        jpg.addEventListener("mouseleave",hidechampitems);
        jpg.addEventListener("click",togglechampitemsconst);
        pola[p].appendChild(jpg);
    }
}

function bazaorigin() {
    function origin(nazwa,opis) {
        return {
            nazwa,
            opis
        }
    }

    const demon = origin("Demon","Demon have a 40% chance on-hit to burn 20 mana from their target and gain mana in return.<br><ul><li>2 Demons: 15 mana</li><li>4 Demons: 30 mana</li><li>6 Demons: 45 mana</li></ul>");
    const dragon = origin("Dragon","While 2 Dragons are in play, all Dragons gain 83% resistance to magic damage.<br>");
    const exile = origin("Exile","Exiles start combat with a shield equal to 100% of maximum health when not placed adjecent to an ally. The shield does not scale with AP.<br>");
    const glacial = origin("Glacial","Glacials have a chance on-hit to stun for 2 seconds.<br><ul><li>2 Glacials: 20%</li><li>4 Glacials: 30%</li><li>6 Glacials: 45%</li></ul>");
    const hextech = origin("Hextech","At the start of combat, throws a bomb at an enemy unit with an item, and disables all nearby items for 7 seconds.<br><ul><li>2 Hextech: within a 1 hex radius</li><li>4 Hextech: within a 2 hex radius</li></ul>");
    const imperial = origin("Imperial","A select number of Imperials deal double damage. This does not affect items.<br><ul><li>2 Imperials: One random Imperial</li><li>4 Imperials: All Imperials</li></ul>");
    const ninja = origin("Ninja","Ninjas gain AD and AP.<br><ul><li>1 Ninja: This Ninja gains 50 AD and 50 AP.</li><li>4 Ninjas: All Ninjas gain 70 AD and 70 AP.</li></ul>");
    const noble = origin("Noble","Grants 50 armor and 50 magic resistance and basic attacks restore 25 health on-hit to the following:<br><ul><li>3 Nobles: A random ally.</li><li>6 Nobles: The whole team.</li></ul>");
    const phantom = origin("Phantom","While 2 Phantoms are in play, a random enemy will begin combat with 100 health. Works against epic monsters, but deals less damage.<br>");
    const pirate = origin("Pirate","While 3 Pirates are in play, you end each PvP round with a chest that grants between 0 and 4 gold, average 1.75 gold.<br>");
    const robot = origin("Robot","Robots begin combat with full mana.<br>");
    const Void = origin("Void","While 3 Voids are in play, Void units deal true damage.<br>");
    const wild = origin("Wild","Wildlings generate Fury on-hit, up to 5. Each stack gives 12% attack speed, up to 60%.<br><ul><li>2 Wilds: Fury benefits all allied Wildlings.</li><li>4 Wilds: Fury benefits all allies.</li></ul>");
    const yordle = origin("Yordle","Yordles have a change to dodge enemy basic attacks and on-hit effects.<br><ul><li>3 Yordles: 35%</li><li>6 Yordles: 60%</li></ul>");

    katalogorigin.push(demon);
    katalogorigin.push(dragon);
    katalogorigin.push(exile);
    katalogorigin.push(glacial);
    katalogorigin.push(hextech);
    katalogorigin.push(imperial);
    katalogorigin.push(ninja);
    katalogorigin.push(noble);
    katalogorigin.push(phantom);
    katalogorigin.push(pirate);
    katalogorigin.push(robot);
    katalogorigin.push(Void);
    katalogorigin.push(wild);
    katalogorigin.push(yordle);

    document.getElementById("syndemon").opis = demon.opis;
    document.getElementById("syndragon").opis = dragon.opis;
    document.getElementById("synexile").opis = exile.opis;
    document.getElementById("synglacial").opis = glacial.opis;
    document.getElementById("synhextech").opis = hextech.opis;
    document.getElementById("synimperial").opis = imperial.opis;
    document.getElementById("synninja").opis = ninja.opis;
    document.getElementById("synnoble").opis = noble.opis;
    document.getElementById("synphantom").opis = phantom.opis;
    document.getElementById("synpirate").opis = pirate.opis;
    document.getElementById("synrobot").opis = robot.opis;
    document.getElementById("synvoid").opis = Void.opis;
    document.getElementById("synwild").opis = wild.opis;
    document.getElementById("synyordle").opis = yordle.opis;
}

function bazaclass() {
    function klass(nazwa,opis) {
        return {
            nazwa,
            opis
        }
    }

    const assassin = klass("Assassin","At the start of combat, Assassins stealth, become invulnerable for a short duration and jump behind the farthest enemy. Non-assassin champions are slowed for the start of combat.<br>Assassins gain bonus crit damage and crit chance:<br><ul><li>3 Assassins: +75% crit damage & +10% crit chance</li><li>6 Assassins: +150% crit damage & 25% crit chance</li></ul>");
    const blademaster = klass("Blademaster","Blademasters have a 45% chance to perform a multi-attack on-hit.<br><ul><li>3 Blademasters: 1 additional strike</li><li>6 Blademasters: 2 additional strikes</li><li>9 Blademasters: 4 additional strikes</li></ul>");
    const brawler = klass("Brawler","Brawlers gain additional maximum health.<br><ul><li>2 Brawlers: +250</li><li>4 Brawlers: +500</li><li>6 Brawlers: +900</li></ul>");
    const elementalist = klass("Elementalist","Elementalists' basic attacks grant double mana.<br>Beginning combat with 3 Elementalists will summon a Golem adjacent to one of your Elementalists, in the closests empty hex to an enemy. The Golem has 2200 HP and 100 AD.<br>");
    const guardian = klass("Guardian","Beginning combat with 2 Guardians will grant 35 armor to all other units adjacenting to a Guardian. This effect can stack.<br>");
    const gunslinger = klass("Gunslinger","Gunslingers have a 50% chance for their attacks to hit additional random enemies in range.<br><ul><li>2 Gunslingers: 1 enemy</li><li>4 Gunslingers: 2 enemies</li><li>6 Gunslingers: 3 enemies</li></ul>");
    const knight = klass("Knight","Your team ignores a flat amount of damage from all sources of damage.<br><ul><li>2 Knights: 15</li><li>4 Knights: 30</li><li>6 Knights: 55</li></ul>");
    const ranger = klass("Ranger","Every 3 seconds, Rangers have a chance to gain double attack speed for 3 seconds.<br><ul><li>2 Rangers: 30%</li><li>4 Rangers: 70%</li></ul>");
    const shapeshifter = klass("Shapeshifter","When Shapeshifters activate their ability, they gain additional maximum health and heal for the amount gained.<br><ul><li>3 Shapeshifters: +60%</li><li>6 Shapeshifters: +120%</li></ul>");
    const sorcerer = klass("Sorcerer","Sorcerers' basic attacks grant double mana.<br>Sorcerers grant AP to their team.<br><ul><li>3 Sorcerers: +40 AP</li><li>6 Sorcerers: +100 AP</li></ul>");

    katalogclass.push(assassin);
    katalogclass.push(blademaster);
    katalogclass.push(brawler);
    katalogclass.push(elementalist);
    katalogclass.push(guardian);
    katalogclass.push(gunslinger);
    katalogclass.push(knight);
    katalogclass.push(ranger);
    katalogclass.push(shapeshifter);
    katalogclass.push(sorcerer);

    document.getElementById("synassassin").opis = assassin.opis;
    document.getElementById("synblademaster").opis = blademaster.opis;
    document.getElementById("synbrawler").opis = brawler.opis;
    document.getElementById("synelementalist").opis = elementalist.opis;
    document.getElementById("synguardian").opis = guardian.opis;
    document.getElementById("syngunslinger").opis = gunslinger.opis;
    document.getElementById("synknight").opis = knight.opis;
    document.getElementById("synranger").opis = ranger.opis;
    document.getElementById("synshapeshifter").opis = shapeshifter.opis;
    document.getElementById("synsorcerer").opis = sorcerer.opis;
}

function bazaitem() {
    function item(nazwa,stats,opis,ad,as,ap,mana,armor,mr,health) {
        return {
            nazwa,
            stats,
            opis,
            ad,
            as,
            ap,
            mana,
            armor,
            mr,
            health
        }
    }

    const sword = item("B. F. Sword","+20 AD","",20,0,0,0,0,0,0);
    const bow = item("Recurve Bow","+20% attack speed","",0,20,0,0,0,0,0);
    const rod = item("Needlessly Large Rod","+20 AP","",0,0,20,0,0,0,0);
    const tear = item("Tear of the Goddess","+20 mana","",0,0,0,20,0,0,0);
    const vest = item("Chain Vest","+20 armor","",0,0,0,0,20,0,0);
    const cloak = item("Negatron Cloak","+20 magic resist","",0,0,0,0,0,20,0);
    const belt = item("Giant's Belt","+200 health","",0,0,0,0,0,0,200);
    const spatula = item("Spatula","It must do something...","",0,0,0,0,0,0,0);
    const infinity_edge = item("Infinity Edge","+40 AD","Critical strikes deal +200% damage.",40,0,0,0,0,0,0);
    const sword_of_the_divine = item("Sword of the Divine","+ 20 AD<br>+20% attack speed","Each second, the wearer has a 7% chance to gain 100% critical strike until the end of the combat.",20,20,0,0,0,0,0);
    const hextech_gunblade = item("Hextech Gunblade","+20 AD<br>+20 AP","Heal for 25% of all damage dealt.",20,0,20,0,0,0,0);
    const spear_of_shojin = item("Spear of Shojin","+20 AD<br>+20 mana","After casting, wearer gain 15% of its max mana per attack.",20,0,0,20,0,0,0);
    const guardian_angel = item("Guardian Angel","+20 AD<br>+20 armor","Wearer revives with 500 health.",20,0,0,0,20,0,0);
    const the_bloodthirster = item("The Bloodthirster","+20 AD<br>+20 magic resist","Attacks heal for 40% of damage.",20,0,0,0,0,20,0);
    const zekes_herald = item("Zeke's Herald","+20 AD<br>+200 health","Allies within 2 hexes to the left and right gain +15% attack speed.",20,0,0,0,0,0,200);
    const youmuus_ghostblade = item("Youmuu's Ghostblade","+40 AD","Wearer is also an Assassin.",40,0,0,0,0,0,0);
    const rapid_firecannon = item("Rapid Firecannon","+40% attack speed","Wearer's attacks can't be dodged. Attack range is doubled.",0,40,0,0,0,0,0);
    const guinsoos_rageblade = item("Guinsoo's Rageblade","+20% attack speed<br>+20 AP","Attacks grant 5% attack speed (stacks infinitely).",0,20,20,0,0,0,0);
    const statikk_shiv = item("Statikk Shiv","+20% attack speed<br>+20 mana","Every 3rd attack deals 100 magical damage to 3 targets.",0,20,0,20,0,0,0);
    const phantom_dancer = item("Phantom Dancer","+20% attack speed<br>+20 armor","Wearer dodges all critical strikes.",0,20,0,0,20,0,0);
    const cursed_blade = item("Cursed Blade","+20% attack speed<br>+20 magic resist","Attacks have a 20% chance to shrink (reduce enemy's star level by 1).",0,20,0,0,0,20,0);
    const titanic_hydra = item("Titanic Hydra","+20% attack speed<br>+200 health","Attacks deal 10% of wearer's max health as splash damage.",0,20,0,0,0,0,200);
    const botrk = item("Blade of the Ruined King","+40% attack speed","Wearer is also a Blademaster.",0,40,0,0,0,0,0);
    const rabadons_deathcap = item("Rabadon's Deathcap","+40 AP","+50% AP",0,0,40,0,0,0,0);
    const ludens_echo = item("Luden's Echo","+20 AP<br>+20 mana","Spells deal 180 magic damage on-hit.",0,0,20,20,0,0,0);
    const locket_of_the_iron_solari = item("Locket of the Iron Solari","+20 AP<br>+20 armor","At the start of combat, all champions within 2 hexes to the left and right of the wearer gain a 250 health shield for 6 seconds.",0,0,20,0,20,0,0);
    const ionic_spark = item("Ionic Spark","+20 AP<br>+20 magic resist","Whenever an enemy casts a spell, they take 125 true damage.",0,0,20,0,0,20,0);
    const morellonomicon = item("Morellonomicon","+20 AP<br>+200 health","Spells deal burn damage equal to 2% of the enemy's max health per second for 10 seconds.",0,0,20,0,0,0,200);
    const yuumi = item("Yuumi","+40 AP","Wearer is also a Sorcerer.",0,0,40,0,0,0,0);
    const seraphs_embrace = item("Seraph's Embrace","+40 mana","Regain 20 mana each time a spell is cast.",0,0,0,40,0,0,0);
    const frozen_heart = item("Frozen Heart","+20 mana<br>+20 armor","Adjacent enemies lose 20% attack speed.",0,0,0,20,20,0,0);
    const hush = item("Hush","+20 mana<br>+20 magic resist","Attacks have a 33% chance to prevent the enemy champion from gaining mana for 4 seconds.",0,0,0,20,0,20,0);
    const redemption = item("Redemption","+20 mana<br>+200 health","At 25% health, heal all nearby allies for 1200 health.",0,0,0,20,0,0,200);
    const darkin = item("Darkin","+40 mana","Wearer is also a Demon.",0,0,0,40,0,0,0);
    const thornmail = item("Thornmail","+40 armor","Reflects 100% of physical damage that was mitigated.",0,0,0,0,40,0,0);
    const sword_breaker = item("Sword Breaker","+20 armor<br>+20 magic resist","Attacks have a 25% chance to disarm.",0,0,0,0,20,20,0);
    const red_buff = item("Red Buff","+20 armor<br>+200 health","Attacks deal burn damage equal to 2% of the enemy's max health per second for 10 seconds.",0,0,0,0,20,0,200);
    const knights_vow = item("Knight's Vow","+40 armor","Wearer is also a Knight.",0,0,0,0,40,0,0);
    const dragons_claw = item("Dragon's Claw","+40 magic resist","Gain 83% resistance to magic damage.",0,0,0,0,0,40,0);
    const zephyr = item("Zephyr","+20 magic resist<br>+200 health","On start of combat, banish an enemy for 5 seconds.",0,0,0,0,0,20,200);
    const runaans_hurricane = item("Runaan's Hurricane","+40 magic resist","Attacks 1 extra target on attack. Extra attacks deal 75% damage.",0,0,0,0,0,40,0);
    const warmogs_armor = item("Warmog's Armor","+400 health","Wearer regenerates 6% missing health per second up to a maximum of 400 health per second.",0,0,0,0,0,0,400);
    const frozen_mallet = item("Frozen Mallet","+400 health","Wearer is also a Glacial.",0,0,0,0,0,0,400);
    const force_of_nature = item("Force of Nature","+420 swag","Gain +1 team size.",0,0,0,0,0,0,0);

    for (let y = 1; y <= 9; y++) {
        for (let x = 1; x <= 9; x++) {
            if ((y === 1 && x === 2) || (y === 2 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemsword");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = sword.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = sword.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = sword.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = sword.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = sword.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = sword.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = sword.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = sword.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = sword.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = sword.health;
            }
            if ((y === 1 && x === 3) || (y === 3 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itembow");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = bow.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = bow.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = bow.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = bow.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = bow.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = bow.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = bow.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = bow.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = bow.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = bow.health;
            }
            if ((y === 1 && x === 4) || (y === 4 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemrod");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = rod.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = rod.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = rod.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = rod.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = rod.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = rod.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = rod.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = rod.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = rod.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = rod.health;
            }
            if ((y === 1 && x === 5) || (y === 5 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemtear");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = tear.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = tear.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = tear.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = tear.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = tear.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = tear.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = tear.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = tear.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = tear.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = tear.health;
            }
            if ((y === 1 && x === 6) || (y === 6 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemvest");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = vest.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = vest.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = vest.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = vest.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = vest.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = vest.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = vest.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = vest.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = vest.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = vest.health;
            }
            if ((y === 1 && x === 7) || (y === 7 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemcloak");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = cloak.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = cloak.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = cloak.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = cloak.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = cloak.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = cloak.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = cloak.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = cloak.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = cloak.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = cloak.health;
            }
            if ((y === 1 && x === 8) || (y === 8 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itembelt");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = belt.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = belt.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = belt.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = belt.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = belt.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = belt.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = belt.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = belt.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = belt.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = belt.health;
            }
            if ((y === 1 && x === 9) || (y === 9 && x === 1)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemspatula");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = spatula.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = spatula.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = spatula.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = spatula.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = spatula.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = spatula.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = spatula.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = spatula.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = spatula.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = spatula.health;
            }
            if (y === 2 && x === 2) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","iteminfinity_edge");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = infinity_edge.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = infinity_edge.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = infinity_edge.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = infinity_edge.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = infinity_edge.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = infinity_edge.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = infinity_edge.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = infinity_edge.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = infinity_edge.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = infinity_edge.health;
            }
            if ((y === 2 && x === 3) || (y === 3 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemsword_of_the_divine");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = sword_of_the_divine.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = sword_of_the_divine.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = sword_of_the_divine.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = sword_of_the_divine.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = sword_of_the_divine.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = sword_of_the_divine.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = sword_of_the_divine.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = sword_of_the_divine.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = sword_of_the_divine.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = sword_of_the_divine.health;
            }
            if ((y === 2 && x === 4) || (y === 4 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemhextech_gunblade");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = hextech_gunblade.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = hextech_gunblade.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = hextech_gunblade.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = hextech_gunblade.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = hextech_gunblade.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = hextech_gunblade.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = hextech_gunblade.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = hextech_gunblade.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = hextech_gunblade.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = hextech_gunblade.health;
            }
            if ((y === 2 && x === 5) || (y === 5 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemspear_of_shojin");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = spear_of_shojin.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = spear_of_shojin.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = spear_of_shojin.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = spear_of_shojin.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = spear_of_shojin.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = spear_of_shojin.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = spear_of_shojin.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = spear_of_shojin.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = spear_of_shojin.health;
            }
            if ((y === 2 && x === 6) || (y === 6 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemguardian_angel");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = guardian_angel.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = guardian_angel.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = guardian_angel.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = guardian_angel.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = guardian_angel.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = guardian_angel.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = guardian_angel.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = guardian_angel.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = guardian_angel.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = guardian_angel.health;
            }
            if ((y === 2 && x === 7) || (y === 7 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemthe_bloodthirster");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = the_bloodthirster.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = the_bloodthirster.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = the_bloodthirster.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = the_bloodthirster.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = the_bloodthirster.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = the_bloodthirster.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = the_bloodthirster.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = the_bloodthirster.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = the_bloodthirster.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = the_bloodthirster.health;
            }
            if ((y === 2 && x === 8) || (y === 8 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemzekes_herald");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = zekes_herald.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = zekes_herald.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = zekes_herald.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = zekes_herald.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = zekes_herald.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = zekes_herald.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = zekes_herald.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = zekes_herald.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = zekes_herald.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = zekes_herald.health;
            }
            if ((y === 2 && x === 9) || (y === 9 && x === 2)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemyoumuus_ghostblade");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = youmuus_ghostblade.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = youmuus_ghostblade.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = youmuus_ghostblade.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = youmuus_ghostblade.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = youmuus_ghostblade.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = youmuus_ghostblade.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = youmuus_ghostblade.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = youmuus_ghostblade.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = youmuus_ghostblade.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = youmuus_ghostblade.health;
            }
            if (y === 3 && x === 3) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemrapid_firecannon");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = rapid_firecannon.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = rapid_firecannon.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = rapid_firecannon.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = rapid_firecannon.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = rapid_firecannon.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = rapid_firecannon.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = rapid_firecannon.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = rapid_firecannon.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = rapid_firecannon.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = rapid_firecannon.health;
            }
            if ((y === 3 && x === 4) || (y === 4 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemguinsoos_rageblade");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = guinsoos_rageblade.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = guinsoos_rageblade.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = guinsoos_rageblade.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = guinsoos_rageblade.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = guinsoos_rageblade.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = guinsoos_rageblade.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = guinsoos_rageblade.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = guinsoos_rageblade.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = guinsoos_rageblade.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = guinsoos_rageblade.health;
            }
            if ((y === 3 && x === 5) || (y === 5 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemstatikk_shiv");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = statikk_shiv.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = statikk_shiv.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = statikk_shiv.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = statikk_shiv.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = statikk_shiv.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = statikk_shiv.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = statikk_shiv.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = statikk_shiv.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = statikk_shiv.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = statikk_shiv.health;
            }
            if ((y === 3 && x === 6) || (y === 6 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemphantom_dancer");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = phantom_dancer.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = phantom_dancer.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = phantom_dancer.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = phantom_dancer.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = phantom_dancer.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = phantom_dancer.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = phantom_dancer.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = phantom_dancer.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = phantom_dancer.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = phantom_dancer.health;
            }
            if ((y === 3 && x === 7) || (y === 7 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemcursed_blade");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = cursed_blade.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = cursed_blade.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = cursed_blade.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = cursed_blade.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = cursed_blade.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = cursed_blade.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = cursed_blade.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = cursed_blade.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = cursed_blade.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = cursed_blade.health;
            }
            if ((y === 3 && x === 8) || (y === 8 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemtitanic_hydra");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = titanic_hydra.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = titanic_hydra.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = titanic_hydra.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = titanic_hydra.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = titanic_hydra.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = titanic_hydra.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = titanic_hydra.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = titanic_hydra.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = titanic_hydra.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = titanic_hydra.health;
            }
            if ((y === 3 && x === 9) || (y === 9 && x === 3)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itembotrk");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = botrk.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = botrk.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = botrk.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = botrk.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = botrk.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = botrk.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = botrk.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = botrk.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = botrk.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = botrk.health;
            }
            if (y === 4 && x === 4) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemrabadons_deathcap");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = rabadons_deathcap.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = rabadons_deathcap.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = rabadons_deathcap.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = rabadons_deathcap.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = rabadons_deathcap.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = rabadons_deathcap.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = rabadons_deathcap.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = rabadons_deathcap.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = rabadons_deathcap.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = rabadons_deathcap.health;
            }
            if ((y === 4 && x === 5) || (y === 5 && x === 4)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemludens_echo");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = ludens_echo.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = ludens_echo.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = ludens_echo.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = ludens_echo.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = ludens_echo.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = ludens_echo.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = ludens_echo.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = ludens_echo.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = ludens_echo.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = ludens_echo.health;
            }
            if ((y === 4 && x === 6) || (y === 6 && x === 4)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemlocket_of_the_iron_solari");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = locket_of_the_iron_solari.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = locket_of_the_iron_solari.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = locket_of_the_iron_solari.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = locket_of_the_iron_solari.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = locket_of_the_iron_solari.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = locket_of_the_iron_solari.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = locket_of_the_iron_solari.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = locket_of_the_iron_solari.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = locket_of_the_iron_solari.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = locket_of_the_iron_solari.health;
            }
            if ((y === 4 && x === 7) || (y === 7 && x === 4)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemionic_spark");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = ionic_spark.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = ionic_spark.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = ionic_spark.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = ionic_spark.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = ionic_spark.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = ionic_spark.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = ionic_spark.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = ionic_spark.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = ionic_spark.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = ionic_spark.health;
            }
            if ((y === 4 && x === 8) || (y === 8 && x === 4)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemmorellonomicon");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = morellonomicon.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = morellonomicon.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = morellonomicon.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = morellonomicon.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = morellonomicon.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = morellonomicon.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = morellonomicon.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = morellonomicon.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = morellonomicon.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = morellonomicon.health;
            }
            if ((y === 4 && x === 9) || (y === 9 && x === 4)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemyuumi");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = yuumi.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = yuumi.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = yuumi.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = yuumi.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = yuumi.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = yuumi.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = yuumi.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = yuumi.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = yuumi.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = yuumi.health;
            }
            if (y === 5 && x === 5) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemseraphs_embrace");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = seraphs_embrace.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = seraphs_embrace.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = seraphs_embrace.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = seraphs_embrace.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = seraphs_embrace.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = seraphs_embrace.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = seraphs_embrace.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = seraphs_embrace.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = seraphs_embrace.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = seraphs_embrace.health;
            }
            if ((y === 5 && x === 6) || (y === 6 && x === 5)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemfrozen_heart");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = frozen_heart.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = frozen_heart.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = frozen_heart.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = frozen_heart.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = frozen_heart.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = frozen_heart.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = frozen_heart.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = frozen_heart.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = frozen_heart.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = frozen_heart.health;
            }
            if ((y === 5 && x === 7) || (y === 7 && x === 5)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemhush");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = hush.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = hush.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = hush.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = hush.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = hush.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = hush.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = hush.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = hush.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = hush.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = hush.health;
            }
            if ((y === 5 && x === 8) || (y === 8 && x === 5)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemredemption");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = redemption.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = redemption.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = redemption.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = redemption.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = redemption.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = redemption.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = redemption.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = redemption.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = redemption.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = redemption.health;
            }
            if ((y === 5 && x === 9) || (y === 9 && x === 5)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemdarkin");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = darkin.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = darkin.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = darkin.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = darkin.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = darkin.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = darkin.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = darkin.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = darkin.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = darkin.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = darkin.health;
            }
            if (y === 6 && x === 6) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemthornmail");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = thornmail.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = thornmail.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = thornmail.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = thornmail.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = thornmail.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = thornmail.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = thornmail.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = thornmail.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = thornmail.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = thornmail.health;
            }
            if ((y === 6 && x === 7) || (y === 7 && x === 6)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemsword_breaker");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = sword_breaker.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = sword_breaker.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = sword_breaker.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = sword_breaker.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = sword_breaker.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = sword_breaker.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = sword_breaker.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = sword_breaker.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = sword_breaker.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = sword_breaker.health;
            }
            if ((y === 6 && x === 8) || (y === 8 && x === 6)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemred_buff");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = red_buff.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = red_buff.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = red_buff.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = red_buff.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = red_buff.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = red_buff.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = red_buff.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = red_buff.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = red_buff.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = red_buff.health;
            }
            if ((y === 6 && x === 9) || (y === 9 && x === 6)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemknights_vow");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = knights_vow.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = knights_vow.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = knights_vow.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = knights_vow.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = knights_vow.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = knights_vow.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = knights_vow.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = knights_vow.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = knights_vow.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.health = knights_vow.health;
            }
            if (y === 7 && x === 7) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemdragons_claw");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = dragons_claw.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = dragons_claw.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = dragons_claw.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = dragons_claw.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = dragons_claw.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = dragons_claw.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = dragons_claw.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = dragons_claw.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = dragons_claw.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = dragons_claw.health;
            }
            if ((y === 7 && x === 8) || (y === 8 && x === 7)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemzephyr");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = zephyr.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = zephyr.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = zephyr.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = zephyr.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = zephyr.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = zephyr.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = zephyr.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = zephyr.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = zephyr.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = zephyr.health;
            }
            if ((y === 7 && x === 9) || (y === 9 && x === 7)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemrunaans_hurricane");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = runaans_hurricane.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = runaans_hurricane.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = runaans_hurricane.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = runaans_hurricane.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = runaans_hurricane.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = runaans_hurricane.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = runaans_hurricane.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = runaans_hurricane.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = runaans_hurricane.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = runaans_hurricane.health;
            }
            if (y === 8 && x === 8) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemwarmogs_armor");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = warmogs_armor.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = warmogs_armor.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = warmogs_armor.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = warmogs_armor.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = warmogs_armor.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = warmogs_armor.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = warmogs_armor.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = warmogs_armor.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = warmogs_armor.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = warmogs_armor.health;
            }
            if ((y === 8 && x === 9) || (y === 9 && x === 8)) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemfrozen_mallet");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = frozen_mallet.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = frozen_mallet.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = frozen_mallet.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = frozen_mallet.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = frozen_mallet.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = frozen_mallet.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = frozen_mallet.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = frozen_mallet.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = frozen_mallet.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = frozen_mallet.health;
            }
            if (y === 9 && x === 9) {
                document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("id","itemforce_of_nature");
                document.getElementById("item" + y + "." + x).firstElementChild.nazwa = force_of_nature.nazwa;
                document.getElementById("item" + y + "." + x).firstElementChild.stats = force_of_nature.stats;
                document.getElementById("item" + y + "." + x).firstElementChild.opis = force_of_nature.opis;
                document.getElementById("item" + y + "." + x).firstElementChild.ad = force_of_nature.ad;
                document.getElementById("item" + y + "." + x).firstElementChild.as = force_of_nature.as;
                document.getElementById("item" + y + "." + x).firstElementChild.ap = force_of_nature.ap;
                document.getElementById("item" + y + "." + x).firstElementChild.mana = force_of_nature.mana;
                document.getElementById("item" + y + "." + x).firstElementChild.armor = force_of_nature.armor;
                document.getElementById("item" + y + "." + x).firstElementChild.mr = force_of_nature.mr;
                document.getElementById("item" + y + "." + x).firstElementChild.health = force_of_nature.health;
            }
            document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("draggable",true);
            document.getElementById("item" + y + "." + x).firstElementChild.setAttribute("ondragstart","drag(event)");
        }
    }
}

function showchamp(event) {
    document.getElementById("karta").style.visibility = "visible";
    document.getElementById("nazwa").innerHTML = event.target.nazwa;
    let champimg = document.createElement("IMG");
    champimg.setAttribute("src",event.target.src);
    if (document.getElementById("champobraz").childElementCount === 1) document.getElementById("champobraz").removeChild(document.getElementById("champobraz").firstElementChild);
    document.getElementById("champobraz").appendChild(champimg);
    document.getElementById("koszt").innerHTML = event.target.koszt;
    if (event.target.koszt === 1) document.getElementById("koszt").style.backgroundColor = "rgb(9,41,73)";
    if (event.target.koszt === 2) document.getElementById("koszt").style.backgroundColor = "rgb(22,98,75)";
    if (event.target.koszt === 3) document.getElementById("koszt").style.backgroundColor = "rgb(7,100,130)";
    if (event.target.koszt === 4) document.getElementById("koszt").style.backgroundColor = "rgb(80,28,120)";
    if (event.target.koszt === 5) document.getElementById("koszt").style.backgroundColor = "rgb(90,74,50)";
    document.getElementById("origintext").innerHTML = event.target.origin;
    if (event.target.origin2 != null) document.getElementById("origin2text").innerHTML = event.target.origin2;
    else document.getElementById("origin2text").innerHTML = "";
    document.getElementById("klasatext").innerHTML = event.target.klasa;
    if (event.target.klasa2 != null) document.getElementById("klasa2text").innerHTML = event.target.klasa2;
    else document.getElementById("klasa2text").innerHTML = "";
    document.getElementById("health").innerHTML = "Health<br>" + event.target.health1 + "/" + event.target.health2 + "/" + event.target.health3;
    document.getElementById("ad").innerHTML = "AD<br>" + event.target.ad1 + "/" + event.target.ad2 + "/" + event.target.ad3;
    document.getElementById("dps").innerHTML = "DPS<br>" + event.target.dps1 + "/" + event.target.dps2 + "/" + event.target.dps3;
    document.getElementById("attackrange").innerHTML = "Attack Range<br>" + event.target.attackrange;
    document.getElementById("as").innerHTML = "Attack Speed<br>" + event.target.as;
    document.getElementById("armor").innerHTML = "Armor<br>" + event.target.armor;
    document.getElementById("mr").innerHTML = "Magic Resist<br>" + event.target.mr;
    let skillimg = document.createElement("IMG");
    skillimg.setAttribute("src",event.target.skillimage);
    document.getElementById("skillimage").innerHTML = "";
    if (document.getElementById("skillimage").childElementCount === 1) document.getElementById("skillimage").removeChild(document.getElementById("skillimage").firstElementChild);
    document.getElementById("skillimage").appendChild(skillimg);
    document.getElementById("skillimage").innerHTML += "<br><br>AP: " + event.target.ap;
    if (event.target.skillmana != "No cost") document.getElementById("skillinfo").innerHTML = "<b>" + event.target.skillname + "</b><br>Mana: " + event.target.manastart + " / " + event.target.skillmana + "<br><br>" + event.target.skillinfo;
    else document.getElementById("skillinfo").innerHTML = "<b>" + event.target.skillname + "</b><br>Mana: " + event.target.skillmana + "<br><br>" + event.target.skillinfo;
}

function hidechamp() {
    document.getElementById("karta").style.visibility = "hidden";
}

function showchampitems(event) {
    if (event.target != undefined) {
        if (event.target.id.slice(0,5) === "champ") {
            if (event.target.childElementCount > 0 && champitemsconst === false) {
                document.getElementById("champitems").style.visibility = "visible";
                for (let x = 1; x <= event.target.childElementCount; x++) {
                    let jpg = document.createElement("IMG");
                    jpg.setAttribute("id", event.target.children[x-1].id);
                    jpg.setAttribute("src", event.target.children[x-1].src);
                    jpg.setAttribute("draggable", true);
                    jpg.setAttribute("ondragstart", 'drag(event)');
                    jpg.nazwa = event.target.children[x-1].nazwa;
                    jpg.stats = event.target.children[x-1].stats;
                    jpg.opis = event.target.children[x-1].opis;
                    jpg.ad = event.target.children[x-1].ad;
                    jpg.as = event.target.children[x-1].as;
                    jpg.ap = event.target.children[x-1].ap;
                    jpg.mana = event.target.children[x-1].mana;
                    jpg.armor = event.target.children[x-1].armor;
                    jpg.mr = event.target.children[x-1].mr;
                    jpg.health = event.target.children[x-1].health;
                    jpg.addEventListener("mouseenter",showitem);
                    jpg.addEventListener("mouseleave",hideitem);
                    document.getElementById("champitem" + x).appendChild(jpg);
                }
            }
        }
    }
}

function hidechampitems() {
    if (champitemsconst === false) {
        document.getElementById("champitems").style.visibility = "hidden";
        for (let x = 1; x <= 3; x++) {
            if (document.getElementById("champitem" + x).firstElementChild != null) document.getElementById("champitem" + x).removeChild(document.getElementById("champitem" + x).firstElementChild);
        }
    }
}

function togglechampitemsconst() {
    if (champitemsconst === false) champitemsconst = true;
    else champitemsconst = false;
}

function showsynergy(event) {
    document.getElementById("teamcompinfo").style.visibility = "visible";
    document.getElementById("teamcompinfo").innerHTML = event.target.opis + "<br>";
    for (let x = 0; x < katalogchamp.length; x++) {
        if (katalogchamp[x].origin === event.target.id.slice(3,15) || katalogchamp[x].origin2 === event.target.id.slice(3,15) || katalogchamp[x].klasa === event.target.id.slice(3,15) || katalogchamp[x].klasa2 === event.target.id.slice(3,15)) {
            let champimg = document.createElement("IMG");
            champimg.setAttribute("src",katalogchamp[x].zdj);
            document.getElementById("teamcompinfo").appendChild(champimg); 
        }
    }
}

function hidesynergy() {
    document.getElementById("teamcompinfo").style.visibility = "hidden";
    document.getElementById("teamcompinfo").innerHTML = "";
}

function showitem(event) {
    document.getElementById("itemsheetinfo").style.visibility = "visible";
    document.getElementById("itemnazwa").innerHTML = event.target.nazwa;
    let item = document.createElement("IMG");
    item.src = event.target.src;
    if (document.getElementById("itemlogo").childElementCount === 1) document.getElementById("itemlogo").removeChild(document.getElementById("itemlogo").firstElementChild);
    document.getElementById("itemlogo").appendChild(item);
    document.getElementById("itemopis").innerHTML = event.target.stats + "<br><br>" + event.target.opis;

    let letitshiney = event.target.parentElement.id[4];
    let letitshinex = event.target.parentElement.id[6];
    if (event.target.parentElement.id.slice(0,4) === "item") {
        for (let y = 1; y <= 9; y++) {
            for (let x = 1; x <= 9; x++) {
                if (y != letitshiney && x != letitshinex) document.getElementById("item" + y + "." + x).firstElementChild.style.opacity = "0.5";
                if ((y === 1 && x != letitshinex) || (y != letitshiney && x === 1)) document.getElementById("item" + y + "." + x).firstElementChild.style.opacity = "0.5";
            }
        }
    }
}

function hideitem() {
    document.getElementById("itemsheetinfo").style.visibility = "hidden";
    for(let y = 1; y <= 9; y++) {
        for (let x = 1; x <= 9; x++) {
            document.getElementById("item" + y + "." + x).firstElementChild.style.opacity = "1";
        }
    }
}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    let data = event.dataTransfer.getData("text");
    //champ
    if (data.slice(0,5) === "champ") {
        //baza => plansza
        if ((event.target.id.slice(0,7) === "plansza" || event.target.parentElement.id.slice(0,7) === "plansza") && document.getElementById(data).parentElement.id.slice(0,4) === "baza") {
            if (event.target.childElementCount > 0 || event.target.parentElement.childElementCount === 1) {
                let pola = document.getElementById("champs").getElementsByTagName("td");
                let oldid;
                for (let x = 0; x < pola.length; x++) {
                    if (pola[x].id.slice(4,20) === event.target.id.slice(5,20)) {
                        oldid = event.target.parentElement;
                        pola[x].appendChild(event.target);
                        break;
                    }
                }
                oldid.appendChild(document.getElementById(data));
                incsynergies(document.getElementById(data));
                decsynergies(event.target);
            } else {
                event.target.appendChild(document.getElementById(data));
                incsynergies(document.getElementById(data));
            }
        }
        //plansza => baza
        else if ((event.target.id.slice(0,4) === "baza" || event.target.parentElement.id.slice(0,4) === "baza") && document.getElementById(data).parentElement.id.slice(0,7) === "plansza") {
            let pola = document.getElementById("champs").getElementsByTagName("td");
            for (let x = 0; x < pola.length; x++) {
                if (pola[x].id.slice(4,20) === document.getElementById(data).id.slice(5,20)) {
                    pola[x].appendChild(document.getElementById(data));
                    for (let i = document.getElementById(data).childElementCount - 1; i >= 0; i--) {
                        if (document.getElementById(data).children[i].ad != 0) {
                            document.getElementById(data).ad1 -= document.getElementById(data).children[i].ad;
                            document.getElementById(data).ad2 = Math.round(document.getElementById(data).ad1 * 1.8);
                            document.getElementById(data).ad3 = Math.round(document.getElementById(data).ad1 * 3.6);
                            document.getElementById(data).dps1 = Math.round(document.getElementById(data).ad1 * document.getElementById(data).as);
                            document.getElementById(data).dps2 = Math.round(document.getElementById(data).ad2 * document.getElementById(data).as);
                            document.getElementById(data).dps3 = Math.round(document.getElementById(data).ad3 * document.getElementById(data).as);
                        }
                        if (document.getElementById(data).children[i].as != 0) {
                            let newas = document.getElementById(data).as /= ((document.getElementById(data).children[i].as / 100) + 1);
                            document.getElementById(data).realas = newas;
                            if (newas < 5) document.getElementById(data).as = newas.toPrecision(3);
                            else document.getElementById(data).as = 5;
                            document.getElementById(data).dps1 = Math.round(document.getElementById(data).ad1 * document.getElementById(data).as);
                            document.getElementById(data).dps2 = Math.round(document.getElementById(data).ad2 * document.getElementById(data).as);
                            document.getElementById(data).dps3 = Math.round(document.getElementById(data).ad3 * document.getElementById(data).as);
                        }
                        if (document.getElementById(data).children[i].armor != 0) document.getElementById(data).armor -= document.getElementById(data).children[i].armor;
                        if (document.getElementById(data).children[i].mr != 0) document.getElementById(data).mr -= document.getElementById(data).children[i].mr;
                        if (document.getElementById(data).children[i].health != 0) {
                            document.getElementById(data).health1 -= document.getElementById(data).children[i].health;
                            document.getElementById(data).health2 = document.getElementById(data).health1 * 1.8;
                            document.getElementById(data).health3 = document.getElementById(data).health1 * 3.6;
                        }
                        if (document.getElementById(data).children[i].mana != 0) document.getElementById(data).manastart -= document.getElementById(data).children[i].mana;
                        if (document.getElementById(data).children[i].id === "itemyoumuus_ghostblade") {
                            document.getElementById(data).isAssassin = false;
                            document.getElementById(data).wasAssassin = true;
                        }
                        else if (document.getElementById(data).children[i].id === "itembotrk") {
                            document.getElementById(data).isBlademaster = false;
                            document.getElementById(data).wasBlademaster = true;
                        }
                        else if (document.getElementById(data).children[i].id === "itemyuumi") {
                            document.getElementById(data).isSorcerer = false;
                            document.getElementById(data).wasSorcerer = true;
                        }
                        else if (document.getElementById(data).children[i].id === "itemdarkin") {
                            document.getElementById(data).isDemon = false;
                            document.getElementById(data).wasDemon = true;
                        }
                        else if (document.getElementById(data).children[i].id === "itemknights_vow") {
                            document.getElementById(data).isKnight = false;
                            document.getElementById(data).wasKnight = true;
                        }
                        else if (document.getElementById(data).children[i].id === "itemfrozen_mallet") {
                            document.getElementById(data).isGlacial = false;
                            document.getElementById(data).wasGlacial = true;
                        }
                        decitemssyngergies(data,data);
                        document.getElementById(data).removeChild(document.getElementById(data).children[i]);
                    }
                    break;
                }
            }
            document.getElementById(data).ap = 0;
            if (document.getElementById(data).realap != undefined) document.getElementById(data).realap = 0;
            decsynergies(document.getElementById(data));
        }
        //plansza => plansza
        else if (event.target.id.slice(0,7) === document.getElementById(data).parentElement.id.slice(0,7) || event.target.parentElement.id.slice(0,7) === document.getElementById(data).parentElement.id.slice(0,7)) {
            if (event.target.childElementCount > 0 || event.target.parentElement.childElementCount === 1) {
                let oldid = event.target.parentElement;
                document.getElementById(data).parentElement.appendChild(event.target);
                oldid.appendChild(document.getElementById(data));
            } else event.target.appendChild(document.getElementById(data));
        }
    }
    //item
    if (data.slice(0,4) === "item") {
        //baza => champ
        if (event.target.id.slice(0,5) === "champ" && event.target.parentElement.id.slice(0,7) === "plansza" && event.target.childElementCount < 3) {
            if ((data === "itemyoumuus_ghostblade" && event.target.isAssassin === false) || (data === "itembotrk" && event.target.isBlademaster === false) || (data === "itemyuumi" && event.target.isSorcerer === false) || (data === "itemdarkin" && event.target.isDemon === false) || (data === "itemknights_vow" && event.target.isKnight === false) || (data === "itemfrozen_mallet" && event.target.isGlacial === false) || (data != "itemyoumuus_ghostblade" && data != "itembotrk" && data != "itemyuumi" && data != "itemdarkin" && data != "itemknights_vow" && data != "itemfrozen_mallet")) {
                let jpg = document.createElement("IMG");
                jpg.setAttribute("id", document.getElementById(data).id);
                jpg.setAttribute("src", document.getElementById(data).src);
                jpg.setAttribute("draggable", true);
                jpg.setAttribute("ondragstart", 'drag(event)');
                jpg.nazwa = document.getElementById(data).nazwa;
                jpg.stats = document.getElementById(data).stats;
                jpg.opis = document.getElementById(data).opis;
                jpg.ad = document.getElementById(data).ad;
                jpg.as = document.getElementById(data).as;
                jpg.ap = document.getElementById(data).ap;
                jpg.mana = document.getElementById(data).mana;
                jpg.armor = document.getElementById(data).armor;
                jpg.mr = document.getElementById(data).mr;
                jpg.health = document.getElementById(data).health;
                jpg.addEventListener("mouseenter",showitem);
                jpg.addEventListener("mouseleave",hideitem);
                if (document.getElementById(data).ad != 0) {
                    event.target.realad += document.getElementById(data).ad;
                    event.target.ad1 += document.getElementById(data).ad;
                    event.target.ad2 = Math.round(event.target.ad1 * 1.8);
                    event.target.ad3 = Math.round(event.target.ad1 * 3.6);
                    event.target.dps1 = Math.round(event.target.ad1 * event.target.as);
                    event.target.dps2 = Math.round(event.target.ad2 * event.target.as);
                    event.target.dps3 = Math.round(event.target.ad3 * event.target.as);
                }
                if (document.getElementById(data).as != 0) {
                    let newas = event.target.as *= ((document.getElementById(data).as / 100) + 1);
                    event.target.realas = newas;
                    if (newas < 5) event.target.as = newas.toPrecision(3);
                    else event.target.as = 5;
                    event.target.dps1 = Math.round(event.target.ad1 * event.target.as);
                    event.target.dps2 = Math.round(event.target.ad2 * event.target.as);
                    event.target.dps3 = Math.round(event.target.ad3 * event.target.as);
                }
                if (document.getElementById(data).ap != 0) {
                    event.target.realap += document.getElementById(data).ap;
                    event.target.ap = event.target.realap;
                }
                if (document.getElementById(data).armor != 0) event.target.armor += document.getElementById(data).armor;
                if (document.getElementById(data).mr != 0) event.target.mr += document.getElementById(data).mr;
                if (document.getElementById(data).health != 0) {
                    event.target.health1 += document.getElementById(data).health;
                    event.target.health2 = Math.round(event.target.health1 * 1.8);
                    event.target.health3 = Math.round(event.target.health1 * 3.6);
                }
                if (document.getElementById(data).mana != 0) event.target.manastart += document.getElementById(data).mana;
                if (data === "itemrapid_firecannon") {
                    if (event.target.attackrange === "melee") event.target.attackrange = 2;
                    else event.target.attackrange *= 2;
                }
                if (data === "itemyoumuus_ghostblade" && event.target.isAssassin === false) {
                    event.target.isAssassin = true;
                    event.target.appendChild(jpg);
                }
                else if (data === "itembotrk" && event.target.isBlademaster === false) {
                    event.target.isBlademaster = true;
                    event.target.appendChild(jpg);
                }
                else if (data === "itemyuumi" && event.target.isSorcerer === false) {
                    event.target.isSorcerer = true;
                    event.target.appendChild(jpg);
                }
                else if (data === "itemdarkin" && event.target.isDemon === false) {
                    event.target.isDemon = true;
                    event.target.appendChild(jpg);
                }
                else if (data === "itemknights_vow" && event.target.isKnight === false) {
                    event.target.isKnight = true;
                    event.target.appendChild(jpg);
                }
                else if (data === "itemfrozen_mallet" && event.target.isGlacial === false) {
                    event.target.isGlacial = true;
                    event.target.appendChild(jpg);
                }
                else if (data != "itemyoumuus_ghostblade" && data != "itembotrk" && data != "itemyuumi" && data != "itemdarkin" && data != "itemknights_vow" && data != "itemfrozen_mallet") event.target.appendChild(jpg);
                if (document.getElementById(data).ap != 0) {
                    let mnoznik = 1;
                    for (let x = 0; x < event.target.childElementCount; x++) {
                        if (x === 0) mnoznik = 1;
                        if (event.target.children[x].id === "itemrabadons_deathcap") mnoznik += 0.5;
                        if (x === event.target.childElementCount-1 && mnoznik > 1) {
                            event.target.ap *= mnoznik;
                            Math.round(event.target.ap);
                        }
                    }
                }
                incitemssynergies(event.target,data);
            }
        }
        //champ => baza
        else if (document.getElementById(data).parentElement.id.slice(0,5) === "champ" && event.target.parentElement.id.slice(0,4) === "item") {
            if (document.getElementById(data).ad != 0) {
                document.getElementById(data).parentElement.realad -= document.getElementById(data).ad;
                document.getElementById(data).parentElement.ad1 -= document.getElementById(data).ad;
                document.getElementById(data).parentElement.ad2 = Math.round(document.getElementById(data).parentElement.ad1 * 1.8);
                document.getElementById(data).parentElement.ad3 = Math.round(document.getElementById(data).parentElement.ad1 * 3.6);
                document.getElementById(data).parentElement.dps1 = Math.round(document.getElementById(data).parentElement.ad1 * document.getElementById(data).parentElement.as);
                document.getElementById(data).parentElement.dps2 = Math.round(document.getElementById(data).parentElement.ad2 * document.getElementById(data).parentElement.as);
                document.getElementById(data).parentElement.dps3 = Math.round(document.getElementById(data).parentElement.ad3 * document.getElementById(data).parentElement.as);
            }
            if (document.getElementById(data).as != 0) {
                let newas = document.getElementById(data).parentElement.as /= ((document.getElementById(data).as / 100) + 1);
                document.getElementById(data).parentElement.realas = newas;
                if (newas < 5) document.getElementById(data).parentElement.as = newas.toPrecision(3);
                else document.getElementById(data).parentElement.as = 5;
                document.getElementById(data).parentElement.dps1 = Math.round(document.getElementById(data).parentElement.ad1 * document.getElementById(data).parentElement.as);
                document.getElementById(data).parentElement.dps2 = Math.round(document.getElementById(data).parentElement.ad2 * document.getElementById(data).parentElement.as);
                document.getElementById(data).parentElement.dps3 = Math.round(document.getElementById(data).parentElement.ad3 * document.getElementById(data).parentElement.as);
            }
            if (document.getElementById(data).ap != 0) {
                document.getElementById(data).parentElement.realap -= document.getElementById(data).ap;
                document.getElementById(data).parentElement.ap = document.getElementById(data).parentElement.realap;
            }
            if (document.getElementById(data).armor != 0) document.getElementById(data).parentElement.armor -= document.getElementById(data).armor;
            if (document.getElementById(data).mr != 0) document.getElementById(data).parentElement.mr -= document.getElementById(data).mr;
            if (document.getElementById(data).health != 0) {
                document.getElementById(data).parentElement.health1 -= document.getElementById(data).health;
                document.getElementById(data).parentElement.health2 = document.getElementById(data).parentElement.health1 * 1.8;
                document.getElementById(data).parentElement.health3 = document.getElementById(data).parentElement.health1 * 3.6;
            }
            if (document.getElementById(data).mana != 0) document.getElementById(data).parentElement.manastart -= document.getElementById(data).mana;
            if (data === "itemrapid_firecannon") {
                if (document.getElementById(data).parentElement.attackrange === 2) document.getElementById(data).parentElement.attackrange = "melee";
                else document.getElementById(data).parentElement.attackrange /= 2;
            }
            if (data === "itemyoumuus_ghostblade") document.getElementById(data).parentElement.isAssassin = false;
            if (data === "itembotrk") document.getElementById(data).parentElement.isBlademaster = false;
            if (data === "itemyuumi") document.getElementById(data).parentElement.isSorcerer = false;
            if (data === "itemdarkin") document.getElementById(data).parentElement.isDemon = false;
            if (data === "itemknights_vow") document.getElementById(data).parentElement.isKnight = false;
            if (data === "itemfrozen_mallet") document.getElementById(data).parentElement.isGlacial = false;
            let parent = document.getElementById(data).parentElement;
            if (data === "itemyoumuus_ghostblade" || data === "itembotrk" || data === "itemyuumi" || data === "itemdarkin" || data === "itemknights_vow" || data === "itemfrozen_mallet") decitemssyngergies(parent,data);
            document.getElementById(data).parentElement.removeChild(document.getElementById(data));
            // showchampitems(parent);
            if (document.getElementById(data).ap != 0) {
                let mnoznik = 1;
                for (let x = 0; x < parent.childElementCount; x++) {
                    if (x === 0) mnoznik = 1;
                    if (parent.children[x].id === "itemrabadons_deathcap") mnoznik += 0.5;
                    if (x === parent.childElementCount-1 && mnoznik > 1) {
                        parent.ap *= mnoznik;
                        Math.round(parent.ap);
                    }
                }
            }
        }
    }
}

function incsynergies(champ) {
    synergiescheck++;
    if (champ.origin === "demon" || champ.origin2 === "demon") document.getElementById("syndemon").ile++;
    if (champ.origin === "dragon" || champ.origin2 === "dragon") document.getElementById("syndragon").ile++;
    if (champ.origin === "exile" || champ.origin2 === "exile") document.getElementById("synexile").ile++;
    if (champ.origin === "glacial" || champ.origin2 === "glacial") document.getElementById("synglacial").ile++;
    if (champ.origin === "hextech" || champ.origin2 === "hextech") document.getElementById("synhextech").ile++;
    if (champ.origin === "imperial" || champ.origin2 === "imperial") document.getElementById("synimperial").ile++;
    if (champ.origin === "ninja" || champ.origin2 === "ninja") document.getElementById("synninja").ile++;
    if (champ.origin === "noble" || champ.origin2 === "noble") document.getElementById("synnoble").ile++;
    if (champ.origin === "phantom" || champ.origin2 === "phantom") document.getElementById("synphantom").ile++;
    if (champ.origin === "pirate" || champ.origin2 === "pirate") document.getElementById("synpirate").ile++;
    if (champ.origin === "robot" || champ.origin2 === "robot") document.getElementById("synrobot").ile++;
    if (champ.origin === "void" || champ.origin2 === "void") document.getElementById("synvoid").ile++;
    if (champ.origin === "wild" || champ.origin2 === "wild") document.getElementById("synwild").ile++;
    if (champ.origin === "yordle" || champ.origin2 === "yordle") document.getElementById("synyordle").ile++;
    if (champ.klasa === "assassin" || champ.klasa2 === "assassin") document.getElementById("synassassin").ile++;
    if (champ.klasa === "blademaster" || champ.klasa2 === "blademaster") document.getElementById("synblademaster").ile++;
    if (champ.klasa === "brawler" || champ.klasa2 === "brawler") document.getElementById("synbrawler").ile++;
    if (champ.klasa === "elementalist" || champ.klasa2 === "elementalist") document.getElementById("synelementalist").ile++;
    if (champ.klasa === "guardian" || champ.klasa2 === "guardian") document.getElementById("synguardian").ile++;
    if (champ.klasa === "gunslinger" || champ.klasa2 === "gunslinger") document.getElementById("syngunslinger").ile++;
    if (champ.klasa === "knight" || champ.klasa2 === "knight") document.getElementById("synknight").ile++;
    if (champ.klasa === "ranger" || champ.klasa2 === "ranger") document.getElementById("synranger").ile++;
    if (champ.klasa === "shapeshifter" || champ.klasa2 === "shapeshifter") document.getElementById("synshapeshifter").ile++;
    if (champ.klasa === "sorcerer" || champ.klasa2 === "sorcerer") document.getElementById("synsorcerer").ile++;

    if (document.getElementById("syndemon").ile != 0) document.getElementById("syndemon").style.visibility = "visible";
    if (document.getElementById("syndragon").ile != 0) document.getElementById("syndragon").style.visibility = "visible";        
    if (document.getElementById("synexile").ile != 0) document.getElementById("synexile").style.visibility = "visible";
    if (document.getElementById("synglacial").ile != 0) document.getElementById("synglacial").style.visibility = "visible";
    if (document.getElementById("synhextech").ile != 0) document.getElementById("synhextech").style.visibility = "visible";
    if (document.getElementById("synimperial").ile != 0) document.getElementById("synimperial").style.visibility = "visible";
    if (document.getElementById("synninja").ile != 0) document.getElementById("synninja").style.visibility = "visible";
    if (document.getElementById("synnoble").ile != 0) document.getElementById("synnoble").style.visibility = "visible";
    if (document.getElementById("synphantom").ile != 0) document.getElementById("synphantom").style.visibility = "visible";
    if (document.getElementById("synpirate").ile != 0) document.getElementById("synpirate").style.visibility = "visible";
    if (document.getElementById("synrobot").ile != 0) document.getElementById("synrobot").style.visibility = "visible";
    if (document.getElementById("synvoid").ile != 0) document.getElementById("synvoid").style.visibility = "visible";
    if (document.getElementById("synwild").ile != 0) document.getElementById("synwild").style.visibility = "visible";
    if (document.getElementById("synyordle").ile != 0) document.getElementById("synyordle").style.visibility = "visible";
    if (document.getElementById("synassassin").ile != 0) document.getElementById("synassassin").style.visibility = "visible";
    if (document.getElementById("synblademaster").ile != 0) document.getElementById("synblademaster").style.visibility = "visible";
    if (document.getElementById("synbrawler").ile != 0) document.getElementById("synbrawler").style.visibility = "visible";
    if (document.getElementById("synelementalist").ile != 0) document.getElementById("synelementalist").style.visibility = "visible";
    if (document.getElementById("synguardian").ile != 0) document.getElementById("synguardian").style.visibility = "visible";
    if (document.getElementById("syngunslinger").ile != 0) document.getElementById("syngunslinger").style.visibility = "visible";
    if (document.getElementById("synknight").ile != 0) document.getElementById("synknight").style.visibility = "visible";
    if (document.getElementById("synranger").ile != 0) document.getElementById("synranger").style.visibility = "visible";
    if (document.getElementById("synshapeshifter").ile != 0) document.getElementById("synshapeshifter").style.visibility = "visible";
    if (document.getElementById("synsorcerer").ile != 0) document.getElementById("synsorcerer").style.visibility = "visible";
    checksynergies(champ);
}

function incitemssynergies(champ,data) {
    if (data === "itemyoumuus_ghostblade" && champ.isAssassin === true) document.getElementById("synassassin").ile++;
    if (data === "itembotrk" && champ.isBlademaster === true) document.getElementById("synblademaster").ile++;
    if (data === "itemyuumi" && champ.isSorcerer === true) document.getElementById("synsorcerer").ile++;
    if (data === "itemdarkin" && champ.isDemon === true) document.getElementById("syndemon").ile++;
    if (data === "itemknights_vow" && champ.isKnight === true) document.getElementById("synknight").ile++;
    if (data === "itemfrozen_mallet" && champ.isGlacial === true) document.getElementById("synglacial").ile++;

    if (document.getElementById("synassassin").ile != 0) document.getElementById("synassassin").style.visibility = "visible";
    if (document.getElementById("synblademaster").ile != 0) document.getElementById("synblademaster").style.visibility = "visible";
    if (document.getElementById("synsorcerer").ile != 0) document.getElementById("synsorcerer").style.visibility = "visible";
    if (document.getElementById("syndemon").ile != 0) document.getElementById("syndemon").style.visibility = "visible";
    if (document.getElementById("synknight").ile != 0) document.getElementById("synknight").style.visibility = "visible";
    if (document.getElementById("synglacial").ile != 0) document.getElementById("synglacial").style.visibility = "visible";
    checksynergies(champ);
}

function decsynergies(champ) {
    synergiescheck--;
    if (champ.origin === "demon" || champ.origin2 === "demon") document.getElementById("syndemon").ile--;
    if (champ.origin === "dragon" || champ.origin2 === "dragon") document.getElementById("syndragon").ile--;
    if (champ.origin === "exile" || champ.origin2 === "exile") document.getElementById("synexile").ile--;
    if (champ.origin === "glacial" || champ.origin2 === "glacial") document.getElementById("synglacial").ile--;
    if (champ.origin === "hextech" || champ.origin2 === "hextech") document.getElementById("synhextech").ile--;
    if (champ.origin === "imperial" || champ.origin2 === "imperial") document.getElementById("synimperial").ile--;
    if (champ.origin === "ninja" || champ.origin2 === "ninja") document.getElementById("synninja").ile--;
    if (champ.origin === "noble" || champ.origin2 === "noble") document.getElementById("synnoble").ile--;
    if (champ.origin === "phantom" || champ.origin2 === "phantom") document.getElementById("synphantom").ile--;
    if (champ.origin === "pirate" || champ.origin2 === "pirate") document.getElementById("synpirate").ile--;
    if (champ.origin === "robot" || champ.origin2 === "robot") document.getElementById("synrobot").ile--;
    if (champ.origin === "void" || champ.origin2 === "void") document.getElementById("synvoid").ile--;
    if (champ.origin === "wild" || champ.origin2 === "wild") document.getElementById("synwild").ile--;
    if (champ.origin === "yordle" || champ.origin2 === "yordle") document.getElementById("synyordle").ile--;
    if (champ.klasa === "assassin" || champ.klasa2 === "assassin") document.getElementById("synassassin").ile--;
    if (champ.klasa === "blademaster" || champ.klasa2 === "blademaster") document.getElementById("synblademaster").ile--;
    if (champ.klasa === "brawler" || champ.klasa2 === "brawler") document.getElementById("synbrawler").ile--;
    if (champ.klasa === "elementalist" || champ.klasa2 === "elementalist") document.getElementById("synelementalist").ile--;
    if (champ.klasa === "guardian" || champ.klasa2 === "guardian") document.getElementById("synguardian").ile--;
    if (champ.klasa === "gunslinger" || champ.klasa2 === "gunslinger") document.getElementById("syngunslinger").ile--;
    if (champ.klasa === "knight" || champ.klasa2 === "knight") document.getElementById("synknight").ile--;
    if (champ.klasa === "ranger" || champ.klasa2 === "ranger") document.getElementById("synranger").ile--;
    if (champ.klasa === "shapeshifter" || champ.klasa2 === "shapeshifter") document.getElementById("synshapeshifter").ile--;
    if (champ.klasa === "sorcerer" || champ.klasa2 === "sorcerer") document.getElementById("synsorcerer").ile--;

    if (document.getElementById("syndemon").ile === 0) {
        document.getElementById("syndemon").style.visibility = "hidden";
        document.getElementById("syndemon").innerHTML = "";
        document.getElementById("syndemon").priority = 0;
    }
    if (document.getElementById("syndragon").ile === 0) {
        document.getElementById("syndragon").style.visibility = "hidden";        
        document.getElementById("syndragon").innerHTML = "";
        document.getElementById("syndragon").priority = 0;
    }
    if (document.getElementById("synexile").ile === 0) {
        document.getElementById("synexile").style.visibility = "hidden";
        document.getElementById("synexile").innerHTML = "";
        document.getElementById("synexile").priority = 0;
    }
    if (document.getElementById("synglacial").ile === 0) {
        document.getElementById("synglacial").style.visibility = "hidden";
        document.getElementById("synglacial").innerHTML = "";
        document.getElementById("synglacial").priority = 0;
    }
    if (document.getElementById("synhextech").ile === 0) {
        document.getElementById("synhextech").style.visibility = "hidden";
        document.getElementById("synhextech").innerHTML = "";
        document.getElementById("synhextech").priority = 0;
    }
    if (document.getElementById("synimperial").ile === 0) {
        document.getElementById("synimperial").style.visibility = "hidden";
        document.getElementById("synimperial").innerHTML = "";
        document.getElementById("synimperial").priority = 0;
    }
    if (document.getElementById("synninja").ile === 0) {
        document.getElementById("synninja").style.visibility = "hidden";
        document.getElementById("synninja").innerHTML = "";
        document.getElementById("synninja").priority = 0;
    }
    if (document.getElementById("synnoble").ile === 0) {
        document.getElementById("synnoble").style.visibility = "hidden";
        document.getElementById("synnoble").innerHTML = "";
        document.getElementById("synnoble").priority = 0;
    }
    if (document.getElementById("synphantom").ile === 0) {
        document.getElementById("synphantom").style.visibility = "hidden";
        document.getElementById("synphantom").innerHTML = "";
        document.getElementById("synphantom").priority = 0;
    }
    if (document.getElementById("synpirate").ile === 0) {
        document.getElementById("synpirate").style.visibility = "hidden";
        document.getElementById("synpirate").innerHTML = "";
        document.getElementById("synpirate").priority = 0;
    }
    if (document.getElementById("synrobot").ile === 0) {
        document.getElementById("synrobot").style.visibility = "hidden";
        document.getElementById("synrobot").innerHTML = "";
        document.getElementById("synrobot").priority = 0;
    }
    if (document.getElementById("synvoid").ile === 0) {
        document.getElementById("synvoid").style.visibility = "hidden";
        document.getElementById("synvoid").innerHTML = "";
        document.getElementById("synvoid").priority = 0;
    }
    if (document.getElementById("synwild").ile === 0) {
        document.getElementById("synwild").style.visibility = "hidden";
        document.getElementById("synwild").innerHTML = "";
        document.getElementById("synwild").priority = 0;
    }
    if (document.getElementById("synyordle").ile === 0) {
        document.getElementById("synyordle").style.visibility = "hidden";
        document.getElementById("synyordle").innerHTML = "";
        document.getElementById("synyordle").priority = 0;
    }
    if (document.getElementById("synassassin").ile === 0) {
        document.getElementById("synassassin").style.visibility = "hidden";
        document.getElementById("synassassin").innerHTML = "";
        document.getElementById("synassassin").priority = 0;
    }
    if (document.getElementById("synblademaster").ile === 0) {
        document.getElementById("synblademaster").style.visibility = "hidden";
        document.getElementById("synblademaster").innerHTML = "";
        document.getElementById("synblademaster").priority = 0;
    }
    if (document.getElementById("synbrawler").ile === 0) {
        document.getElementById("synbrawler").style.visibility = "hidden";
        document.getElementById("synbrawler").innerHTML = "";
        document.getElementById("synbrawler").priority = 0;
    }
    if (document.getElementById("synelementalist").ile === 0) {
        document.getElementById("synelementalist").style.visibility = "hidden";
        document.getElementById("synelementalist").innerHTML = "";
        document.getElementById("synelementalist").priority = 0;
    }
    if (document.getElementById("synguardian").ile === 0) {
        document.getElementById("synguardian").style.visibility = "hidden";
        document.getElementById("synguardian").innerHTML = "";
        document.getElementById("synguardian").priority = 0;
    }
    if (document.getElementById("syngunslinger").ile === 0) {
        document.getElementById("syngunslinger").style.visibility = "hidden";
        document.getElementById("syngunslinger").innerHTML = "";
        document.getElementById("syngunslinger").priority = 0;
    }
    if (document.getElementById("synknight").ile === 0) {
        document.getElementById("synknight").style.visibility = "hidden";
        document.getElementById("synknight").innerHTML = "";
        document.getElementById("synknight").priority = 0;
    }
    if (document.getElementById("synranger").ile === 0) {
        document.getElementById("synranger").style.visibility = "hidden";
        document.getElementById("synranger").innerHTML = "";
        document.getElementById("synranger").priority = 0;
    }
    if (document.getElementById("synshapeshifter").ile === 0) {
        document.getElementById("synshapeshifter").style.visibility = "hidden";
        document.getElementById("synshapeshifter").innerHTML = "";
        document.getElementById("synshapeshifter").priority = 0;
    }
    if (document.getElementById("synsorcerer").ile === 0) {
        document.getElementById("synsorcerer").style.visibility = "hidden";
        document.getElementById("synsorcerer").innerHTML = "";
        document.getElementById("synsorcerer").priority = 0;
    }
    checksynergies(champ);
}

function decitemssyngergies(champ,data) {
    if (data === "itemyoumuus_ghostblade" && champ.isAssassin === false) document.getElementById("synassassin").ile--;
    if (data === "itembotrk" && champ.isBlademaster === false) document.getElementById("synblademaster").ile--;
    if (data === "itemyuumi" && champ.isSorcerer === false) document.getElementById("synsorcerer").ile--;
    if (data === "itemdarkin" && champ.isDemon === false) document.getElementById("syndemon").ile--;
    if (data === "itemknights_vow" && champ.isKnight === false) document.getElementById("synknight").ile--;
    if (data === "itemfrozen_mallet" && champ.isGlacial === false) document.getElementById("synglacial").ile--;

    if (data.slice(0,5) === "champ") {
        for (let x = document.getElementById(data).childElementCount-1; x >= 0; x--) {
            if (document.getElementById(data).children[x].id === "itemyoumuus_ghostblade") document.getElementById("synassassin").ile--;
            if (document.getElementById(data).children[x].id === "itembotrk") document.getElementById("synblademaster").ile--;
            if (document.getElementById(data).children[x].id === "itemyuumi") document.getElementById("synsorcerer").ile--;
            if (document.getElementById(data).children[x].id === "itemdarkin") document.getElementById("syndemon").ile--;
            if (document.getElementById(data).children[x].id === "itemknights_vow") document.getElementById("synknight").ile--;
            if (document.getElementById(data).children[x].id === "itemfrozen_mallet") document.getElementById("synglacial").ile--;
        }
    }

    if (document.getElementById("synassassin").ile === 0) {
        document.getElementById("synassassin").style.visibility = "hidden";
        document.getElementById("synassassin").innerHTML = "";
        document.getElementById("synassassin").priority = 0;
    }
    if (document.getElementById("synblademaster").ile === 0) {
        document.getElementById("synblademaster").style.visibility = "hidden";
        document.getElementById("synblademaster").innerHTML = "";
        document.getElementById("synblademaster").priority = 0;
    }
    if (document.getElementById("synsorcerer").ile === 0) {
        document.getElementById("synsorcerer").style.visibility = "hidden";
        document.getElementById("synsorcerer").innerHTML = "";
        document.getElementById("synsorcerer").priority = 0;
    }
    if (document.getElementById("syndemon").ile === 0) {
        document.getElementById("syndemon").style.visibility = "hidden";
        document.getElementById("syndemon").innerHTML = "";
        document.getElementById("syndemon").priority = 0;
    }
    if (document.getElementById("synknight").ile === 0) {
        document.getElementById("synknight").style.visibility = "hidden";
        document.getElementById("synknight").innerHTML = "";
        document.getElementById("synknight").priority = 0;
    }
    if (document.getElementById("synglacial").ile === 0) {
        document.getElementById("synglacial").style.visibility = "hidden";
        document.getElementById("synglacial").innerHTML = "";
        document.getElementById("synglacial").priority = 0;
    }
    checksynergies(champ);
}

function checksynergies(champ) {
    if (synergiescheck === 0) {
        document.getElementById("teamcomp").style.visibility = "hidden";
        if (document.getElementById("synrobot").ile === 0) {
            if (champ.origin === "robot" || champ.origin2 === "robot") champ.manastart = 0;
        }
    } else {
        if (champ.origin === "demon" || champ.origin2 === "demon" || champ.isDemon === true || champ.wasDemon === true) {
            if (document.getElementById("syndemon").ile === 1) {
                document.getElementById("syndemon").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("syndemon").innerHTML = "Demon " + document.getElementById("syndemon").ile + "/2";
                document.getElementById("syndemon").priority = 1;
            }
            if (document.getElementById("syndemon").ile === 2 || document.getElementById("syndemon").ile === 3) {
                document.getElementById("syndemon").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("syndemon").innerHTML = "Demon " + document.getElementById("syndemon").ile + "/4";
                document.getElementById("syndemon").priority = 2;
            }
            if (document.getElementById("syndemon").ile === 4 || document.getElementById("syndemon").ile === 5) {
                document.getElementById("syndemon").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("syndemon").innerHTML = "Demon " + document.getElementById("syndemon").ile + "/6";
                document.getElementById("syndemon").priority = 3;
            }
            if (document.getElementById("syndemon").ile >= 6) {
                document.getElementById("syndemon").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("syndemon").innerHTML = "Demon " + document.getElementById("syndemon").ile;
                document.getElementById("syndemon").priority = 4;
            }
            if (champ.wasDemon === true) champ.wasDemon === false;
        }
        if (champ.origin === "dragon" || champ.origin2 === "dragon") {
            if (document.getElementById("syndragon").ile === 1) {
                document.getElementById("syndragon").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("syndragon").innerHTML = "Dragon " + document.getElementById("syndragon").ile + "/2";
                document.getElementById("syndragon").priority = 1;
            } 
            if (document.getElementById("syndragon").ile >= 2) {
                document.getElementById("syndragon").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("syndragon").innerHTML = "Dragon " + document.getElementById("syndragon").ile;
                document.getElementById("syndragon").priority = 4;
            }
        }
        if (champ.origin === "exile" || champ.origin2 === "exile") {
            if (document.getElementById("synexile").ile >= 1) {
                document.getElementById("synexile").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synexile").innerHTML = "Exile " + document.getElementById("synexile").ile;
                document.getElementById("synexile").priority = 4;
            }
        }
        if (champ.origin === "glacial" || champ.origin2 === "glacial" || champ.isGlacial === true || champ.wasGlacial === true) {
            if (document.getElementById("synglacial").ile === 1) {
                document.getElementById("synglacial").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synglacial").innerHTML = "Glacial " + document.getElementById("synglacial").ile + "/2";
                document.getElementById("synglacial").priority = 1;
            }
            if (document.getElementById("synglacial").ile === 2 || document.getElementById("synglacial").ile === 3) {
                document.getElementById("synglacial").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synglacial").innerHTML = "Glacial " + document.getElementById("synglacial").ile + "/4";
                document.getElementById("synglacial").priority = 2
            }
            if (document.getElementById("synglacial").ile === 4 || document.getElementById("synglacial").ile === 5) {
                document.getElementById("synglacial").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("synglacial").innerHTML = "Glacial " + document.getElementById("synglacial").ile + "/6";
                document.getElementById("synglacial").priority = 3;
            }
            if (document.getElementById("synglacial").ile >= 6) {
                document.getElementById("synglacial").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synglacial").innerHTML = "Glacial " + document.getElementById("synglacial").ile;
                document.getElementById("synglacial").priority = 4;
            }
            if (champ.wasGlacial === true) champ.wasGlacial === false;
        }
        if (champ.origin === "hextech" || champ.origin2 === "hextech") {
            if (document.getElementById("synhextech").ile === 1) {
                document.getElementById("synhextech").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synhextech").innerHTML = "Hextech " + document.getElementById("synhextech").ile + "/2";
                document.getElementById("synhextech").priority = 1;
            }
            if (document.getElementById("synhextech").ile === 2 || document.getElementById("synhextech").ile === 3) {
                document.getElementById("synhextech").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synhextech").innerHTML = "Hextech " + document.getElementById("synhextech").ile + "/4";
                document.getElementById("synhextech").priority = 2;
            }
            if (document.getElementById("synhextech").ile >= 4) {
                document.getElementById("synhextech").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synhextech").innerHTML = "Hextech " + document.getElementById("synhextech").ile;
                document.getElementById("synhextech").priority = 4;
            }
        }
        if (champ.origin === "imperial" || champ.origin2 === "imperial") {
            if (document.getElementById("synimperial").ile === 1) {
                document.getElementById("synimperial").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synimperial").innerHTML = "Imperial " + document.getElementById("synimperial").ile + "/2";
                document.getElementById("synimperial").priority = 1;
            }
            if (document.getElementById("synimperial").ile === 2 || document.getElementById("synimperial").ile === 3) {
                document.getElementById("synimperial").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synimperial").innerHTML = "Imperial " + document.getElementById("synimperial").ile + "/4";
                document.getElementById("synimperial").priority = 2;
            }
            if (document.getElementById("synimperial").ile >= 4) {
                document.getElementById("synimperial").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synimperial").innerHTML = "Imperial " + document.getElementById("synimperial").ile;
                document.getElementById("synimperial").priority = 4;
            }
        }
        if (champ.origin === "ninja" || champ.origin2 === "ninja") {
            if (document.getElementById("synninja").ile === 2 || document.getElementById("synninja").ile === 3 || document.getElementById("synninja").ile > 4) {
                document.getElementById("synninja").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synninja").innerHTML = "Ninja " + document.getElementById("synninja").ile + "/1";
                document.getElementById("synninja").priority = 1;
                for (let y = 1; y <= 3; y++) {
                    for (let x = 1; x <= 7; x++) {
                        let spr = document.getElementById("plansza" + y + "." + x);
                        if (document.getElementById("plansza" + y + "." + x).childElementCount === 1) {
                            if (spr.firstElementChild.origin === "ninja" || spr.firstElementChild.origin2 === "synninja") {
                                document.getElementById("synninja").multiplier = 1;
                                spr.firstElementChild.ad1 = spr.firstElementChild.realad;
                                spr.firstElementChild.ad2 = Math.round(spr.firstElementChild.ad1 * 1.8);
                                spr.firstElementChild.ad3 = Math.round(spr.firstElementChild.ad1 * 3.6);
                                spr.firstElementChild.dps1 = Math.round(spr.firstElementChild.ad1 * spr.firstElementChild.as);
                                spr.firstElementChild.dps2 = Math.round(spr.firstElementChild.ad2 * spr.firstElementChild.as);
                                spr.firstElementChild.dps3 = Math.round(spr.firstElementChild.ad3 * spr.firstElementChild.as);
                                for (let i = spr.firstElementChild.childElementCount-1; i >= 0; i--) {
                                    if (spr.firstElementChild.children[i].id === "itemrabadons_deathcap") document.getElementById("synninja").multiplier += 0.5;
                                }
                                spr.firstElementChild.ap = spr.firstElementChild.realap * document.getElementById("synninja").multiplier;
                            }
                        }
                    }
                }
                let pola = document.getElementById("champs").getElementsByTagName("td");
                for (let p = 0; p < pola.length; p++) {
                    if (pola[p].childElementCount > 0) {
                        if (pola[p].firstElementChild.origin === "ninja" || pola[p].firstElementChild.origin2 === "ninja") {
                            document.getElementById("synninja").multiplier = 1;
                            pola[p].firstElementChild.ad1 = pola[p].firstElementChild.realad;
                            pola[p].firstElementChild.ad2 = Math.round(pola[p].firstElementChild.ad1 * 1.8);
                            pola[p].firstElementChild.ad3 = Math.round(pola[p].firstElementChild.ad1 * 3.6);
                            pola[p].firstElementChild.dps1 = Math.round(pola[p].firstElementChild.ad1 * pola[p].firstElementChild.as);
                            pola[p].firstElementChild.dps2 = Math.round(pola[p].firstElementChild.ad2 * pola[p].firstElementChild.as);
                            pola[p].firstElementChild.dps3 = Math.round(pola[p].firstElementChild.ad3 * pola[p].firstElementChild.as);
                            for (let i = pola[p].firstElementChild.childElementCount-1; i >= 0; i--) {
                                if (pola[p].firstElementChild.children[i].id === "itemrabadons_deathcap") document.getElementById("synninja").multiplier += 0.5;
                            }
                            if (document.getElementById("synninja").multiplier > 1) pola[p].firstElementChild.ap = (pola[p].firstElementChild.ap - (document.getElementById("synninja").bonus * document.getElementById("synninja").multiplier)) * document.getElementById("synninja").multiplier;
                            else if (pola[p].firstElementChild.ap > 0) pola[p].firstElementChild.ap = pola[p].firstElementChild.realap;
                        }
                    }
                }
            }
            if (document.getElementById("synninja").ile === 1) {
                document.getElementById("synninja").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synninja").priority = 2;
            }
            if (document.getElementById("synninja").ile === 4) {
                document.getElementById("synninja").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synninja").priority = 4;
            }
            if (document.getElementById("synninja").ile === 1 || document.getElementById("synninja").ile === 4) {
                document.getElementById("synninja").innerHTML = "Ninja " + document.getElementById("synninja").ile;
                if (document.getElementById("synninja").ile === 1) document.getElementById("synninja").bonus = 50;
                else if (document.getElementById("synninja").ile === 4) document.getElementById("synninja").bonus = 70;
                for (let y = 1; y <= 3; y++) {
                    for (let x = 1; x <= 7; x++) {
                        let spr = document.getElementById("plansza" + y + "." + x);
                        if (spr.childElementCount === 1) {
                            if (spr.firstElementChild.origin === "ninja" || spr.firstElementChild.origin2 === "synninja") {
                                document.getElementById("synninja").multiplier = 1;
                                spr.firstElementChild.ad1 = spr.firstElementChild.realad + document.getElementById("synninja").bonus;
                                spr.firstElementChild.ad2 = Math.round(spr.firstElementChild.ad1 * 1.8);
                                spr.firstElementChild.ad3 = Math.round(spr.firstElementChild.ad1 * 3.6);
                                spr.firstElementChild.dps1 = Math.round(spr.firstElementChild.ad1 * spr.firstElementChild.as);
                                spr.firstElementChild.dps2 = Math.round(spr.firstElementChild.ad2 * spr.firstElementChild.as);
                                spr.firstElementChild.dps3 = Math.round(spr.firstElementChild.ad3 * spr.firstElementChild.as);
                                for (let i = spr.firstElementChild.childElementCount-1; i >= 0; i--) {
                                    if (spr.firstElementChild.children[i].id === "itemrabadons_deathcap") document.getElementById("synninja").multiplier += 0.5;
                                }
                                if (document.getElementById("synninja").multiplier > 1) spr.firstElementChild.ap += (document.getElementById("synninja").bonus * document.getElementById("synninja").multiplier);
                                else spr.firstElementChild.ap = spr.firstElementChild.realap + document.getElementById("synninja").bonus;
                            }
                        }
                    }
                }
            }
        }
        if (champ.origin === "noble" || champ.origin2 === "noble") {
            if (document.getElementById("synnoble").ile === 1 || document.getElementById("synnoble").ile === 2) {
                document.getElementById("synnoble").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synnoble").innerHTML = "Noble " + document.getElementById("synnoble").ile + "/3";
                document.getElementById("synnoble").priority = 1;
            }
            if (document.getElementById("synnoble").ile >= 3 && document.getElementById("synnoble").ile <= 5) {
                document.getElementById("synnoble").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synnoble").innerHTML = "Noble " + document.getElementById("synnoble").ile + "/6";
                document.getElementById("synnoble").priority = 2;
            }
            if (document.getElementById("synnoble").ile >= 6) {
                document.getElementById("synnoble").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synnoble").innerHTML = "Noble " + document.getElementById("synnoble").ile;
                document.getElementById("synnoble").priority = 4;
            }
        }
        if (champ.origin === "phantom" || champ.origin2 === "phantom") {
            if (document.getElementById("synphantom").ile === 1) {
                document.getElementById("synphantom").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synphantom").innerHTML = "Phantom " + document.getElementById("synphantom").ile + "/2";
                document.getElementById("synphantom").priority = 1;
            }
            if (document.getElementById("synphantom").ile >= 2) {
                document.getElementById("synphantom").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synphantom").innerHTML = "Phantom " + document.getElementById("synphantom").ile;
                document.getElementById("synphantom").priority = 4;
            }
        }
        if (champ.origin === "pirate" || champ.origin2 === "pirate") {
            if (document.getElementById("synpirate").ile === 1 || document.getElementById("synpirate").ile === 2) {
                document.getElementById("synpirate").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synpirate").innerHTML = "Pirate " + document.getElementById("synpirate").ile + "/3";
                document.getElementById("synpirate").priority = 1;
            }
            if (document.getElementById("synpirate").ile >= 3) {
                document.getElementById("synpirate").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synpirate").innerHTML = "Pirate " + document.getElementById("synpirate").ile;
                document.getElementById("synpirate").priority = 4;
            }
        }
        if (champ.origin === "robot" || champ.origin2 === "robot") {
            if (document.getElementById("synrobot").ile >= 1) {
                document.getElementById("synrobot").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synrobot").innerHTML = "Robot " + document.getElementById("synrobot").ile;
                document.getElementById("synrobot").priority = 4;
                champ.manastart = champ.skillmana;
            } else champ.manastart = 0;
        }
        if (champ.origin === "void" || champ.origin2 === "void") {
            if (document.getElementById("synvoid").ile === 1 || document.getElementById("synvoid").ile === 2) {
                document.getElementById("synvoid").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synvoid").innerHTML = "Void " + document.getElementById("synvoid").ile + "/3";
                document.getElementById("synvoid").priority = 1;
            }
            if (document.getElementById("synvoid").ile >= 3) {
                document.getElementById("synvoid").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synvoid").innerHTML = "Void " + document.getElementById("synvoid").ile;
                document.getElementById("synvoid").priority = 4;
            }
        }
        if (champ.origin === "wild" || champ.origin2 === "wild") {
            if (document.getElementById("synwild").ile === 1) {
                document.getElementById("synwild").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synwild").innerHTML = "Wild " + document.getElementById("synwild").ile + "/2";
                document.getElementById("synwild").priority = 1;
            }
            if (document.getElementById("synwild").ile === 2 || document.getElementById("synwild").ile === 3) {
                document.getElementById("synwild").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synwild").innerHTML = "Wild " + document.getElementById("synwild").ile + "/4";
                document.getElementById("synwild").priority = 2;
            }
            if (document.getElementById("synwild").ile >= 4) {
                document.getElementById("synwild").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synwild").innerHTML = "Wild " + document.getElementById("synwild").ile;
                document.getElementById("synwild").priority = 4;
            }
        }
        if (champ.origin === "yordle" || champ.origin2 === "yordle") {
            if (document.getElementById("synyordle").ile === 1 || document.getElementById("synyordle").ile === 2) {
                document.getElementById("synyordle").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synyordle").innerHTML = "Yordle " + document.getElementById("synyordle").ile + "/3";
                document.getElementById("synyordle").priority = 1;
            }
            if (document.getElementById("synyordle").ile >= 3 && document.getElementById("synyordle").ile <= 5) {
                document.getElementById("synyordle").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synyordle").innerHTML = "Yordle " + document.getElementById("synyordle").ile + "/6";
                document.getElementById("synyordle").priority = 2;
            }
            if (document.getElementById("synyordle").ile >= 6) {
                document.getElementById("synyordle").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synyordle").innerHTML = "Yordle " + document.getElementById("synyordle").ile;
                document.getElementById("synyordle").priority = 4;
            }
        }
        if (champ.klasa === "assassin" || champ.klasa2 === "assassin" || champ.isAssassin === true || champ.wasAssassin === true) {
            if (document.getElementById("synassassin").ile === 1 || document.getElementById("synassassin").ile === 2) {
                document.getElementById("synassassin").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synassassin").innerHTML = "Assassin " + document.getElementById("synassassin").ile + "/3";
                document.getElementById("synassassin").priority = 1;
            }
            if (document.getElementById("synassassin").ile >= 3 && document.getElementById("synassassin").ile <= 5) {
                document.getElementById("synassassin").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synassassin").innerHTML = "Assassin " + document.getElementById("synassassin").ile + "/6";
                document.getElementById("synassassin").priority = 2;
            }
            if (document.getElementById("synassassin").ile >= 6) {
                document.getElementById("synassassin").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synassassin").innerHTML = "Assassin " + document.getElementById("synassassin").ile;
                document.getElementById("synassassin").priority = 4;
            }
            if (champ.wasAssassin === true) champ.wasAssassin = false;
        }
        if (champ.klasa === "blademaster" || champ.klasa2 === "blademaster" || champ.isBlademaster === true || champ.wasBlademaster === true) {
            if (document.getElementById("synblademaster").ile === 1 || document.getElementById("synblademaster").ile === 2) {
                document.getElementById("synblademaster").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synblademaster").innerHTML = "Blademaster " + document.getElementById("synblademaster").ile + "/3";
                document.getElementById("synblademaster").priority = 1;
            }
            if (document.getElementById("synblademaster").ile >= 3 && document.getElementById("synblademaster").ile <= 5) {
                document.getElementById("synblademaster").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synblademaster").innerHTML = "Blademaster " + document.getElementById("synblademaster").ile + "/6";
                document.getElementById("synblademaster").priority = 2;
            }
            if (document.getElementById("synblademaster").ile >= 6 && document.getElementById("synblademaster").ile <= 8) {
                document.getElementById("synblademaster").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("synblademaster").innerHTML = "Blademaster " + document.getElementById("synblademaster").ile + "/9";
                document.getElementById("synblademaster").priority = 3;
            }
            if (document.getElementById("synblademaster").ile >= 9) {
                document.getElementById("synblademaster").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synblademaster").innerHTML = "Blademaster " + document.getElementById("synblademaster").ile;
                document.getElementById("synblademaster").priority = 4;
            }
            if (champ.wasBlademaster === true) champ.wasBlademaster = false;
        }
        if (champ.klasa === "brawler" || champ.klasa2 === "brawler") {
            if (document.getElementById("synbrawler").ile === 1) {
                document.getElementById("synbrawler").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synbrawler").innerHTML = "Brawler " + document.getElementById("synbrawler").ile + "/2";
                document.getElementById("synbrawler").priority = 1;
            }
            if (document.getElementById("synbrawler").ile === 2 || document.getElementById("synbrawler").ile === 3) {
                document.getElementById("synbrawler").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synbrawler").innerHTML = "Brawler " + document.getElementById("synbrawler").ile + "/4";
                document.getElementById("synbrawler").priority = 2;
            }
            if (document.getElementById("synbrawler").ile === 4 || document.getElementById("synbrawler").ile === 5) {
                document.getElementById("synbrawler").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("synbrawler").innerHTML = "Brawler " + document.getElementById("synbrawler").ile + "/6";
                document.getElementById("synbrawler").priority = 3;
            }
            if (document.getElementById("synbrawler").ile >= 6) {
                document.getElementById("synbrawler").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synbrawler").innerHTML = "Brawler " + document.getElementById("synbrawler").ile;
                document.getElementById("synbrawler").priority = 4;
            }
        }
        if (champ.klasa === "elementalist" || champ.klasa2 === "elementalist") {
            if (document.getElementById("synelementalist").ile === 1 || document.getElementById("synelementalist").ile === 2) {
                document.getElementById("synelementalist").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synelementalist").innerHTML = "Elementalist " + document.getElementById("synelementalist").ile + "/3";
                document.getElementById("synelementalist").priority = 1;
            }
            if (document.getElementById("synelementalist").ile >= 3) {
                document.getElementById("synelementalist").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synelementalist").innerHTML = "Elementalist " + document.getElementById("synelementalist").ile;
                document.getElementById("synelementalist").priority = 4;
            }
        }
        if (champ.klasa === "guardian" || champ.klasa2 === "guardian") {
            if (document.getElementById("synguardian").ile === 1) {
                document.getElementById("synguardian").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synguardian").innerHTML = "Guardian " + document.getElementById("synguardian").ile + "/2";
                document.getElementById("synguardian").priority = 1;
            }
            if (document.getElementById("synguardian").ile >= 2) {
                document.getElementById("synguardian").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synguardian").innerHTML = "Guardian " + document.getElementById("synguardian").ile;
                document.getElementById("synguardian").priority = 4;
            }
        }
        if (champ.klasa === "gunslinger" || champ.klasa2 === "gunslinger") {
            if (document.getElementById("syngunslinger").ile === 1) {
                document.getElementById("syngunslinger").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("syngunslinger").innerHTML = "Gunslinger " + document.getElementById("syngunslinger").ile + "/2";
                document.getElementById("syngunslinger").priority = 1;
            }
            if (document.getElementById("syngunslinger").ile === 2 || document.getElementById("syngunslinger").ile === 3) {
                document.getElementById("syngunslinger").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("syngunslinger").innerHTML = "Gunslinger " + document.getElementById("syngunslinger").ile + "/4";
                document.getElementById("syngunslinger").priority = 2;
            }
            if (document.getElementById("syngunslinger").ile === 4 || document.getElementById("syngunslinger").ile === 5) {
                document.getElementById("syngunslinger").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("syngunslinger").innerHTML = "Gunslinger " + document.getElementById("syngunslinger").ile + "/6";
                document.getElementById("syngunslinger").priority = 3;
            }
            if (document.getElementById("syngunslinger").ile >= 6) {
                document.getElementById("syngunslinger").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("syngunslinger").innerHTML = "Gunslinger " + document.getElementById("syngunslinger").ile;
                document.getElementById("syngunslinger").priority = 4;
            }
        }
        if (champ.klasa === "knight" || champ.klasa2 === "knight" || champ.isKnight === true || champ.wasKnight === true) {
            if (document.getElementById("synknight").ile === 1) {
                document.getElementById("synknight").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synknight").innerHTML = "Knight " + document.getElementById("synknight").ile + "/2";
                document.getElementById("synknight").priority = 1;
            }
            if (document.getElementById("synknight").ile === 2 || document.getElementById("synknight").ile === 3) {
                document.getElementById("synknight").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synknight").innerHTML = "Knight " + document.getElementById("synknight").ile + "/4";
                document.getElementById("synknight").priority = 2;
            }
            if (document.getElementById("synknight").ile === 4 || document.getElementById("synknight").ile === 5) {
                document.getElementById("synknight").style.backgroundColor = "rgb(146,177,189)";
                document.getElementById("synknight").innerHTML = "Knight " + document.getElementById("synknight").ile + "/6";
                document.getElementById("synknight").priority = 3;
            }
            if (document.getElementById("synknight").ile >= 6) {
                document.getElementById("synknight").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synknight").innerHTML = "Knight " + document.getElementById("synknight").ile;
                document.getElementById("synknight").priority = 4;
            }
            if (champ.wasKnight === true) champ.wasKnight = false;
        }
        if (champ.klasa === "ranger" || champ.klasa2 === "ranger") {
            if (document.getElementById("synranger").ile === 1) {
                document.getElementById("synranger").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synranger").innerHTML = "Ranger " + document.getElementById("synranger").ile + "/2";
                document.getElementById("synranger").priority = 1;
            }
            if (document.getElementById("synranger").ile === 2 || document.getElementById("synranger").ile === 3) {
                document.getElementById("synranger").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synranger").innerHTML = "Ranger " + document.getElementById("synranger").ile + "/4";
                document.getElementById("synranger").priority = 2;
            }
            if (document.getElementById("synranger").ile >= 4) {
                document.getElementById("synranger").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synranger").innerHTML = "Ranger " + document.getElementById("synranger").ile;
                document.getElementById("synranger").priority = 4;
            }
        }
        if (champ.klasa === "shapeshifter" || champ.klasa2 === "shapeshifter") {
            if (document.getElementById("synshapeshifter").ile === 1 || document.getElementById("synshapeshifter").ile === 2) {
                document.getElementById("synshapeshifter").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synshapeshifter").innerHTML = "Shapeshifter " + document.getElementById("synshapeshifter").ile + "/3";
                document.getElementById("synshapeshifter").priority = 1;
            }
            if (document.getElementById("synshapeshifter").ile >= 3 && document.getElementById("synshapeshifter").ile <= 5) {
                document.getElementById("synshapeshifter").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synshapeshifter").innerHTML = "Shapeshifter " + document.getElementById("synshapeshifter").ile + "/6";
                document.getElementById("synshapeshifter").priority = 2;
            }
            if (document.getElementById("synshapeshifter").ile >= 6) {
                document.getElementById("synshapeshifter").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synshapeshifter").innerHTML = "Shapeshifter " + document.getElementById("synshapeshifter").ile;
                document.getElementById("synshapeshifter").priority = 4;
            }
        }
        if (champ.klasa === "sorcerer" || champ.klasa2 === "sorcerer" || champ.isSorcerer === true || champ.wasSorcerer === true) {
            if (document.getElementById("synsorcerer").ile === 1 || document.getElementById("synsorcerer").ile === 2) {
                document.getElementById("synsorcerer").style.backgroundColor = "rgb(50,50,50)";
                document.getElementById("synsorcerer").innerHTML = "Sorcerer " + document.getElementById("synsorcerer").ile + "/3";
                document.getElementById("synsorcerer").priority = 1;
            }
            if (document.getElementById("synsorcerer").ile >= 3 && document.getElementById("synsorcerer").ile <= 5) {
                document.getElementById("synsorcerer").style.backgroundColor = "rgb(202,147,114)";
                document.getElementById("synsorcerer").innerHTML = "Sorcerer " + document.getElementById("synsorcerer").ile + "/6";
                document.getElementById("synsorcerer").priority = 2;
            }
            if (document.getElementById("synsorcerer").ile >= 6) {
                document.getElementById("synsorcerer").style.backgroundColor = "rgb(255,185,59)";
                document.getElementById("synsorcerer").innerHTML = "Sorcerer " + document.getElementById("synsorcerer").ile;
                document.getElementById("synsorcerer").priority = 4;
            }
            if (champ.wasSorcerer === true) champ.wasSorcerer = false;
        }
        sortsynergies();
    }
}

function sortsynergies() {
    for (let x = document.getElementById("teamcomp").childElementCount-1; x >= 0; x--) {
        document.getElementById("teamcomp").removeChild(document.getElementById("teamcomp").children[x]);
    }

    for (let p = 4; p >= 0; p--) {
        let katalog = [];
        for (let s = 0; s < katalogoriginclass.length; s++) {
            if (katalogoriginclass[s].priority === p) katalog.push(katalogoriginclass[s]);
        }
        if (katalog.length > 0) {
            for (let ranga = 25; ranga >= 0; ranga--) {
                for (let x = 0; x < katalog.length; x++) {
                    let suma = parseInt(katalog[x].priority + katalog[x].ile);
                    if (suma === ranga) document.getElementById("teamcomp").appendChild(katalog[x]);
                }
            }
        }
    }
}

generujplansze();
generujchampitems();
generujkarte();
generujsynergie();
generujitemsheet();
generujitemsheetinfo();
bazachamp();
bazaorigin();
bazaclass();
bazaitem();