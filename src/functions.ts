function getSum(num1: number, num2: number): number
{
    return num1 + num2
}

let mysum = function(num1: any, num2: any): number
{
    if(typeof num1 === 'string')
    {
        num1 = parseInt(num1)
    }
    if(typeof num2 === 'string' )
    {
        num2 = parseInt(num2)
    }

    return num1 + num2
}

function getName(firstname: string, lastname: string, middlename?: string): string
{
    let name : string 

    if(middlename === undefined)
    {
        name = `${firstname} ${lastname}`
    }
    else{
        name = `${firstname} ${middlename} ${lastname}`
    }
    
    return name
}

console.log(getName('Emmanuel', 'Wilson', 'Oteng'))

function testVoid(): void 
{
    return ;
}