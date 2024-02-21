import React from 'react'
import cardImage1 from '../icons/images/card1.png'
import cardImage2 from '../icons/images/card2.png'
import cardImage3 from '../icons/images/card3.png'


function Section2() {
  return (
    <div className='container section2Main'>
           <div className='row firstPart'>
            <div className='col-md-2'></div>
                <div className="SpotLightWorkSection text-center col-md-4">
                    <h1 className='text-center'>Spotlight Works</h1>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
                    <button className='btn text-white btn-black btn-outline-dark'>More Projects <i className="fa-solid fa-arrow-right" style={{color: "#f2f2f3"}}></i></button>
                </div>
                <div className='container WhitePart'>
            <div className='FirstCards'>
            <div className='row '>
              <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-3 col-sm-6">1</div>
                <div className="card card1 rounded firstCard col-md-4 col-sm-6">
                    <div className='IncaedFirstPart d-flex justify-content-center'>
                        <div className='forCardImage d-flex align-items-center bg-white'>
                            <img className='image' src={cardImage1} alt="shooi" />
                        </div>
                     </div>
                
                    <div class="card-body text-center text-white">
                    <h6>Quaid E Millah</h6>
                     <h5 class="card-title">IUML</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
                     <a href="#" class="btn text-white btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
                 {/* card2 */}
                 <div className="col-md-1 col-sm-12"></div>
                 <div className="col-md-3 col-sm-6"></div>
                 <div className="card card2  rounded secondCard  col-md-4 col-sm-6" >
                <div className='IncaedFirstPart d-flex justify-content-center'>
                    <div className='forCardImage d-flex align-items-center bg-white'>
                        <img className='image' src={cardImage2} alt="shooi" />
                    </div>
                 </div>
            
                <div class="card-body text-center text-dark">
                <h6>KPCC 138</h6>
                 <h5 class="card-title">Kerala Pradesh Congress Committee</h5>
                 <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum </p>
                 <a href="#" class="btn  btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
               </div>
             </div>
            </div>
            </div>

            {/* second */}

            <div className='SecondCard'>
            <div className='row'>
                <div className="col-md-1 col-sm-12"></div>
                <div className="card card3 rounded bg-white  col-md-2 col-sm-6">
                    <div className='IncaedFirstPart d-flex justify-content-center'>
                        <div className='forCardImage d-flex align-items-center bg-white'>
                            <img className='image' src={cardImage1} alt="shooi" />
                        </div>
                     </div>
                
                    <div class="card-body text-center text-dark">
                    <h6>Quaid E Millah</h6>
                     <h5 class="card-title">IUML</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
                     <a href="#" class="btn btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
                 {/* card2 */}
                 <div className="col-md-1 col-sm-12"></div>
                 <div className="card card4 rounded secondCard col-md-2 col-sm-6">
                <div className='IncaedFirstPart d-flex justify-content-center'>
                    <div className='forCardImage d-flex align-items-center bg-white'>
                        <img className='image' src={cardImage2} alt="shooi" />
                    </div>
                 </div>
            
                <div class="card-body text-center text-dark">
                <h6>KPCC 138</h6>
                 <h5 class="card-title">Kerala Pradesh Congress Committee</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste e</p>
                 <a href="#" class="btn btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
               </div>
             </div>
            <div className="col-md-1"></div>
            {/* card 3 */}
            <div className="card card5 roundedcol-md-1 col-sm-12 greyBackground">
                    <div className='IncaedFirstPart d-flex justify-content-center'>
                        <div className='forCardImage d-flex align-items-center bg-white'>
                            <img className='image' src={cardImage3} alt="shooi" />
                        </div>
                     </div>
                
                    <div class="card-body text-center text-white">
                    <h6>Quaid E Millah</h6>
                     <h5 class="card-title">IUML</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
                     <a href="#" class="btn btn-outline-dark text-white">More<i className="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
            </div>
            </div>

            {/* third section */}
            <div className='SecondCard'>
            <div className='row'>
                <div className="col-md-1 col-sm-12"></div>
                <div className="card card6 rounded col-md-2 col-sm-6 greyBackground">
<div className='IncaedFirstPart d-flex justify-content-center'>
    <div className='forCardImage d-flex align-items-center bg-white'>
        <img className='image' src={cardImage3} alt="shooi" />
    </div>
 </div>

<div class="card-body text-center text-white">
<h6>Quaid E Millah</h6>
 <h5 class="card-title">IUML</h5>
 <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
 <a href="#" class="btn btn-outline-dark text-white">More<i className="fa-solid fa-arrow-right"></i></a>
</div>
</div>
                 {/* card2 */}
                 <div className="col-md-1 col-sm-12"></div>
                 <div className="card card7 rounded bg-white col-md-2 col-sm-6">
                    <div className='IncaedFirstPart d-flex justify-content-center'>
                        <div className='forCardImage d-flex align-items-center bg-white'>
                            <img className='image' src={cardImage1} alt="shooi" />
                        </div>
                     </div>
                
                    <div class="card-body text-center text-dark">
                    <h6>Quaid E Millah</h6>
                     <h5 class="card-title">IUML</h5>
                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum sint veniam minima.</p>
                     <a href="#" class="btn btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
                   </div>
                 </div>
            {/* card 3 */}
            <div className="col- -1 col-sm-12"></div>
                 <div className="card card8 rounded secondCard col-md-2 col-sm-6">
                <div className='IncaedFirstPart d-flex justify-content-center'>
                    <div className='forCardImage d-flex align-items-center bg-white'>
                        <img className='image' src={cardImage2} alt="shooi" />
                    </div>
                 </div>
            
                <div class="card-body text-center text-dark">
                <h6>KPCC 138</h6>
                 <h5 class="card-title">Kerala Pradesh Congress Committee</h5>
                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quidem ipsam, corrupti facere officia iste eum</p>
                 <a href="#" class="btn btn-outline-dark">More<i className="fa-solid fa-arrow-right"></i></a>
               </div>
             </div>
            <div className="col-md-1"></div>
            </div>
           </div>
           
 
       </div>
       </div>
       <div className="div1">
       <div className='container footerFirstPart'>
            <h1></h1>
            <div className='row'>
                <div className='options col-md-5'>
                    <div><button className='btn text-white'>about</button></div>
                    <div><button className='btn text-white'>our mission</button></div>
                    <div><button className='btn text-white'>vision</button></div>
                </div>
                <div className='col-md-5'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur animi aspernatur quasi fuga repellendus asperiores, saepe sunt veniam fugiat minus at odio dignissimos voluptas quos harum? Culpa, rem! Nemo, earuml. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut officiis, ducimus sit distinctio sapiente rem soluta eius voluptatem</p>
                </div>
            </div>
        </div>
       </div>
       </div>

  )
}

export default Section2;
