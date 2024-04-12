

import Style from "./index.module.css";
import Heading from "../Heading";
import Card from "./card";
import jsonData from './news.json';
import { useState } from "react";
import { Link } from "react-router-dom";

function News() {
    const [selectedChip, setSelectedChip] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false); // Додайте стан для відстеження розширення контенту

    const handleChipSelect = (chip) => {
        setSelectedChip(chip);
    };

    const handleAllNewsSelect = () => {
        setSelectedChip(null);
    };

    const toggleExpand = () => {
        setIsExpanded(prevState => !prevState);
    };

    let counter = 0;
    let numberToPass = 1;
    const filteredData = selectedChip ? jsonData.filter(item => item.class === selectedChip) : jsonData;

    return (
        <div className={Style.news}>
            <Heading massage="Новини"/>
            <div className={Style.chipChoise}>
                <button className={selectedChip === null ? Style.selected : ''} onClick={handleAllNewsSelect}>Всі новини</button>
                <button className={selectedChip === 0 ? Style.selected : ''} onClick={() => handleChipSelect(0)}>Оголошення</button>
                <button className={selectedChip === 1 ? Style.selected : ''} onClick={() => handleChipSelect(1)}>Шкільне життя</button>
                <button className={selectedChip === 2 ? Style.selected : ''} onClick={() => handleChipSelect(2)}>Досягення</button>
                <button className={selectedChip === 3 ? Style.selected : ''} onClick={() => handleChipSelect(3)}>Події</button>
                <button className={selectedChip === 4 ? Style.selected : ''} onClick={() => handleChipSelect(4)}>Проєкти</button>
            </div>
            <div id="content"className={`${Style.content} ${isExpanded ? Style.expanded : ''}`}>
                {filteredData.map((item, index) => (
                    <Card
                        key={index}
                        img={item.img}
                        topic={item.topic}
                        about={item.about}
                        data={item.data}
                        class={item.class}
                        selectedChip={selectedChip}
                        counter={++counter}
                    />
                ))}
            </div>
            <div className="">
                <div className={Style.more}>
                    <button onClick={toggleExpand}>{isExpanded ? 'Показати менше' : 'Показати більше'}</button>
                </div>
            </div>
        </div>
    );
}

export default News;
