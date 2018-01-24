function pythagSolve() {
    var pythagA = document.getElementById("pythagA").value;
    var pythagB = document.getElementById("pythagB").value;
    var pythagResult = Math.sqrt(Math.pow(pythagA, 2) + Math.pow(pythagB, 2));

    document.getElementById("pythagResult").innerHTML = pythagResult;
}

function pythagAltSolve() {
    var pythagAltA = document.getElementById("pythagAltA").value;
    var pythagAltC = document.getElementById("pythagAltC").value;
    var pythagAltResult = Math.sqrt(Math.pow(pythagAltC, 2) - Math.pow(pythagAltA, 2));

    document.getElementById("pythagAltResult").innerHTML = pythagAltResult;
}

function pythagAlt2Solve() {
    var pythagAlt2C = document.getElementById("pythagAlt2C").value;
    var pythagAlt2Result = pythagAlt2C / Math.sqrt(2);
    
    document.getElementById("pythagAlt2Result").innerHTML = pythagAlt2Result;
}

function areaTrapSolve() {
    var areaTrapB1 = document.getElementById("areaTrapB1").value;
    var areaTrapB2 = document.getElementById("areaTrapB2").value;
    var areaTrapH = document.getElementById("areaTrapH").value;
    var areaTrapResult = 0.5 * areaTrapH * (areaTrapB1 * 1 + areaTrapB2 * 1);

    document.getElementById("areaTrapResult").innerHTML = areaTrapResult;
}

function areaCircleSolvePI() {
    var areaCircleR = document.getElementById("areaCircleR").value;
    var areaCircleResultPI = Math.PI * Math.pow(areaCircleR, 2);

    document.getElementById("areaCircleResult").innerHTML = areaCircleResultPI;
}

function areaCircleSolve314() {
    var areaCircleR = document.getElementById("areaCircleR").value;
    var areaCircleResult314 = 3.14 * Math.pow(areaCircleR, 2);

    document.getElementById("areaCircleResult").innerHTML = areaCircleResult314;
}

function areaCircleSolve227() {
    var areaCircleR = document.getElementById("areaCircleR").value;
    var areaCircleResult227 = (22 / 7) * Math.pow(areaCircleR, 2);

    document.getElementById("areaCircleResult").innerHTML = areaCircleResult227;
}

function perimCircleSolvePI() {
    var perimCircleR = document.getElementById("perimCircleR").value;
    var perimCircleResultPI = 2 * Math.PI * perimCircleR;

    document.getElementById("perimCircleResult").innerHTML = perimCircleResultPI;
}

function perimCircleSolve314() {
    var perimCircleR = document.getElementById("perimCircleR").value;
    var perimCircleResult314 = 6.28 * perimCircleR;

    document.getElementById("perimCircleResult").innerHTML = perimCircleResult314;
}

function perimCircleSolve227() {
    var perimCircleR = document.getElementById("perimCircleR").value;
    var perimCircleResult227 = (44 / 7) * perimCircleR;

    document.getElementById("perimCircleResult").innerHTML = perimCircleResult227;
}

function radiusFromPerimSolvePI() {
    var radiusFromPerimC = document.getElementById("radiusFromPerimC").value;
    var radiusFromPerimResultPI = radiusFromPerimC / (2 * Math.PI);

    document.getElementById("radiusFromPerimResult").innerHTML = radiusFromPerimResultPI;
}

function radiusFromPerimSolve314() {
    var radiusFromPerimC = document.getElementById("radiusFromPerimC").value;
    var radiusFromPerimResult314 = radiusFromPerimC / 6.28;

    document.getElementById("radiusFromPerimResult").innerHTML = radiusFromPerimResult314;
}

function radiusFromPerimSolve227() {
    var radiusFromPerimC = document.getElementById("radiusFromPerimC").value;
    var radiusFromPerimResult227 = radiusFromPerimC / (44 / 7);

    document.getElementById("radiusFromPerimResult").innerHTML = radiusFromPerimResult227;
}

function radiusFromAreaSolvePI() {
    var radiusFromAreaA = document.getElementById("radiusFromAreaA").value;
    var radiusFromAreaResultPI = Math.sqrt(radiusFromAreaA / Math.PI);

    document.getElementById("radiusFromAreaResult").innerHTML = radiusFromAreaResultPI;
}

function radiusFromAreaSolve314() {
    var radiusFromAreaA = document.getElementById("radiusFromAreaA").value;
    var radiusFromAreaResult314 = Math.sqrt(radiusFromAreaA / 3.14);

    document.getElementById("radiusFromAreaResult").innerHTML = radiusFromAreaResult314;
}

function radiusFromAreaSolve227() {
    var radiusFromAreaA = document.getElementById("radiusFromAreaA").value;
    var radiusFromAreaResult227 = Math.sqrt(radiusFromAreaA / (22 / 7));

    document.getElementById("radiusFromAreaResult").innerHTML = radiusFromAreaResult227;
}

function vsaConeSolvePI() {
    var vsaConeR = document.getElementById("vsaConeR").value;
    var vsaConeH = document.getElementById("vsaConeH").value;
    var volConeResultPI = (1 / 3) * Math.PI * Math.pow(vsaConeR, 2) * vsaConeH;
    var saConeResultPI = Math.PI * vsaConeR * ((vsaConeR * 1) + Math.sqrt(Math.pow(vsaConeH, 2) + Math.pow(vsaConeR, 2)));

    document.getElementById("vsaConeResult").innerHTML = `V = ${volConeResultPI}, SA = ${saConeResultPI}`;
}

function vsaConeSolve314() {
    var vsaConeR = document.getElementById("vsaConeR").value;
    var vsaConeH = document.getElementById("vsaConeH").value;
    var volConeResult314 = (1 / 3) * 3.14 * Math.pow(vsaConeR, 2) * vsaConeH;
    var saConeResult314 = 3.14 * vsaConeR * ((vsaConeR * 1) + Math.sqrt(Math.pow(vsaConeH, 2) + Math.pow(vsaConeR, 2)));

    document.getElementById("vsaConeResult").innerHTML = `V= ${volConeResult314}, SA= ${saConeResult314}`;
}

function vsaConeSolve227() {
    var vsaConeR = document.getElementById("vsaConeR").value;
    var vsaConeH = document.getElementById("vsaConeH").value;
    var volConeResult227 = (1 / 3) * (22 / 7) * Math.pow(vsaConeR, 2) * vsaConeH;
    var saConeResult227 = (22 / 7) * vsaConeR * ((vsaConeR * 1) + Math.sqrt(Math.pow(vsaConeH, 2) + Math.pow(vsaConeR, 2)));

    document.getElementById("vsaConeResult").innerHTML = `V= ${volConeResult227}, SA= ${saConeResult227}`;
}

function vsaCylSolvePI() {
    var vsaCylR = document.getElementById("vsaCylR").value;
    var vsaCylH = document.getElementById("vsaCylH").value;
    var volCylResultPI = Math.PI * Math.pow(vsaCylR, 2) * vsaCylH;
    var saCylResultPI = (2 * Math.PI * vsaCylR * vsaCylH) + (2 * Math.PI * Math.pow(vsaCylR, 2));

    document.getElementById("vsaCylResult").innerHTML = `V= ${volCylResultPI}, SA= ${saCylResultPI}`;
}

function vsaCylSolve314() {
    var vsaCylR = document.getElementById("vsaCylR").value;
    var vsaCylH = document.getElementById("vsaCylH").value;
    var volCylResult314 = 3.14 * Math.pow(vsaCylR, 2) * vsaCylH;
    var saCylResult314 = (6.28 * vsaCylR * vsaCylH) + (6.28 * Math.pow(vsaCylR, 2));

    document.getElementById("vsaCylResult").innerHTML = `V= ${volCylResult314}, SA= ${saCylResult314}`;
}

function vsaCylSolve227() {
    var vsaCylR = document.getElementById("vsaCylR").value;
    var vsaCylH = document.getElementById("vsaCylH").value;
    var volCylResult227 = (22 / 7) * Math.pow(vsaCylR, 2) * vsaCylH;
    var saCylResult227 = ((44 / 7) * vsaCylR * vsaCylH) + ((44 / 7) * Math.pow(vsaCylR, 2));

    document.getElementById("vsaCylResult").innerHTML = `V= ${volCylResult227}, SA= ${saCylResult227}`;
}

function vsaSphereSolvePI() {
    var vsaSphereR = document.getElementById("vsaSphereR").value;
    var volSphereResultPI = (4 / 3) * Math.PI * Math.pow(vsaSphereR, 3);
    var saSphereResultPI = 4 * Math.PI * Math.pow(vsaSphereR, 2);

    document.getElementById("vsaSphereResult").innerHTML = `V= ${volSphereResultPI}, SA= ${saSphereResultPI}`;
}

function vsaSphereSolve314() {
    var vsaSphereR = document.getElementById("vsaSphereR").value;
    var volSphereResult314 = (4 / 3) * 3.14 * Math.pow(vsaSphereR, 3);
    var saSphereResult314 = 4 * 3.14 * Math.pow(vsaSphereR, 2);

    document.getElementById("vsaSphereResult").innerHTML = `V= ${volSphereResult314}, SA= ${saSphereResult314}`;
}

function vsaSphereSolve227() {
    var vsaSphereR = document.getElementById("vsaSphereR").value;
    var volSphereResult227 = (4 / 3) * (22 / 7) * Math.pow(vsaSphereR, 3);
    var saSphereResult227 = 4 * (22 / 7) * Math.pow(vsaSphereR, 2);

    document.getElementById("vsaSphereResult").innerHTML = `V= ${volSphereResult227}, SA= ${saSphereResult227}`;
}

function vsaHemiSolvePI() {
    var vsaHemiR = document.getElementById("vsaHemiR").value;
    var volHemiResultPI = (2 / 3) * Math.PI * Math.pow(vsaHemiR, 3);
    var saHemiResultPI = 3 * Math.PI * Math.pow(vsaHemiR, 2);

    document.getElementById("vsaHemiResult").innerHTML = `V= ${volHemiResultPI}, SA= ${saHemiResultPI}`;
}

function vsaHemiSolve314() {
    var vsaHemiR = document.getElementById("vsaHemiR").value;
    var volHemiResult314 = (2 / 3) * 3.14 * Math.pow(vsaHemiR, 3);
    var saHemiResult314 = 3 * 3.14 * Math.pow(vsaHemiR, 2);

    document.getElementById("vsaHemiResult").innerHTML = `V= ${volHemiResult314}, SA= ${saHemiResult314}`;
}

function vsaHemiSolve227() {
    var vsaHemiR = document.getElementById("vsaHemiR").value;
    var volHemiResult227 = (2 / 3) * (22 / 7) * Math.pow(vsaHemiR, 3);
    var saHemiResult227 = 3 * (22 / 7) * Math.pow(vsaHemiR, 2);

    document.getElementById("vsaHemiResult").innerHTML = `V= ${volHemiResult227}, SA= ${saHemiResult227}`;
}

function vsaRectSolve() {
    var vsaRectL = document.getElementById("vsaRectL").value;
    var vsaRectW = document.getElementById("vsaRectW").value;
    var vsaRectH = document.getElementById("vsaRectH").value;
    var volRectResult = vsaRectL * vsaRectW * vsaRectH;
    var saRectResult = 2 * ((vsaRectL * vsaRectW) * 1 + (vsaRectL * vsaRectH) * 1 + (vsaRectW * vsaRectH) * 1);

    document.getElementById("vsaRectResult").innerHTML = `V= ${volRectResult}, SA= ${saRectResult}`;
}

function trigSolveDeg() {
    var trigTheta = document.getElementById("trigTheta").value;
    var trigSinResultDeg = Math.sin((Math.PI / 180) * trigTheta);
    var trigCosResultDeg = Math.cos((Math.PI / 180) * trigTheta);
    var trigTanResultDeg = Math.tan((Math.PI / 180) * trigTheta);

    document.getElementById("trigSinResult").innerHTML = `Sine: ${trigSinResultDeg}`;
    document.getElementById("trigCosResult").innerHTML = `Cosine: ${trigCosResultDeg}`;
    document.getElementById("trigTanResult").innerHTML = `Tangent: ${trigTanResultDeg}`;
}

function trigSolveRad() {
    var trigTheta = document.getElementById("trigTheta").value;
    var trigSinResultRad = Math.sin(trigTheta);
    var trigCosResultRad = Math.cos(trigTheta);
    var trigTanResultRad = Math.tan(trigTheta);

    document.getElementById("trigSinResult").innerHTML = `Sine: ${trigSinResultRad}`;
    document.getElementById("trigCosResult").innerHTML = `Cosine: ${trigCosResultRad}`;
    document.getElementById("trigTanResult").innerHTML = `Tangent: ${trigTanResultRad}`;
}

function trigAsinSolve() {
    var trigSin = document.getElementById("trigSin").value;
    var trigAsinResultRad = Math.asin(trigSin);
    var trigAsinResultDeg = (180 / Math.PI) * trigAsinResultRad;

    document.getElementById("trigAsinResult").innerHTML = `Theta= ${trigAsinResultRad} radians or ${trigAsinResultDeg} degrees`
}

function trigAcosSolve() {
    var trigCos = document.getElementById("trigCos").value;
    var trigAcosResultRad = Math.acos(trigCos);
    var trigAcosResultDeg = (180 / Math.PI) * trigAcosResultRad;

    document.getElementById("trigAcosResult").innerHTML = `Theta= ${trigAcosResultRad} radians or ${trigAcosResultDeg} degrees`
}

function trigAtanSolve() {
    var trigTan = document.getElementById("trigTan").value;
    var trigAtanResultRad = Math.atan(trigTan);
    var trigAtanResultDeg = (180 / Math.PI) * trigAtanResultRad;

    document.getElementById("trigAtanResult").innerHTML = `Theta= ${trigAtanResultRad} radians or ${trigAtanResultDeg} degrees`
}

function quadSolve() {
    var quadA = document.getElementById("quadA").value;
    var quadB = document.getElementById("quadB").value;
    var quadC = document.getElementById("quadC").value;
    var quadResultDisc = Math.pow(quadB, 2) - 4 * quadA * quadC;
    var quadResultRootPos = (-1 * quadB + Math.sqrt(Math.pow(quadB, 2) - (4 * quadA * quadC))) / (2 * quadA);
    var quadResultRootNeg = (-1 * quadB - Math.sqrt(Math.pow(quadB, 2) - (4 * quadA * quadC))) / (2 * quadA);
    var quadResultVertexX = -1 * (quadB / (2 * quadA));
    var quadResultVertexY = (quadA * Math.pow(quadResultVertexX, 2)) + (quadB * quadResultVertexX) + (quadC * 1);

    if (quadResultDisc == 0) {
        document.getElementById("quadResult").innerHTML = `Root is ${quadResultRootPos}, the vertex is (${quadResultVertexX}, ${quadResultVertexY}), and the discriminant is ${quadResultDisc}`;
    } else if (quadResultDisc < 0) {
        document.getElementById("quadResult").innerHTML = `No real roots, the vertex is (${quadResultVertexX}, ${quadResultVertexY}), and the discriminant is ${quadResultDisc}`;
    } else {
        document.getElementById("quadResult").innerHTML = `Roots are ${quadResultRootPos} and ${quadResultRootNeg}, the vertex is (${quadResultVertexX}, ${quadResultVertexY}), and the discriminant is ${quadResultDisc}`;
    }
}

function geoMeanSolve() {
    var geoMeanA = document.getElementById("geoMeanA").value;
    var geoMeanB = document.getElementById("geoMeanB").value;
    var geoMeanResult = Math.sqrt(geoMeanA * geoMeanB);

    document.getElementById("geoMeanResult").innerHTML = geoMeanResult;
}

function dmpSolve() {
    var dmpX1 = document.getElementById("dmpX1").value;
    var dmpY1 = document.getElementById("dmpY1").value;
    var dmpX2 = document.getElementById("dmpX2").value;
    var dmpY2 = document.getElementById("dmpY2").value;
    var dmpResultDis = Math.sqrt(Math.pow((dmpX2 - dmpX1), 2) + Math.pow((dmpY2 - dmpY1), 2));
    var dmpResultMPX = (dmpX1 * 1 + dmpX2 * 1) / 2;
    var dmpResultMPY = (dmpY1 * 1 + dmpY2 * 1) / 2;
    var dmpResultSlope = (dmpY2 - dmpY1) / (dmpX2 - dmpX1);

    document.getElementById("dmpResult").innerHTML = 'Distance= ' + dmpResultDis + ', Midpoint is (' + dmpResultMPX + ', ' + dmpResultMPY + '), and slope is ' + dmpResultSlope;
}

function pythagGenSolve() {
    var pythagGenA = document.getElementById("pythagGenA").value;
    var pythagGenB = document.getElementById("pythagGenB").value;
    var pythagGenResult1 = Math.abs(Math.pow(pythagGenA, 2) - Math.pow(pythagGenB, 2));
    var pythagGenResult2 = 2 * pythagGenA * pythagGenB;
    var pythagGenResult3 = Math.pow(pythagGenA, 2) + Math.pow(pythagGenB, 2);

    document.getElementById("pythagGenResult").innerHTML = pythagGenResult1 + ', ' + pythagGenResult2 + ', ' + pythagGenResult3;
}

  function expSolve() {
  var expA = document.getElementById("expA").value;
  var expB = document.getElementById("expB").value;
  var expN = document.getElementById("expN").value;
  var expResult = expA * Math.pow(expB, expN);
  
  document.getElementById("expResult").innerHTML = expResult;

function gravSolve() {
    var gravM1 = document.getElementById("gravM1").value;
    var gravM2 = document.getElementById("gravM2").value;
    var gravR = document.getElementById("gravR").value;
    var gravResult = (0.0000000000667 * gravM1 * gravM2) / Math.pow(gravR , 2);
    
    document.getElementById("gravResult").innerHTML = gravResult;
}

function kineticSolve() {
    var kineticM = document.getElementById("kineticM").value;
    var kineticV = document.getElementById("kineticV").value;
    var kineticResult = 0.5 * kineticM * Math.pow(kineticV, 2);
    
    document.getElementById("kineticResult").innerHTML = kineticResult;
}

function ePotSolve() {
    var ePotK = document.getElementById("ePotK").value;
    var ePotX = document.getElementById("ePotX").value;
    var ePotResult = 0.5 * ePotK * Math.pow(ePotX, 2);
    
    document.getElementById("ePotResult").innerHTML = ePotResult;
}

function gPotSolve() {
    var gPotM = document.getElementById("gPotM").value;
    var gPotG = document.getElementById("gPotG").value;
    var gPotH = document.getElementById("gPotH").value;
    var gPotResult = gPotM * gPotG * gPotH;
    
    document.getElementById("gPotResult").innerHTML = gPotResult;
}

function cAccSolve() {
    var cAccV = document.getElementById("cAccV").value;
    var cAccR = document.getElementById("cAccR").value;
    var cAccResult = (Math.pow(cAccV, 2) / cAccR);
    
    document.getElementById("cAccResult").innerHTML = cAccResult;
}

function workSolve() {
  var workF = document.getElementById("workF").value;
  var workD= document.getElementById("workD").value;
  var workTheta= document.getElementById("workTheta").value;
  var workResult = workF * workD * Math.cos((Math.PI / 180) * workTheta);
  
  document.getElementById("workResult").innerHTML = workResult;
}

/*
  function Solve() {
  var = document.getElementById("").value;
  var = document.getElementById("").value;
  var Result = [math here];
  
  document.getElementById("Result").innerHTML = Result;
}
*/

   
// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
