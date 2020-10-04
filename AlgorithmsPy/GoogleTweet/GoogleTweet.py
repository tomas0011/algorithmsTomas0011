#Trabajo practico N°10
codigo={
    32:" ",
    65:"A",
    66:"B",
    67:"C",
    68:"D",
    69:"E",
    70:"F",
    71:"G",
    72:"H",
    73:"I",
    74:"J",
    75:"K",
    76:"L",
    77:"M",
    78:"N",
    79:"O",
    80:"P",
    81:"Q",
    82:"R",
    83:"S",
    84:"T",
    85:"U",
    86:"V",
    87:"W",
    88:"X",
    89:"Y",
    90:"Z",
    97:"a",
    98:"b",
    99:"c",
    100:"d",
    101:"e",
    102:"f",
    103:"g",
    104:"h",
    105:"i",
    106:"j",
    107:"k",
    108:"l",
    109:"m",
    110:"n",
    111:"o",
    112:"p",
    113:"q",
    114:"r",
    115:"s",
    116:"t",
    117:"u",
    118:"v",
    119:"w",
    120:"x",
    121:"y",
    122:"z"
}

def convertirCaracter(nBin):
    nBin = str(nBin)
    decimal = 0
    elev = len (nBin) -1
    for i in nBin:
        decimal += (int(i) * 2**(elev))
        elev = elev - 1
    return decimal

mensaje="01101101 01100101 00100000 01110011 01101001 01100101 01101110 01110100 01101111 00100000 01100011 01101111 01101110 00100000 01110011 01110101 01100101 01110010 01110100 01100101"

tweet=""

lista=mensaje.split()
for li in lista:
    tweet+=codigo[convertirCaracter(li)]
print (tweet)        
