import React from 'react'
import './Definition.css'

function Definitions({ word, meanings, category }) {
    return (
        <div className='meanings'>
            {/* {console.log(meanings)} */}
            {

                meanings[0] && word && category === 'en' && (
                    <audio src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio} controls style={{ backgroundColor: '#fff', borderRadius: '5px', width: "100%" }} >
                        Your Browser doesn't support audio element
                    </audio>
                )}
            {
                word === "" ? <span className='subTitle'> Start by Typing a word in Search</span> : (meanings.map((mean, index) => (
                    mean.meanings.map((item, index) => (

                        item.definitions.map((def, index) => (
                            <div key={index}
                                className='singleMean'>

                                <b>{def.definition}</b>
                                <hr style={{ backgroundColor: "gray", width: "100%" }} />

                                {
                                    def.example && (
                                        <span>
                                            <b>Example: </b> {def.example}
                                        </span>
                                    )}
                                {def.synonyms && (
                                    // console.log(def.synonyms),
                                    < span >
                                        <b>Synonyms: </b>
                                        {def.synonyms.map((s) => `${s},`)}

                                    </span>
                                )}
                            </div>
                        ))
                    ))
                )))
            }
        </div >
    )
}

export default Definitions