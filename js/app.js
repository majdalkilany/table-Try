'use dtrict'

var allArray =[] ;
var salesArray = [];

var totalArray =[]
// var total;

function Resturant (name,salesArray){
    this.name = name ;
    // this.first = first;
    // this.second =  second;
    //  this.therd=therd;
    //  this.forth = forth;
    //  this.fifth = fifth;
    this.salesArray =salesArray
    allArray.push(this)
}
var workingDays = ['sunday','monday','tuseday','windsday','thersday','total' ]
var containar = document.getElementById('div2');
var tableElemant = document.createElement('table')
containar.appendChild(tableElemant)



function headerRander(){
   var headerTable = document.createElement('thead')
   tableElemant.appendChild(headerTable)
   var th1 = document.createElement('th');
   headerTable.appendChild(th1)
   th1.textContent =''

   for (i =0 ; i < workingDays.length; i++){
   var th1 = document.createElement('th');
   headerTable.appendChild(th1)
   th1.textContent =workingDays[i]
   }
}
var form = document.getElementById('form')
form.addEventListener('submit', function (){
    event.preventDefault()
    name = event.target.name.value
    first = event.target.first.value
    second = event.target.second.value
    therd = event.target.therd.value
    forth = event.target.forth.value
    fifth = event.target.fifth.value
    salesArray.push( first, second,therd,forth,fifth)
var majd = new Resturant(name,salesArray)
var storageArray = JSON.stringify(allArray)
localStorage.setItem('arrayForall',storageArray )
majd.render()
sumSalesPerDay =0 
for (j=0;j<salesArray.length;j++){
    total = 0 
    console.log('total' +total)

for ( i=1;i<allArray.length;i++){ 


    var numberdTotal = Number(allArray[i].salesArray[j])
total= total +numberdTotal
console.log('total equal '+ total)
remmoveFooter()

}    
}

salesArray= []

// renderFooter()

})
renderFooter ( )

// console.log(salesArray)
var sumSalesPerDay = 0
headerRander()
// var formConatainar = document.getElementById('form') x
Resturant.prototype.render = function(){
    var row = document.createElement('tr')
    tableElemant.appendChild(row)
    tdel = document.createElement('td')
    row.appendChild(tdel)
     tdel.textContent = this.name
     for(tabledata=0;tabledata<salesArray.length;tabledata++){
        tdel = document.createElement('td')
        row.appendChild(tdel)
         tdel.textContent =salesArray[tabledata]
         var stringTonumber = parseInt(salesArray[tabledata])
         sumSalesPerDay = sumSalesPerDay+stringTonumber
         
     }
     tdel = document.createElement('td')
     row.appendChild(tdel)
     tdel.textContent = sumSalesPerDay
     salesArray.push(sumSalesPerDay)
}

var numberdTotal;

function renderFooter ( ){
        var footerTable = document.createElement('tfoot')
        footerTable.setAttribute('id' ,'remove')
        tableElemant.appendChild(footerTable)
        var th1 = document.createElement('th');
        footerTable.appendChild(th1)
        th1.textContent ='total'
        // var total = 0
        for (j=0;j<salesArray.length;j++){
            total = 0 
            console.log('total' +total)

        for ( i=1;i<allArray.length;i++){ 


            var numberdTotal = Number(allArray[i].salesArray[j])
        total= total +numberdTotal
        console.log('total equal '+ total)

}    
// total=0

var th1 = document.createElement('th');
footerTable.appendChild(th1)
th1.textContent =total
        }

}
function remmoveFooter()  {
    var removetable =document.getElementById('remove')
    tableElemant.removeChild(removetable)
    var footerTable = document.createElement('tfoot')
    footerTable.setAttribute('id' ,'remove')
    tableElemant.appendChild(footerTable)
    var th1 = document.createElement('th');
    footerTable.appendChild(th1)
    th1.textContent ='total'
for(i =0;i< salesArray.length;i++){
    var th1 = document.createElement('th');
footerTable.appendChild(th1)
th1.textContent =total


}

}   
