const cart=[
    {
        title:"book",
        price:20,
        amount:12
    },
    {
        title:"pen",
        price:10,
        amount:1
    },
    {
        title:"pencil",
        price:5,
        amount:2
    },
    {
        title:"notebook",
        price:15,
        amount:1
    }
]

let total = cart.reduce((total,item)=>{
    const {amount,price}=item
    console.log(total)
    // return {
    //     totalAmount:total.totalAmount + amount * price,
    //     totalItems:total.totalItems + amount
    // }
    total.totalAmount += amount * price
    total.totalItems += amount
    return total
},{
    totalAmount:0,
    totalItems:0
})

// console.log(total)
const {totalAmount,totalItems}=total
console.log("Total Amount",totalAmount,"Total Items",totalItems)