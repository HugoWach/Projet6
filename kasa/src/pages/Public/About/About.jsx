import React from 'react';
import Banner from '@/components/Banner/banner';
import bannerAbout from '@/Assets/Images/bannerAbout.png';
import about from "@/Assets/data/about.json";
import Dropdown from '@/components/Dropdown/dropdown';

const About = () => {
    return (
        <section className="About">
            <Banner image={bannerAbout} title=" " />

            <ul>
                {
                    about.map((about, index) =>
                        <Dropdown title={about.Title} content={about.Content} key={index} pages="true" />
                    )
                }
            </ul>
        </section >
    );
};

export default About;