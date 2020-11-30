import React from 'react'

function ContactCard(){
    return (
        <div className='contacts'>
            <Contact 
                name = 'Mr Sam'
                imgUrl=''
                email= 'sam@gmail.com'
                phone= '12345678'
            />
            <Contact 
                 name = 'Mr David'
                imgUrl=''
                email= 'sam@gmail.com'
                phone= '12345678'
            />
            <Contact 
                 name = 'Mr Frank'
                imgUrl=''
                email= 'frank@gmail.com'
                phone= '12345678'
            />
            <Contact 
                 name = 'Mr Raneri'
                imgUrl=''
                email= 'raneri@gmail.com'
                phone= '12345678'
            />
        </div>
    )
}

export default ContactCard