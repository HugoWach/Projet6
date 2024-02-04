import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import serviceLogement from "@/_service/logement.service";
import Star from '@/components/Star/star';
import Tag from '@/components/Tag/tag';
import Profile from '@/components/Profile/profile';
import Slider from '@/components/Slider/slider';
import Title from '@/components/Title/title';






const Logement = ({ image, title }) => {

    const [logement, setlogement] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    let { id } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        // eslint-disable-next-line
        getInfo()
    }, [id])

    const getInfo = () => {
        serviceLogement.oneLogements(id)
            .then((data) => {
                if (data) {
                    setlogement(data);
                    setIsLoading(false);
                } else {
                    navigate("/404")
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }


    if (isLoading) return (<h3>les données charge...</h3>)

    return (
        <section className="Logement">
            <Slider pictures={logement.pictures} />
            <div className='titleProfile'>
                <Title title={logement.title} />
                <Profile host={logement.host} />
            </div>
            <div className='tagStar'>
                <Tag tags={logement.tags} />
                <Star rating={logement.rating} />
            </div>

        </section>
    );
};

export default Logement;