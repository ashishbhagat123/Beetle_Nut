const express = require("express")
const app = express()
let cors = require('cors')
const connect = require("./src/config/db")
const credentialsController = require("./src/controller/credentials.controller")
const branchController = require("./src/controller/branch.controller")
const notificationController = require("./src/controller/notification.controller")
app.use(express.json())
app.use(cors())


app.use("/branch", branchController)
app.use("/branch", credentialsController)
app.use("/user", notificationController)

app.listen(8000, async(req,res)  => {
    await connect()
    console.log("server is running on port 8000")
    // res("<h1>working</h1>")  
})









// [
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Sundarnagar",
//     "address": "Platform Number 9 3/6",
//     "city": "Pasadena",
//     "contact_number": "22695777, 9330854205",
//     "branch_incharge": "Mr Yadav",
//     "pincode_covered":[ "700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Mordor",
//     "address": "Platform Number 9 3/7",
//     "city": "Pasadena",
//     "contact_number": "9339149816",
//     "branch_incharge": "Mr Charles Goodwin",
//     "pincode_covered":[ "700059, 700052, 700159, 700136, 700157, 700135"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Shire",
//     "address": "Platform Number 9 3/8",
//     "City": "Pasadena",
//     "contact_number": "9836675966",
//     "branch_incharge": "Mr Barry Richardds",
//     "pincode_covered":[ "700008, 700063, 700061, 700060, 700034, 700038, 700058"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Osgilliath",
//     "address": "Platform Number 9 3/9",
//     "City": "Pasadena",
//     "contact_number": "9330744663, 32612545, 24867225",
//     "branch_incharge": "Mr Anrold Schwartzenegger",
//     "pincode_covered":[ "700025, 700020"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Gondor",
//     "address": "Platform Number 9 3/10",
//     "City": "Pasadena",
//     "contact_number": "22256975, 9331406092",
//     "branch_incharge": "Mr Vinod Kambli",
//     "pincode_covered":[ "700001, 700012, 700073"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Rohan",
//     "address": "Platform Number 9 3/11",
//     "City": "Pasadena",
//     "contact_number": "22435157, 30281570, 8961369388",
//     "branch_incharge": "Mr Roast Master",
//     "pincode_covered":[ "700069, 700072, 700013, 700001, 700069"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Isengard",
//     "address": "Platform Number 9 3/12",
//     "city": "Pasadena",
//     "contact_number": "9051561160, 8981727579",
//     "branch_incharge": "Mr.Manish Sisodia",
//     "pincode_covered":[ "700012, 700013"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Central Perk",
//     "address": "Platform Number 9 3/13",
//     "city": "Pasadena",
//     "contact_number": "65537730, 9830456531",
//     "branch_incharge": "Mr Charu Sharma",
//     "pincode_covered":[ "700072, 700013"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Winterfell",
//     "address": "Platform Number 9 3/14",
//     "city": "Pasadena",
//     "contact_number": "22823137, 9339970938",
//     "branch_incharge": "Ms.Mandira Bedi",
//     "pincode_covered":[ "700071, 700017,700020"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Sea of Theseus",
//     "address": "Platform Number 9 3/15",
//     "city": "Pasadena",
//     "contact_number": "9339970940, 033-22103512",
//     "branch_incharge": "Mr Ram Gopal Verma",
//     "pincode_covered":[ "700001"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Don's Mansion",
//     "address": "Platform Number 9 3/16",
//     "city": "Pasadena",
//     "contact_number": "9339936827",
//     "branch_incharge": "Sir Sir Sir Ravindra Jaedga",
//     "pincode_covered":[ "700001"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Hogwardts",
//     "address": "Platform Number 9 3/17",
//     "city": "Pasadena",
//     "contact_number": "9339149821,",
//     "branch_incharge": "Mr Manoj Kumar (Bharat)",
//     "pincode_covered":[ "700030, 700050, 700090"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Platform 3/4",
//     "address": "Platform Number 9 3/18",
//     "city": "Pasadena",
//     "contact_number": "9339970937",
//     "branch_incharge": "Mr Viru Sahastra Buddhey",
//     "pincode_covered":[ "700073, 700001"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Dongri",
//     "address": "Platform Number 9 3/19",
//     "city": "Pasadena",
//     "contact_number": "9339149810,",
//     "branch_incharge": "Mr Vijay Dinanath Chauhan",
//     "pincode_covered":[ "700019, 700029, 700031, 700068, 700042, 700107, 700078, 700075"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Dubai",
//     "address": "Platform Number 9 3/20",
//     "city": "Pasadena",
//     "contact_number": "033-30622420,8420062681",
//     "branch_incharge": "Mr Sambha",
//     "pincode_covered":[ "700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Karimgunj",
//     "address": "Platform Number 9 3/21",
//     "city": "Pasadena",
//     "contact_number": "9339841477",
//     "branch_incharge": "Thakurji",
//     "pincode_covered":[ "711102, 711101, 711104,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Chinchpokli",
//     "address": "Platform Number 9 3/22",
//     "city": "Pasadena",
//     "contact_number": "9088126251",
//     "branch_incharge": "Mr PK",
//     "pincode_covered":[ "700087, 700013, 700069, 700016,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Chiplun",
//     "address": "Platform Number 9 3/23",
//     "city": "Pasadena",
//     "contact_number": "9330660677, 033-30683692",
//     "branch_incharge": "Mr Ranchodas Syamaldas Chhanchad",
//     "pincode_covered":[ "700007, 700006"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Kargil",
//     "address": "Platform Number 9 3/24",
//     "city": "Pasadena",
//     "contact_number": "033-26774547, 9339411467",
//     "branch_incharge": "Mr Amar",
//     "pincode_covered":[ "711113, 711105, 711101,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "LOC",
//     "address": "Platform Number 9 3/25",
//     "city": "Pasadena",
//     "contact_number": "9339149802",
//     "branch_incharge": "Mr Prem",
//     "pincode_covered":[ "700026, 700033, 700045, 700095, 700040, 700047, 700032, 700041, 700082, 700093, 700070, 700084, 700086, 700092, 700094, 700096, 700099,"]
//     },

//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "LAC",
//     "address": "Platform Number 9 3/26",
//     "city": "Pasadena",
//     "contact_number": "9339970924",
//     "branch_incharge": "Mr Crime Master Gogo",
//     "pincode_covered":[ "700085, 700010, 700011, 700015, 700054,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Mandwa",
//     "address": "Platform Number 9 3/27",
//     "city": "Pasadena",
//     "contact_number": "9339970936",
//     "branch_incharge": "Mr Teja Main Hoon",
//     "pincode_covered":[ "700023, 700045,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Chennai Xpress",
//     "address": "Platform Number 9 3/28",
//     "city": "Pasadena",
//     "contact_number": "9339466021",
//     "branch_incharge": "Mr Anand Akela",
//     "pincode_covered":[ "700089, 700048, 700055, 7000101, 700102"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Mocambo's Cave",
//     "address": "Platform Number 9 3/29",
//     "city": "Pasadena",
//     "contact_number": "033-22156404",
//     "branch_incharge": "Mr Raveena Urf Karishna",
//     "pincode_covered":[ "700013"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Gabbar's Plateau",
//     "address": "Platform Number 9 3/30",
//     "city": "Pasadena",
//     "contact_number": "9339970934",
//     "branch_incharge": "Ms Karishma Urf Ravina",
//     "pincode_covered":[ "711107, 711204, 711202, 711201,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Kasaul",
//     "address": "Platform Number 9 3/31",
//     "city": "Pasadena",
//     "contact_number": "033-22192333,9331086356",
//     "branch_incharge": "Mr Robert",
//     "pincode_covered":[ "700073, 700009"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Manaal",
//     "address": "Platform Number 9 3/32",
//     "city": "Pasadena",
//     "contact_number": "033-22352320, 9830219907",
//     "branch_incharge": "Mr Bhalla",
//     "pincode_covered":[ "700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Sergeant at Arms",
//     "address": "Platform Number 9 3/33",
//     "city": "Pasadena",
//     "contact_number": "9339149811",
//     "branch_incharge": "Mr Pappu Gandhi",
//     "pincode_covered":[ "700014, 700046"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Krispy Chilly",
//     "address": "Platform Number 9 3/34",
//     "city": "Pasadena",
//     "contact_number": "9339970931",
//     "branch_incharge": "Mr Kim Chee Salad",
//     "pincode_covered":[ "700001,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Dove 3/4th Mois",
//     "address": "Platform Number 9 3/35",
//     "city": "Pasadena",
//     "contact_number": "9339930423",
//     "branch_incharge": "Mr Jai Singh",
//     "pincode_covered":[ "700074, 700055, 700028, 700080, 700081, 700079, 700051, 700052"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Mclaren's",
//     "address": "Platform Number 9 3/36",
//     "city": "Pasadena",
//     "contact_number": "9339149818",
//     "branch_incharge": "Ms Basanti",
//     "pincode_covered":[ "700053"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Capitol Building",
//     "address": "Platform Number 9 3/37",
//     "city": "Pasadena",
//     "contact_number": "9339791567",
//     "branch_incharge": "Dr Garbage Bin",
//     "pincode_covered":[ "700053"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "West Wing",
//     "address": "Platform Number 9 3/38",
//     "city": "Pasadena",
//     "contact_number": "033-32590307",
//     "branch_incharge": "Dr Shedlon Cooper",
//     "pincode_covered":[ "700017, 700039, 700016, 700100, 700105,"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Freddy's place",
//     "address": "Platform Number 9 3/39",
//     "city": "Pasadena",
//     "contact_number": "9339970939",
//     "branch_incharge": "Dr Rowdy Rathore",
//     "pincode_covered":[ "700001, 700012"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "The Cheesecake Factory",
//     "address": "Platform Number 9 3/40",
//     "city": "Pasadena",
//     "contact_number": "033-22597892",
//     "branch_incharge": "Mr Rahul (naam to suna hoga)",
//     "pincode_covered":[ "700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Sheldon's Time Machine",
//     "address": "Platform Number 9 3/41",
//     "city": "Pasadena",
//     "contact_number": "9339149803",
//     "branch_incharge": "MrTeja (Mark idhar hai)",
//     "pincode_covered":[ "700006, 700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Penny's apartment",
//     "address": "Platform Number 9 3/42",
//     "city": "Pasadena",
//     "contact_number": "033-22192458, 7439412862",
//     "branch_incharge": "Mr Deepak Chourasia",
//     "pincode_covered":[ "700007, 700006"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Starbucks",
//     "address": "Platform Number 9 3/43",
//     "city": "Pasadena",
//     "contact_number": "033-26753836,9339149814",
//     "branch_incharge": "Mr AIB",
//     "pincode_covered":[ "711106, 711101"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "The Brown Stone",
//     "address": "Platform Number 9 3/44",
//     "city": "Pasadena",
//     "contact_number": "9331010493",
//     "branch_incharge": "Mr Yo Yo honey Singh",
//     "pincode_covered":[ "700091, 700064, 700106"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Christie's Den",
//     "address": "Platform Number 9 3/45",
//     "city": "Pasadena",
//     "contact_number": "033-25302241,9339970941",
//     "branch_incharge": "Mr Piku",
//     "pincode_covered":[ "700037, 700002, 700006,700004, 700030"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Summersault",
//     "address": "Platform Number 9 3/46",
//     "city": "Pasadena",
//     "contact_number": "9330001853",
//     "branch_incharge": "Mr Ross Geller",
//     "pincode_covered":[ "700110, 700111, 700112, 700113, 700114, 700115, 700116, 700117, 700118, 700119"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Kkkkkkiran's Nest",
//     "address": "Platform Number 9 3/47",
//     "city": "Pasadena",
//     "contact_number": "9830165441, 033 22426744",
//     "branch_incharge": "Ms Chanandler Bong",
//     "pincode_covered":[ "700001"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Las Vegas Boulevard",
//     "address": "Platform Number 9 3/48",
//     "city": "Pasadena",
//     "contact_number": "9330648535, 9339246760",
//     "branch_incharge": "Mr Ugly Naked Guy",
//     "pincode_covered":[ "700019"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Wynn Palace",
//     "address": "Platform Number 9 3/49",
//     "city": "Pasadena",
//     "contact_number": "9332984588",
//     "branch_incharge": "Mr Red( Because I'm Irish)",
//     "pincode_covered":[ "700007"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Brooklyn Bridge",
//     "address": "Platform Number 9 3/50",
//     "city": "Pasadena",
//     "contact_number": "9330172083",
//     "branch_incharge": "Ms Monica Obsessive Geller",
//     "pincode_covered":[ "   700002"]
//     },
//     {
//     "insitution_name": "Beetle Nut",
//     "branch_name": "Times Square",
//     "address": "Platform Number 9 3/51",
//     "city": "Pasadena",
//     "contact_number": "033-30622420,8420062681",
//     "branch_incharge": "Ms Phoebe Hyper Buffay",
//     "pincode_covered":[ "700007"]
//     }
// ]