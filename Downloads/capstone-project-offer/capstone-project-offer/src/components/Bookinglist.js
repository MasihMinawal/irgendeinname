
const Bookinglist = ({appointments , products}) => {

const terminMap = appointments.map(appointment => {

        let pTitle = "";
        let pPrice = "";
        let aTime = "";
        let aDay = "";
        let aMonth = "";
        let pStreet = "";
        let pZip = "";
        let pCity = "";
        let pImage = "";

        products.map(product => {
            if(product.id.toString() === appointment.productID)
            {   
                pTitle = product.title;
                pPrice = product.price;
                aTime = appointment.thisTime;
                aDay = appointment.thisDay;
                aMonth = appointment.thisMonth;
                pStreet = product.address;
                pZip = product.zip;
                pCity = product.city;
                pImage = product.image;
            }
        })

        let loadImage = () => { return( require(`../material/images/fussball/${pImage}`).default )}

let parseTime = parseInt(aTime, 10);

console.log(parseTime)

let hour = Math.floor(parseTime / 60);
        let hour2 = '';
        if(hour < 10){hour2 = '0'};
        const minutes = parseTime % 60;
        let minutes2 = '';
        if(minutes < 1){minutes2 = '0'};

        return(
            <div className="terminObjekt">
                <div className="product-preview-left-block">
                    <img src={loadImage()} width="100%" height="auto" />
                </div>
            <div className="product-preview-middle-block">
            <div>
                {pTitle} 
            </div>
            <div>
                {pPrice} €
            </div>
            </div>
            <div className="product-preview-right-block">
                {aDay}.{aMonth} | {hour2}{hour}:{minutes2}{minutes}<br/>
                {pStreet}<br/>{pZip}<br/> {pCity} 
            </div>
            </div>
        )
    })


return (<div>
<div className="termine-header">
Termine
</div>
<hr/>
<div className="termine-map">
{terminMap}
</div>
</div>
)
}
export default Bookinglist;