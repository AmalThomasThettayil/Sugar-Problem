let result = document.getElementById("text")

let a = () => {
    let n = document.getElementById("num").value
    console.log(n);
    if (n % 5 == 0) {
        let fivePack = n / 5
        document.getElementById("text5").innerHTML = fivePack + " bags of 5kg "
        console.log(fivePack + "times 5kg");
    } else if ((n % 5) % 2 == 0) {
        let fivePack = Math.floor(n / 5)
        let twoPack = (n - (fivePack * 5)) / 2
        document.getElementById("text2").innerHTML = twoPack + " bags of 2kg and"
        document.getElementById("text5").innerHTML = fivePack + " bags of 5kg "
        console.log(twoPack + "times 2kg")
        console.log(fivePack + "times 5kg")
    } else {
        let fivePack = (Math.floor(n / 5)) - 1
        let twoPack = (n - (fivePack * 5)) / 2
        document.getElementById("text2").innerHTML = twoPack + " bags of 2kg and"
        document.getElementById("text5").innerHTML = fivePack + " bags of 5kg "
        console.log(twoPack + "times 2kg")
        console.log(fivePack + "times 5kg")
    }
}


