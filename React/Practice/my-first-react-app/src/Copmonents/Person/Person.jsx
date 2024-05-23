import PersonInformationList from "./PersonInformationList";
import { useState } from "react";

const personListTypes = [
    {title: "Phone Numbers",fieldName : "phoneNumbers", labelField:"name", valueField:"number"},
    {title: "Addresses",fieldName : "addresses", labelField:"name", valueField:"address"},
    {title: "Emails",fieldName : "emails", labelField:"name", valueField:"email"},
]


const Person = (props) => {
    const [activeListType, setActiveListType] = useState("emails");
    const handleListTypeChange = (newListType) => {
        setActiveListType(newListType);
    };
    return (
        <div className="person">
            <div className="side">
            <img className="person-avatar" src={props.avatar} alt={props.name} />
            <h1 className="person-name">{props.name}</h1>
            </div>
            <div className="info">
            {personListTypes.map((listType) => {
                return ( <PersonInformationList key={listType.fieldName} 
                type = {listType} 
                activeType = {activeListType} 
                personData = {props}
                onListTypeChange = {handleListTypeChange} 
                />
                );
            })}
            </div>
        </div>
    );
};


export default Person;