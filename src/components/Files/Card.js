import React from 'react';

const Card = (props) => {
    console.log(props);
    return (
        <div className='Cards'>
            <div className='Card'>
                <div className='CardHeading'>
                    <h1>{props.Heading} </h1>
                    <p>
                        {props.Content}
                    </p>
                </div>
                <div className='ImageWrapper'>
                    <img src={props.imgsrc} alt="Loading.." className='CardImage' />
                </div>
            </div>
            <button>
                {props.button}
            </button>
        </div>
    );
}
export default Card;