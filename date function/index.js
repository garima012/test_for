

const employee = [
    {
        "id": 1,
        "name": "Garima",
        "company": "vadodara",
        "Joiningdate": new Date(2018,9,5),

    },

    {
        "id": 2,
        "name": "Akash",
        "company": "Meerut",
        "Joiningdate": new Date(2019,8,23),
    },

    {

        "id": 3,
        "name": "Anahs",
        "company": "Meerut",
        "Joiningdate": new Date(2015,2,13),
    },
    {
        "id": 4,
        "name": "Vikrant",
        "company": "Robel-Corkery",
        "Joiningdate": new Date(2012,5,3),
    },
    {
        "id": 5,
        "name": "Soni",     
        "company":"Keebler LLC",
        "Joiningdate": new Date(2014,9,15), 
    }]


    const display = () => {

        let displayData = employee.map((v) =>{
            return(`  <tr>
            <td>${v.id}</td>
            <td>${v.name}</td>
            <td>${v.company}</td>
            <td>${v.Joiningdate}</td>
          </tr>`)
        })
        document.getElementById("display").innerHTML = displayData.join("");
    }

    asc = () => {

        let asecending = employee.sort((a,b) => {

            if(a.Joiningdate >b.Joiningdate){

                return 1
            }
            else{
                return -1
            }
        })
        display(asecending)
    }

    des = () => {
        let descending = employee.sort((a,b)=>{
           
            if(a.Joiningdate < b.Joiningdate){

                return 1
            }
            else{
                return -1
            }
        })
        display(descending)
        }
    display();