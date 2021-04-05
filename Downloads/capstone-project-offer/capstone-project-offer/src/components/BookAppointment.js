/* TODO:  Browser errechnen lassen, welcher Tag welchen Wochentag hat: Start ist immer der 1.1. des Jahres, dann für 12 Monate bei setDateYear */
/* TODO:  Finanzamt Rate überweisen, Hellwig überweisen */
/* TODO:  Node Server so einrichten, dass die Pfade und configs für die Bilder funktionieren */



import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Calendar from "./Calendar"

const BookAppointment = () => {
/* TODO: id und Datenbankanbindung */
    const { id } = useParams();
    const { data: products, error, isPending } = useFetch('http://localhost:8000/products/' + id);
    const { data: appointments } = useFetch('http://localhost:8000/appointments');
    const { data: oeffnungszeiten } = useFetch('http://localhost:8000/oeffnungszeiten');

/* TODO: history deklarieren, um in der Historie wieder zurück zu kommen */
    const history = useHistory();


    return (

        <div className="book-appointment">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { products && appointments && oeffnungszeiten && (<Calendar appointments={appointments} products={products} oeffnungszeiten={oeffnungszeiten}/>) }
        </div>
    );
}

export default BookAppointment;