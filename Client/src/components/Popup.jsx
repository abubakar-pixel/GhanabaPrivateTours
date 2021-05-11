import touristpic from "../resources/photos/touristpic.jpg";
import touristpica from "../resources/photos/touristpica.jpg";


const Popup = () => {
    return (
        <div className="popup" id="popup">
        <div className="popup__content"> 
            <div className="popup__left">
                <img src={touristpic} alt="tour photo" className="popup__img" />
                <img src={touristpica} alt="tour photo" className="popup__img" />

            </div>
            <div className="popup__right">
                <a href="#section-tours" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-small">start booking now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small">important &ndash; please contact Ghanaba private tours</h3>
                <p className="popup__text">Lorem ipsumconsectetur tempora unde quo recusandae saepe, perferendis esse quidem in repudiandae repellat sit. Hic delectus exercitationem cupiditate cum placeat repellat, consequatur nihil tempora impedit, repudiandae corrupti eum, laudantium aperiam facilis minus fugit beatae libero? Adipisci autem, ratione officiis voluptatum expedita magnam totam labore atque necessitatibus explicabo aut molestiae libero consequuntur magni enim, excepturi esse sunt a veritatis laboriosam mollitia repudiandae culpa provident. Tenetur unde ipsum, modi illo provident, minus recusandae expedita fugit libero assumenda quia nemo cumque vel explicabo qui quod dolore laboriosam?</p>
                <a href="#" className="btn btn--green">book now</a>
            </div>
        </div>
    </div>
    )
}

export default Popup;