import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

const HeroDetails = () => {
    const { id } = useParams();
    const [heroDetails, setHeroDetails] = useState(null);

    useEffect(() => {
        const fetchHeroDetails = async () => {
            try {
                const response = await fetch(`https: //www.superheroapi.com/api.php/122102502218121324/${id}`);
                if (!response.ok) {
                    throw new Error(`Error fetching hero details. Status: ${ response.status }`);
                }

                const data = await response.json();
                setHeroDetails(data);

            } catch (error) {
                console.error(error);
            }
        };

        fetchHeroDetails();
    }, [id]);

    if (!heroDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>{heroDetails.name} Details</h2>
            <h3>Powerstats</h3>
            <p>Intelligence: {heroDetails.powerstats.intelligence}</p>
            <p>Strength: {heroDetails.powerstats.strength}</p>
            <p>Speed: {heroDetails.powerstats.speed}</p>
            <p>Durability: {heroDetails.powerstats.durability}</p>
            <p>Power: {heroDetails.powerstats.power}</p>
            <p>Combat: {heroDetails.powerstats.combat}</p>

            <h3>Biography</h3>
            <p>Full Name: {heroDetails.biography['full-name']}</p>
            <p>Alter Egos: {heroDetails.biography['alter-egos']}</p>
            <p>Aliases: {heroDetails.biography.aliases.join(', ')}</p>
            <p>Place of Birth: {heroDetails.biography['place-of-birth']}</p>
            <p>First Appearance: {heroDetails.biography['first-appearance']}</p>
            <p>Publisher: {heroDetails.biography['publisher']}</p>
            <p>Alignment: {heroDetails.biography['alignment']}</p>

            <h3>Appearance</h3>
            <p>Gender: {heroDetails.appearance.gender}</p>
            <p>Race: {heroDetails.appearance.race}</p>
            <p>Height: {heroDetails.appearance.height.join(', ')}</p>
            <p>Weight: {heroDetails.appearance.weight.join(', ')}</p>
            <p>Eye Color: {heroDetails.appearance['eye-color']}</p>
            <p>Hair Color: {heroDetails.appearance['hair-color']}</p>

            <h3>Work</h3>
            <p>Occupation: {heroDetails.work.occupation}</p>
            <p>Base: {heroDetails.work.base}</p>

            <h3>Connections</h3>
            <p>Group Affiliation: {heroDetails.connections['group-affiliation']}</p>
            <p>Relatives: {heroDetails.connections.relatives}</p>

            <h3>Image</h3>
            <img src={heroDetails.image.url} alt={heroDetails.name} />
        </div>

    );
};

export default HeroDetails;