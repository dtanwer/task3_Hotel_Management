const prompt = require('prompt-sync')();
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}
function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function calculateBill(hoursStay, hourlyRate) {
    const totalCost = hoursStay * hourlyRate;
    return 1100;
  }

  function calculateHours(startDate, startTime, endDate, endTime) {
    const startTimestamp = new Date(`${startDate}T${startTime}:00`).getTime();
    const endTimestamp = new Date(`${endDate}T${endTime}:00`).getTime();
  
    const timeDiff = Math.abs(endTimestamp - startTimestamp);
    
    const totalHours = Math.round(timeDiff / (1000 * 60 * 60) * 100) / 100000;

    return totalHours;
  }


class Client {
    constructor(name, address, phoneNumber, id, roomNumber, roomType) {
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.id = id;
        this.roomNumber = roomNumber;
        this.roomType = roomType;
        this.checkInDate = getCurrentDate();
        this.checkInTime = getCurrentTime();
    }
    getClientDetails() {
        console.log(`----------Client ID is  ${this.name}------`);
        console.log(`Name is ${this.name}`);
        console.log(`Room No.  is ${this.roomNumber}`);
        console.log(`Phone Number is ${this.phoneNumber}`);
        console.log(`Check-In Date and Time is ${this.checkInDate} ${this.checkInTime}`);
    }
    getName()
    {
        return this.name;
    }
    getRoomNumber()
    {
        return this.roomNumber;
    }
    getCheckInDate()
    {
        return this.checkInDate;
    }
    getCheckInTime()
    {
        return this.checkInTime;
    }
    getRoomType()
    {
        return this.roomType;
    }
}


const inputClientDetails = (Id, press) => {
    let name = prompt("Enter Name :");
    let address = prompt("Enter Address :");
    let phoneNumber = parseInt(prompt("Enter PhoneNumber :"));
    obj.showAvailableRooms(false);
    let roomNumber = parseInt(prompt("Enter roomNumber :"));
    let roomType = press;
    let id = Id;
    let flag = false;
    switch (press) {
        case '1':
            obj.Room1[roomNumber] = 0;
            break;
        case '2':
            obj.Room2[roomNumber] = 0;
            break;
        case '3':
            obj.Room3[roomNumber] = 0;
            break;

        default:
            flag = true;
            break;
    }
    console.log(id, obj.Room1[id]);
    if (flag) {
        console.log("Invalid Room Type !!!");
        let press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }
    } else {
        let client = new Client(name, address, phoneNumber, id, roomNumber, roomType);
        return client;
    }
}
class Hotel {
    constructor(id, password) {
        console.log("---------------------------Welcome to the Hotel Management----------------------------");
        this.setAdmin(id, password);
        this.Clients = [];
        this.Gym = new Array(25).fill(0);
        this.Pool=new Array(25).fill(0);
        this.Laundry=new Array(25).fill(0);
        this.Offer=new Array(25).fill(0);
        this.foodBill=new Array(25).fill(0);
        this.Room1 = new Array(5).fill(1);
        this.Room2 = new Array(10).fill(1);
        this.Room3 = new Array(10).fill(1);

    }
    getAvailableRooms(Room) {
        let cnt = "";
        for (let i = 0; i < Room.length; i++) {
            if (Room[i] === 1) {
                cnt += (i + " ");
            }
        }
        return cnt;
    }

    setAdmin(id, password) {
        this.id = id;
        this.password = password;
    }
    Options() {
        console.log("-------------------Press 0 For Client Info---------------------- ");
        console.log("-------------------Press 1 For Booking Rooms---------------------- ");
        console.log("-------------------Press 2 For Available Rooms---------------------- ");
        console.log("-------------------Press 3 For Extra Facilies---------------------- ");
        console.log("-------------------Press 4 For Ordering Food---------------------- ");
        console.log("-------------------Press 5 For All Clients Info---------------------- ");
        console.log("-------------------Press 6 For Check-Out---------------------- ");

        let press = parseInt(prompt("Press  Your Input  :"));
        this.Onpress(press);

    }
    Login() {
        let id = prompt("Enter Admin ID : ");
        let password = prompt("Enter Admin Password : ");
        if (this.id === id && this.password === password) {
            console.log("YOU LOGIN !!!!");
            this.Options();
        }
        else {
            console.log("WRONG ID AND PASSWORD !!!! ")
            let press = prompt("Press 1 To ReEnter ID Password : ");
            if (press == '1')
                this.Login();
        }
    }

    Onpress(press) {
        switch (press) {
            case 0:
                this.getInfoOfClient();
                break;
            case 1:
                this.bookRoom();
                break;
            case 2:
                this.showAvailableRooms(true)
                break;
            case 3:
                this.extraFacilities();
                break;
            case 4:
                this.orderFood();
                break;
            case 5:
                this.getInfoOfAllClients();
                break;
            case 6:
                this.checkOut();
                break;
            default:
                console.log("Invalid Input  --Press Again --!!");
                this.Options();
        }

    }
    getInfoOfClient() {
        if (this.Clients.length == 0) {
            console.log("No CLient in Hotel ")
           this.Options();
        }
        let press = parseInt(prompt("Enter the Id of Client : "));
        if(press>this.Clients.length)
        {
            console.log("Invalid Id");
            getInfoOfClient();
        }
        this.Clients[press].getClientDetails();
        press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }
    }
    getInfoOfAllClients() {
        if (this.Clients.length == 0) {
            console.log("No CLient in Hotel ");
        }
        for (let i = 0; i < this.Clients.length; i++) {
            console.log("-----------------------------------------------------------");
            this.Clients[i].getClientDetails();
            console.log("-----------------------------------------------------------");
        }

        let press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }
    }
    showAvailableRooms(flag) {
        console.log(`-------------: Available rooms :------------`)

        console.log(`Premium Available rooms No's (--RS 1000/hours--): ${this.getAvailableRooms(this.Room1)}`)


        console.log(`Medium Available rooms No's  (--RS 500/hours--): ${this.getAvailableRooms(this.Room2)}`)


        console.log(`Normal Available rooms No's  (--RS 100/hours--) : ${this.getAvailableRooms(this.Room3)}`)

        if (flag) {
            let press = prompt("Press 1 for Moving Home pages: ");
            if (press == '1') {
                this.Options();
            }
        }
    }



    bookRoom() {
        console.log("Press 1 for Premium Room (--RS 1000/hours--)")
        console.log("Press 2 for medium Room (--RS 500/hours--)")
        console.log("Press 3 for Normal Room (--RS 100/hours--)")
        let press = prompt("Press Your Input : ");
        let id = this.Clients.length;
        let ClientDetails = inputClientDetails(id, press);
        this.Clients.push(ClientDetails);
        console.log(`Client Id is ${id}`);

        console.log('--------Room is Booked--------');

        press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }


    }

    extraFacilities()
    {
        console.log('--------------------Extra Facilities----------------------------');
        console.log("Press 1 For Gym Booking #(RS 1000 )#");
        console.log("Press 2 For Swimming Pool #(Rs 500 )# ");
        console.log("Press 3 For Laundry #( Rs 200)#");
        console.log("Press 4 For Combo Offer {GYM,Swimming,Laundry} #(1500 Rs per Kg Cloths)#");

        let press = prompt("Press Your Input : ");
        let id = parseInt(prompt("Enter Client ID : "));
        switch (press) {
            case "1":
                this.Gym[id]=1000;
                break;
            case "2":
                this.Pool[id]=500;
                break;
            case "3":
                this.Laundry[id]=200;
                break;
            case "4":
                this.Offer[id]=1500;
                break;
        
            default:
                console.log("----------------Invalid InPut :) --------");
                break;
        }

        press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }

    }
    orderFood()
    {
        console.log("----------------------Order Food ------------------------");
        let id = prompt("Enter Client Id : ");
        console.log("Press 1 For Breakfast (Basic breakfast Rs 800 )")
        console.log("Press 2 For Lunch (Basic Lunch Rs 1500 )")
        console.log("Press 3 For Dinner (Basic Lunch Rs 1500 )")
        let press = prompt("Press Press Your Input : ");
        if(press=="1")
        {
            this.foodBill[id]+=800;
            console.log("Break Fast Ordered");
        }
        else if(press=="2")
        {
            this.foodBill[id]+=1500;
            console.log("Lunch Ordered");
        }
        else{
            this.foodBill[id]+=1500;
            console.log("Dinner Ordered");
        }
        
         press = prompt("Press 1 for Moving Home pages: ");
        if (press == '1') {
            this.Options();
        }

    }

    checkOut() {
console.log('--------------------CheckOut Client----------------------------')
        if (this.Clients.length == 0) {
            console.log("All Check Out :)  !!!");
            let press = prompt("Press 1 for Moving Home pages: ");
            if (press == '1') {
                this.Options();
            }

        }
        let press = parseInt(prompt("Enter CLient ID : "));
        if(press>this.Clients.length)
        {
            console.log("Invalid Id");
            checkOut();
        }
        let clientdata= this.Clients[press];
        this.Clients[press].getClientDetails();
        console.log("------Client Id is-------",press)
            console.log(`GYM : ${this.Gym[press]}`);
            console.log(`Pool : ${this.Pool[press]}`);
            console.log(`Laundry : ${this.Laundry[press]}`);
            console.log(`Offer : ${this.Offer[press]}`);
            console.log(`Food : ${this.foodBill[press]}`);

         press = parseInt(prompt("Press -1 for check-out : "));
         console.log('-----------------------Bill--------------------------')
         if(press=="-1")
         {
            let time=clientdata.getCheckInTime;
            let date=clientdata.getCheckInDate;
            let currentTime=getCurrentTime();
            let currentDate=getCurrentDate();


            console.log(`Date: ${currentDate}  Time:${currentTime}`);

            let hours=calculateHours(date,time,currentDate,currentTime);

            console.log(`Stay Hours in Hotel :${hours}`);

            let roomType=clientdata.getRoomType();
            let bill=0;
            if(roomType=="1"){   
                console.log(`Rate Per Hours  :${1000}`);
                bill=calculateBill(hours,1000);
            }
            else if(roomType=="2"){
                console.log(`Rate Per Hours  :${500}`);
                
                bill=calculateBill(hours,500);
            }
            else
            {
                console.log(`Rate Per Hours  :${100}`);
                bill=calculateBill(hours,100);
            }
            

            // bill+=(this.Gym[press]+this.Pool[press]+this.Laundry[press]+this.Offer[press]+this.foodBill[press]);
            console.log(`Final Bill : ${bill}`);

            console.log('-------------------------------------------------')

            let press = prompt("Press 1 for Moving Home pages: ");
            if(press=="1")
            {
                this.Options();
            }


         }

    }


}

const obj = new Hotel("admin", "admin");
obj.Login();