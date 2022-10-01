import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function SlideDiv2() {
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
                    <img src="https://images.indianexpress.com/2022/09/ch1667750-1.jpg?resize=450,250" alt="1" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Datesheet for CBSE Board Exam 2023 to be released in December, says senior official</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/Life-in-a-Foreign-University-copy.jpg?resize=450,250" alt="2" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Life in a Foreign University: Chennai boy in Queen's University Belfast shares struggling Covid days, internship and part-time job in UK</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/10/UGC-1200-1.jpg?resize=450,250" alt="3" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>UGC clears professor of practice post for ‘experts’, PhD not must</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/10/iiiiiiiiii.jpg?resize=450,250" alt="4" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Gained in translation: American Khan Academy now in Punjabi for govt school kids</h1>
                </div>
                <div style={{ width: 430, height: 500}}>
                    <img src="https://images.indianexpress.com/2022/09/IIM-Ahmedabad-2.jpg?resize=450,250" alt="5" />
                    <h1 style={{fontSize:"25px",fontWeight:"bold"}}>Top MBA colleges: Stanford, Harvard and Wharton top QS World Ranking for Business Schools</h1>
                </div>
            </ReactSimplyCarousel>
        </div>
    );
}

export default SlideDiv2;