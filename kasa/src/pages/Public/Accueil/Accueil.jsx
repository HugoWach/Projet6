import React from 'react';
import serviceLogement from "@/_service/logement.service";
import { NavLink } from 'react-router-dom';
import Card from '@/components/Card/card';
import Banner from '@/components/Banner/banner';
import bannerImage from '@/Assets/Images/bannerImage.png';

const Accueil = () => {
    return (
        <section className="Accueil">
            <Banner image={bannerImage} title="Chez vous, partout et ailleurs" />
            <ul className='ListeLogements'>
                {
                    serviceLogement.allLogements().map((logement) =>
                        <NavLink key={logement.id} to={"/logement/" + logement.id}>
                            <Card image={logement.cover} title={logement.title} />
                        </NavLink>
                    )
                }
            </ul>

        </section>
    );
};

export default Accueil;