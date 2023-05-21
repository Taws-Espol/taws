import './style.css'
import React from 'react'
import { teams } from '../data/teams';

const mentor = teams.filter(
    (member) => member.estructura_organizacional === 'Mentor'
);

const directiva = teams.filter(
    (member) => member.estructura_organizacional === 'Directiva'
);

const lideres = teams.filter(
    (member) => member.estructura_organizacional === 'Lider'
);

const Team = () => {
    let anio = new Date().getFullYear();
    return (
        <>
            <h1 className="text-tawsBlue font-semibold text-4xl mt-8">
                <span className="text-white">$~ </span>Equipo de liderazgo {anio + "-" + (anio + 1)}
            </h1>
            <div className="grid grid-cols-1 mt-4 justify-items-center">
                {mentor.map((persona) => {
                    return <div className='flex mt-3 w-3/4 items-center'>
                        <img className='w-1/2 mx-auto rounded-full' src={persona.img} />
                        <div className="flex-col px-8 text-center">
                            <h2 className='text-white'>{persona.nombre}</h2>
                            <p className='text-cargo'>{persona.cargo}</p>
                            <p className='text-white'>{persona.descripcion}</p>
                        </div>
                    </div>
                })}
            </div >
            <div className="grid grid-cols-3 max-sm:grid-cols-1">
                {directiva.map((persona) => {
                    return <div className='text-center mt-8'>
                        <img className='w-4/6 mx-auto rounded-full mb-4' src={persona.img} />
                        <h2 className='text-white'>{persona.nombre}</h2>
                        <p className='text-cargo'>{persona.cargo}</p>
                    </div>
                })}
            </div>
            <div className="grid grid-cols-5 max-sm:grid-cols-2">
                {lideres.map((persona) => {
                    return <div className='text-center mt-8'>
                        <img className='w-5/6 mx-auto rounded-full mb-4' src={persona.img} />
                        <h2 className='text-white'>{persona.nombre}</h2>
                        <p className='text-cargo'>{persona.cargo}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default Team