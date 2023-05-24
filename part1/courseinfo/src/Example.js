import React from "react";

const Linux = ({distro, buildDate, rel}) => {
    const life = () =>  new Date().getFullYear() - buildDate
    return (
        <div>
            <p>
                The distro {distro} is on release {rel}.
                <p>It is now {life()} years.</p>
            </p>
        </div>
    )
}

const Example = () => {
    const distro = 'Debian'
    const release = 11.7
    const buildDate = 1996

    return (
        <div>
            <h1>Linux</h1>
            <Linux distro="Lite" rel="6.4" buildDate="2014"></Linux>
            <br></br>
            <Linux distro={distro} rel={release} buildDate={buildDate}></Linux>
            
        </div>
    )
}

export default Example;