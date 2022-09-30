import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function SlideDiv() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    return (
        <div>
            <ReactSimplyCarousel
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={1}
                itemsToScroll={1}
                forwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'gray',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    //here you can also pass className, or any other button element attributes
                    style: {
                        alignSelf: 'center',
                        background: 'transparent',
                        border: 'none',
                        borderRadius: '50%',
                        color: 'gray',
                        cursor: 'pointer',
                        fontSize: '20px',
                        height: 30,
                        lineHeight: 1,
                        textAlign: 'center',
                        width: 30,
                    },
                    children: <span>{`<`}</span>,
                }}
                responsiveProps={[
                    {
                        itemsToShow: 1,
                        itemsToScroll: 1,
                        minWidth: 768,
                    },
                ]}
                speed={400}
                easing="linear"
            >
                {/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/Axar-2.jpg?resize=450,250" alt="1" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Super-sub Axar makes an impact</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/07/jasprit-bumrah-3.jpg?resize=450,250" alt="2" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Jasprit Bumrah likely to be ruled out of T20 World Cup</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/Pant-Karthik.jpg?resize=450,250" alt="3" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Will India give Pant and Karthik more game time </h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/Deepti-Sharma-4.jpg?resize=450,250" alt="4" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Charlie Dean's dismissal wasn't planned but we had noticed she was taking undue advantage: Kaur&nbsp;</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/pak-vs-eng-live-1.jpg?resize=450,250" alt="5" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>PAK vs ENG 6th T20 Live Score Updates</h1>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default SlideDiv;