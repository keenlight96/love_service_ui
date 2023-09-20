import React, {useEffect, useState} from 'react';
import "../../custom-css/cssShowImages.css"
import "../../custom-css/bootstrap.min.css"

const ShowImages = ({images}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const [modalState, setModalState] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);
    const [showHiddenImages, setShowHiddenImages] = useState(false);

    const toggleModal = (index) => {
        setModalState(!modalState);
        setSelectedImageIndex(index);
        if (index === 13) {
            setShowHiddenImages(!showHiddenImages);
        } else {
            setSelectedImageIndex(index);
        }
        console.log(modalState)
        console.log(modalState)
    }

    const backdropCloseModal = (e) => {
        let check = e.target.closest(".modal-content");
        console.log(e.target)
        console.log(check)
        if (!check) {
            setModalState(false);
        }

    }

    function plusSlides(n) {
        setSlideIndex(slideIndex + n);
        let newIndex = selectedImageIndex + n;
        if (newIndex < 0) {
            newIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            newIndex = 0;
        }
        setSelectedImageIndex(newIndex);
    }

    function currentSlide(n) {
        setSlideIndex(n);
        // showSlides(n);
    }

    function showSlides(n) {
        let slideIndex2 = slideIndex;
        let i;
        let slides = document.getElementsByClassName("mySlides-showImages");
        let dots = document.getElementsByClassName("demo-showImages");
        let captionText = document.getElementById("caption");
        if (n > slides.length) {
            slideIndex2 = 1
            setSlideIndex(1);
        }
        if (n < 1) {
            slideIndex2 = slides.length
            setSlideIndex(slides.length);
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex2 - 1].style.display = "flex";
        dots[slideIndex2 - 1].className += " active";
        // captionText.innerHTML = dots[slideIndex2 - 1].alt;
    }

    useEffect(() => {
        try {
            showSlides(slideIndex)
        } catch (e) {
        }
    }, [slideIndex, modalState])

    return (
        <>
            <div>
                <title>Bootstrap Example</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <div className="container">
                    <div>
                        {
                            images && images.map((item, key) => {
                                if (key < 2) {
                                    return (
                                        <a style={{display: 'block', borderRadius:'5px'}} key={key} onClick={() => toggleModal(key)}>
                                            <img style={{ height: "100%",width:'100%'}}  src={item.img} className alt="" />
                                            <span onClick={() => toggleModal(key)}></span>
                                        </a>
                                    )
                                }
                                if (key == 2) {
                                    return (
                                        <>
                                            <a style={{borderRadius:'5px'}} key={key} onClick={() => toggleModal(key)}>
                                                <img style={{  height: "100%",width:'100%'}} src={item.img} className alt="" />
                                                <div className="fadeDiv" style={{borderRadius:'5px'}}>
                                                    <span style={{fontFamily: 'Arial'}}>+{images.length - 2}</span>
                                                </div>
                                                <span onClick={() => toggleModal(key)}></span>
                                            </a>
                                            <div className="clearfix" />
                                        </>
                                    )
                                }
                            })
                        }


                    </div>

                    {/*The Modal*/}
                    {modalState ?
                        <div className="modal show" id="myModal" aria-modal="true" role="dialog" style={{display: 'block'}} onClick={(e) => {
                            backdropCloseModal(e)
                        }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <>
                                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                                        <div className="container-showImages" style={{border: "10px", width:'100%'}}>
                                            {selectedImageIndex !== -1 && (
                                                <div className="mySlides-showImages"
                                                     style={{
                                                         display: "flex",
                                                         alignItems: "center",
                                                         justifyContent: "center",
                                                         margin: "auto",
                                                         height: '100%',
                                                         width:'100%'
                                                     }}>
                                                    <img src={images[selectedImageIndex].img} style={{height:'600px', width:'500px', objectFit:'cover'}}/>
                                                </div>
                                            )}
                                            <a className="prev" onClick={() => {plusSlides(-1)}}>❮</a>
                                            <a className="next" onClick={() => {plusSlides(1)}}>❯</a>
                                        </div>
                                    </>
                                </div>
                            </div>
                        </div>
                        :
                        <></>
                    }

                </div>
                {modalState ?
                    <div className="modal-backdrop show"></div>
                    :
                    <></>
                }
            </div>

        </>
    );
};

export default ShowImages;