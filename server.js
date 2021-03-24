const express = require("express"); // require is another way of saying import this
const cors = require("cors");// this allows us to share information from the api back and forth 
const port = 8000;
const app = express();// creating an instance of a web servver and have access to features everything express has
const faker = require("faker")

// .Use method allows us to enable the feature to do cors. gives us the ability to work with JSON
app.use(cors());

// allows the application to parse JSON & accept JSON data
app.use(express.json());

//setting up an api endpoint
app.get("/api", (req, res) => {
  res.json({"message": "Hello World of API's!"}); //
});


class User{
    constructor(){
        this._id = faker.random.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();;
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.random.uuid();
        this.name = faker.company.companyName();
        this.address = {
            street:faker.address.streetAddress(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),

        }
        
    }
}

app.get("/api/users/new",(req,res)=>{
    
const user1 = new User()
console.log(user1)
res.json(user1)

})

app.get("/api/companies/new",(req,res)=>{
    
    const company1 = new Company()
    console.log(company1)
    res.json(company1)
    
    })

    app.get("/api/user/company/",(req,res)=>{
        const user1 = new User()
        const company1 = new Company()
        console.log(company1)
        res.json({"company":company1,"user":user1})
        
        })
    
    
    




app.listen(port, () => console.log(`Listening on port ${port}`));

