let row=parseInt(prompt("enter no. of rows in array"))
let col=parseInt(prompt("enter no. of col in array"))
let arr=[]

////creating 2d array

for(let i=0;i<row;i++)
{
    for(let j=0;j<col;j++)
    {
        arr[i]=[]
    }
}
for(let i=0;i<row;i++)
{
    for(let j=0;j<col;j++)
    {
        arr[i][j]=parseInt(prompt("enter array element"))
    }
}
for(let i=0;i<row;i++){
   for(let j=0;j<col;j++)
   {
    document.write("arr["+i+"]"+"["+j+"]"+"="+arr[i][j]+"<br>")
   }
}