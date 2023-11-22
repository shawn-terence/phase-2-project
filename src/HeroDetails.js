import React,{useState,useEffect} from "react";
import {useParams,Link} from 'react-router-dom';

const HeroDetails = () => {
    const { id } = useParams();
    const [heroDetails, setHeroDetails] = useState(null);


}