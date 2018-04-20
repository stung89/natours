import React from 'react';
import Modal from 'react-modal';

// need to manage the state using redux

const TourModal = () => (
    <Modal
        isOpen={true}
        contentLabel="Selected Tour"    
    >
        <div className="modal" id="modal">
            <div className="modal__content">
                <div className="modal__left">
                    <img src="images/nat-8.jpg" alt="tour photo" className="modal__img"/>
                    <img src="images/nat-9.jpg" alt="tour photo" className="modal__img"/>
                </div>
                <div className="modal__right">
                    <h2 className="heading-secondary u-margin-bottom-medium">Start booking now</h2>
                    <h3 className="heading-tertiary u-margin-bottom-small">Important &ndash; Please read these terms before booking</h3>
                    <p className="modal__text">
                    Occaecat shabby chic sint vinyl anim. Tofu do gluten-free ut flannel forage scenester man bun venmo fixie slow-carb. Freegan meditation tbh four loko. Bushwick crucifix viral VHS veniam bicycle rights. In hoodie ipsum reprehenderit shaman vinyl quis quinoa artisan put a bird on it ullamco. Pariatur ennui irony, meggings twee nostrud neutra fugiat offal chambray mixtape before they sold out. Vaporware eu mumblecore tumblr tbh ullamco.
                    </p>
                    <a href="#" className="btn btn--green">Book now</a>
                </div>
            </div>
        </div>
    </Modal>
);

export default TourModal;