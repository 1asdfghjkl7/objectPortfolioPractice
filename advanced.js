const financialAdvisor = Object.create(null,{
    company:{
        enumerable:true,
        writable:true,
        value:"asd",
    },
    specialty:{
        enumerable:true,
        writable:true,
        value:"dsa"
    },
    name:{
        enumerable:true,
        value:"fds"
    },
    portfolio:{
        value:{
        
            AAPL: {
                shares: 152,
                valuation: 30400
            },
            MSFT: {
                shares: 290,
                valuation: 49300
            }
        }
    },
    worth:{
        value:() => {
            let total = [];
            financialAdvisor.portfolio.forEach(keys => {
                total.push(keys.valuation);
         })
            total = total.reduce((a,b) => a+b);
            console.log("total",total);

            
        }
    },
    purchase:{
        value:(name,sharesNum,valueTotal) => {
            for (const key in financialAdvisor.portfolio) {
                if (name === key) {
                let sharesBefore = financialAdvisor.portfolio[key].shares;
                let sharesAfter = sharesBefore + sharesNum;
                financialAdvisor.portfolio[key].shares = sharesAfter;
                console.log(financialAdvisor.portfolio.MSFT.shares);
                
                let valueBefore = financialAdvisor.portfolio[key].valuation;
                let valueAfter = valueBefore + valueTotal;
                financialAdvisor.portfolio[key].valuation = valueAfter;
                console.log(financialAdvisor.portfolio.MSFT.valuation);
                
                } else {}
            }
        }
    },
    sell:{
        value:(name,sharesNum,valueTotal) => {
            for (const key in financialAdvisor.portfolio) {
                if (name === key) {
                let sharesBefore = financialAdvisor.portfolio[key].shares;
                let sharesAfter = sharesBefore - sharesNum;
                financialAdvisor.portfolio[key].shares = sharesAfter;
                console.log(financialAdvisor.portfolio.AAPL.shares);
                
                let valueBefore = financialAdvisor.portfolio[key].valuation;
                let valueAfter = valueBefore - valueTotal;
                financialAdvisor.portfolio[key].valuation = valueAfter;
                console.log(financialAdvisor.portfolio.AAPL.valuation);
                
                } else {}
            }
        }
    }
})
console.log(financialAdvisor.portfolio.AAPL);
financialAdvisor.sell("AAPL", 2, 32);
financialAdvisor.purchase("MSFT", 2, 32);
// financialAdvisor.purchase("APPL",123,-4567);
// financialAdvisor.sell("APPL",-123,6745);
// financialAdvisor.worth();
// const wrapperRef = document.querySelector("#wrapper");
// const nameRef = document.createElement("p");
// const companyRef = document.createElement("p");
// const specialtyRef = document.createElement("p");
// const fragment = document.createDocumentFragment();




// nameRef.textContent = financialAdvisor.name
// companyRef.textContent = financialAdvisor.company
// specialtyRef.textContent = financialAdvisor.specialty

// // fragment.appendChild(ex)
// fragment.appendChild(nameRef);
// fragment.appendChild(companyRef);
// fragment.appendChild(specialtyRef);


// financialAdvisor.portfolio.forEach(element => {
//     let p = document.createElement("p")
    
    
//     p.textContent = `${element.name} ${element.shares} ${element.valuation}`
//     console.log(element);

//     fragment.appendChild(p)
    
// });


// wrapperRef.appendChild(fragment);

// console.log(financialAdvisor.portfolio[0].AAPL.shares);

