import React from 'react'
import AnimalCard from './AnimalCard'
import Animals from '../Data/FakeData'

function OpenField() {

  return (
    <div className='field'>
        <AnimalCard name = {Animals[0].name} 
        classification = {Animals[0].classification}
        origin = {Animals[0].origin}
        averAge={Animals[0].averAge}
        img={Animals[0].img
        }
       />
        <AnimalCard name = {Animals[1].name} 
        classification = {Animals[1].classification}
        origin = {Animals[1].origin}
        averAge={Animals[1].averAge}
        img={Animals[1].img
        }
       />
        <AnimalCard name = {Animals[2].name} 
        classification = {Animals[2].classification}
        origin = {Animals[2].origin}
        averAge={Animals[2].averAge}
        img={Animals[2].img
        }
       />
<AnimalCard name = {Animals[3].name} 
        classification = {Animals[3].classification}
        origin = {Animals[3].origin}
        averAge={Animals[3].averAge}
        img={Animals[3].img
        }
       />
<AnimalCard name = {Animals[4].name} 
        classification = {Animals[4].classification}
        origin = {Animals[4].origin}
        averAge={Animals[4].averAge}
        img={Animals[4].img
        }
       />
    </div>

  )
}

export default OpenField