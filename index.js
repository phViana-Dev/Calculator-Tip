function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$ ' + value 
}

function formatSplit(value){
    if(value == 1) return value + ' person'
    return value + ' people'
}

function update(){

    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    function calculateTip(){
        return bill * tipPercent / 100
    }

    function calculateTotal(){
        return calculateTip() + bill
    }

    function billEach(){
        return calculateTotal() / split
    }

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(calculateTip()) 
    document.getElementById('totalWithTip').innerHTML = formatMoney(calculateTotal())
    document.getElementById('splitValue').innerHTML = formatSplit(split) 
    document.getElementById('billEach').innerHTML = formatMoney(billEach()) 

}