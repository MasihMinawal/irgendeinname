import { useState } from "react";
import { useHistory, useParams, withRouter } from "react-router-dom";

const Calendar = ({appointments , products, oeffnungszeiten}) => {
    
/* Datenbankdownload */
const { id } = useParams();
const history = useHistory();
/*
const { data: products, error, isPending } = useFetch('http://localhost:8000/products/' + id);
const { data: appointments } = useFetch('http://localhost:8000/appointments');
*/

const loadImage = () => { return( require(`../material/images/fussball/${products.image}`).default )}

/* Datenbankupload */
const handleSubmit = (e) => {
    e.preventDefault();
    const appointment = {thisTime, thisDay, thisMonth, thisYear, productID}; 

fetch( 'http://localhost:8000/appointments/', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(appointment)
}).then(() => {
    //history.go(-1);
    history.push('/bookings');
  })
}


/* StateVariablen */
let [thisMonth, setThisMonth] = useState(4);
let [thisYear, setThisYear] = useState(2021);
let [thisDay, setThisDay] = useState(1);
let [thisTime, setTime] = useState('1');
const [productID] = useState(id);


/* Gebuchte Termine fetchen */
let blockedBookings = [];

const getBookings = appointments.map(appointment => {
    if((productID === appointment.productID) && (thisDay === appointment.thisDay) && (thisMonth === appointment.thisMonth) && (thisYear === appointment.thisYear))
    {
    blockedBookings.push(appointment.thisTime)
    }
})



/* Monate erzeugen */

const months = [{"id" : 1, "name":"Januar", "days": 31, "firstWeekday": 5}, {"id":2, "name":"Februar", "days": 28, "firstWeekday": 1}, {"id":3, "name":"März", "days": 31, "firstWeekday": 1}, 
                {"id":4, "name":"April", "days": 30, "firstWeekday": 4}, {"id":5, "name":"Mai", "days": 31, "firstWeekday": 6}, {"id":6, "name":"Juni", "days": 30, "firstWeekday": 2},
                {"id":7, "name":"Juli", "days": 31, "firstWeekday": 4}, {"id":8, "name":"August", "days": 31, "firstWeekday": 7}, {"id":9, "name":"September", "days": 30, "firstWeekday": 3},
                {"id":10, "name":"Oktober", "days": 31, "firstWeekday": 5}, {"id":11, "name":"November", "days": 30, "firstWeekday": 1}, {"id":12, "name":"Dezember", "days": 31, "firstWeekday": 3}];

const handleLastMonth = (e) => 
{
    if(thisMonth === 1)
    {   
        thisMonth = 12; 
        setThisYear(thisYear - 1)
    } 
        setThisMonth(thisMonth - 1);
}
        

const handleNextMonth = (e) => 
{
    if(thisMonth >= 12)
    {   
        thisMonth = 0; 
        setThisYear(thisYear + 1)
    } 
        setThisMonth(thisMonth + 1);
}
                

let thisMonthString = "April";
switch (thisMonth) 
{
    case 1:thisMonthString = "Januar";break; case 2:thisMonthString = "Februar";break; case 3:thisMonthString = "März";break; case 4:thisMonthString = "April";break;
    case 5:thisMonthString = "Mai";break; case 6:thisMonthString = "Juni";break; case 7:thisMonthString = "Juli";break; case 8:thisMonthString = "August";break;
    case 9:thisMonthString = "November";break; case 10:thisMonthString = "Oktober";break; case 11:thisMonthString = "November";break;
    case 12:thisMonthString = "Dezember";break;
}

/* Tage erzeugen */

function showWeekdays() 
{
    return (
    <div>
        <label className="weekday">Mo</label><label className="weekday">Di</label><label className="weekday">Mi</label>
        <label className="weekday">Do</label><label className="weekday">Fr</label><label className="weekday">Sa</label><label className="weekday">So</label>
    </div>
    )
}

let days = [];
let emptyDays = [];
let openedDays = [];



const loadDays = () => 
{
    days = [];
    emptyDays = [];
    months.map(month => {
        if(month.id === thisMonth)
        {  
            oeffnungszeiten.map(offen => {
                if((offen.startMonth === thisMonth) && (offen.PID === products.id)){
                    openedDays.push(offen.startDay)
                }
            })

            let daysWithBookings = openedDays.filter(function(x) { 
                return (blockedBookings.indexOf(x) < 0)
            })
            console.log(blockedBookings)
            console.log(daysWithBookings)

            let i = 1;          
            for (i = 1; i <= month.days; i++)
            {   
                    if(daysWithBookings.includes(i.toString()) )
                    {
                        days.push(<div id={`Div-${i}`}>
                            <input 
                                id={`D-${i}`}
                                name="day"
                                type="radio"
                                key={`D-${i}`}
                                value={i}
                                onClick={(e) => {setThisDay(e.target.value)}}
                                className="daysinput">
                            </input>
                            <label for={`D-${i}`} className="dayslabel">{i}</label> 
                            </div>);
                    } else {
                        days.push(<div id={`Div-${i}`}>
                            <label for={`D-${i}`} className="dayslabel-disabled">{i}</label> 
                            </div>);
                    }
                }
            for (i = 1; i < month.firstWeekday; i++)
            {
                emptyDays.push(<div>
                    <label className="weekday"></label> 
                    </div>);
            }

        }    
    });
    return (<div className="day-wrapper">{emptyDays}{days}</div>)
}


/* Zeiten erzeugen */

let allTimes = [
                ]

                /*
"0", "15", "30", "45", "60", "75", "90", "105", "120", "135", "150", "165", "180", "195", "210", "225", "240", "255", "270", "285",
                "300", "315", "330", "345", "360", "375", "390", "405", "420", "435", "450", "465", "480", "495", "510", "525", "540", "555", "570", "585", 
                "600", "615", "630", "645", "660", "675", "690", "705", "720", "735", "750", "765", "780", "795", "810", "825", "840", "855", "870", "885",
                "900", "915", "930", "945", "960", "975", "990", "1005", "1020", "1035", "1050", "1065", "1080", "1095", "1110", "1125", "1140", "1155", "1170", "1185",
                "1200", "1215", "1230", "1245", "1260", "1275", "1290", "1305", "1320", "1335", "1350", "1365", "1380", "1395", "1410", "1425"
                */

const getOeffnungszeiten = oeffnungszeiten.map(offen => {
        if((products.id === offen.PID) && (thisDay === offen.startDay) && (thisMonth === offen.startMonth) && (thisYear === offen.startYear))
        {
            allTimes.push(offen.startTime)
        }
        console.log(allTimes);
        })

let bookedTimes = []

const localTimes = allTimes.filter(function(x) { 
    return bookedTimes.indexOf(x) < 0;
  });

const times = localTimes.filter(function(x) { 
    return blockedBookings.indexOf(x) < 0;
  });

const loadTimes = 
    times.map(time => {
        const hour = Math.floor(time / 60);
        let hour2 = '';
        if(hour < 10){hour2 = '0'};
        const minutes = time % 60;
        let minutes2 = '';
        if(minutes < 1){minutes2 = '0'};
                    
        return ( 
            <div>
                <input 
                    id={`T-${time}`}
                    name="time"
                    type="radio"
                    key={`T-${time}`}
                    value={time}
                    onClick={(e) => setTime(e.target.value)}
                    className="timesinput">
                </input>
                <label for={`T-${time}`} className="timeslabel">{hour2}{hour} : {minutes2}{minutes}</label> 
            </div>
                    
        );
    })

const productPreview = () => {
    return(
        <div className="product">
                <div className="product-preview-left-block">
                        <img src={loadImage()} width="100%" height="auto" />
                </div>
               <div className="product-preview-middle-block">
               {products.title}
               <br />
               {products.price} €
                </div>
                <div className="product-preview-right-block">
                     {products.address}<br/>
                    {products.zip} {products.city}
                </div>
        </div>
    )
}

return(
    <div className="booking">
        <div className="booking-title">Buchen</div>
        <hr/>
        <form onSubmit={handleSubmit}>
            <div className="calendar">
                <div className="month-wrapper">
                    <label className="arrow left" onClick={handleLastMonth}> {"<"}  </label>
                    <label className="monthString">{thisMonthString} {thisYear}</label>
                    <label className="arrow right" onClick={handleNextMonth}> {">"}  </label>
                </div>
                <div className="day-wrapper">
                {showWeekdays()}
                {loadDays()}
                </div>
                <hr/>
                <div className="time-wrapper-textline">Freie Termine</div>
                <div className="time-wrapper">
                    {loadTimes}
                    {getBookings}
                    {getOeffnungszeiten}
                </div>
            </div>
            <hr/>
                {productPreview()}
            <hr/>
            <button className="bookbutton" type="submit">Termin buchen</button>
        </form>
    </div>
        );
}

export default Calendar;