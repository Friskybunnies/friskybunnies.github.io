import React from "react";
import { SRLWrapper } from 'simple-react-lightbox';
import './design.css';
import P1 from './images/P1.png';
import P2 from './images/P2.png';
import P3 from './images/P3.png';
import P4 from './images/P4.png';
import P5 from './images/P5.png';
import P6 from './images/P6.png';
import P7 from './images/P7.png';
import P8 from './images/P8.png';
import P9 from './images/P9.png';
import P10 from './images/P10.png';
import P11 from './images/P11.png';
import P12 from './images/P12.png';
import P13 from './images/P13.png';
import P14 from './images/P14.png';
import P15 from './images/P15.png';
import P16 from './images/P16.png';
import P17 from './images/P17.png';
import O1 from './images/O1.jpg';
import O2 from './images/O2.png';
import O3 from './images/O3.jpg';
import R1 from './images/R1.png';
import R2 from './images/R2.png';
import R3 from './images/R3.png';
import R4 from './images/R4.png';
import R5 from './images/R5.png';
import R6 from './images/R6.png';
import R7 from './images/R7.png';
import R8 from './images/R8.png';
import R9 from './images/R9.png';
import A1 from './images/A1.png';
import PP1 from './images/PP1.png';
import PP2 from './images/PP2.png';
import D1 from './images/D1.png';
import D2 from './images/D2.png';
import C1 from './images/C1.png';
import C2 from './images/C2.png';

const SRLoptions = {
    settings: {
        autoplaySpeed: 30000,
        overlayColor: 'rgba(150, 150, 150, 1)'
    },
    buttons: {
        backgroundColor: 'rgba(150, 150, 150, 1)',
        showAutoplayButton: false,
        showDownloadButton: false,
        showFullscreenButton: false,
        showThumbnailsButton: false,
        iconColor: 'rgba(50, 50, 50, 1)',
        size: '80px',
        iconPadding: '20px'
    },
    thumbnails: {
        showThumbnails: false
    },
    caption: {
        captionColor: '#FFF',
        captionContainerPadding: '0 20% 5% 20%',
        captionFontSize: '1.5rem',
        captionFontWeight: '700'
    }
}


function Design() {
  return (
    <SRLWrapper options={SRLoptions}>
        <div className='allThings'>
            <div className='allp'>
                <div className='phosphorusText'><b>Phosphorus: I developed a comprehensive branding strategy with marketing collateral for a genetic testing startup over a period of two years.</b></div>
                <div className='top'>(Click on images to enlarge and view captions)</div>
                <div className='gridContainer-1'>
                    <div className='imageContainer'>
                        <a className='pic' href={ P1 }>
                            <img src={ P1 } id='p1' alt='3D rendering of patient-facing DNA collection kit. 100% digitally produced using Adobe Illustrator.'/>
                        </a>
                        <div className='caption'>3D rendering of patient-facing DNA collection kit. 100% digitally produced using Adobe Illustrator.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P2 }>
                            <img src={ P2 } id='p2' alt='3D rendering of a secondary concept of patient-facing DNA sample collection kit.'/>
                        </a>
                        <div className='caption'>3D rendering of a secondary concept of patient-facing DNA sample collection kit.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P3 }>
                            <img src={ P3 } id='p3' alt='An explosive cover for our branding guidebook.'/>
                        </a>
                        <div className='caption'>An explosive cover for our branding guidebook.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P4 }>
                            <img src={ P4 } id='p4' alt='Example of iconography devised for D2C branding.'/>
                        </a>
                        <div className='caption'>Example of iconography devised for D2C branding.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P5 }>
                            <img src={ P5 } id='p5' alt='Example of SaaS-focused branding.'/>
                        </a>
                        <div className='caption'>Example of SaaS-focused branding.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P6 }>
                            <img src={ P6 } id='p6' alt='Photoshop and Illustrator used in conjunction to produce product photography.'/>
                        </a>
                        <div className='caption'>Photoshop and Illustrator used in conjunction to produce product photography.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P7 }>
                            <img src={ P7 } id='p7' alt='Patient booklet cover.'/>
                        </a>
                        <div className='caption'>Patient booklet cover.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P8 }>
                            <img src={ P8 } id='p8' alt='Doctor-focused clinical one-pager.'/>
                        </a>
                        <div className='caption'>Doctor-focused clinical one-pager.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P9 }>
                            <img src={ P9 } id='p9' alt='Personnel directory one-pager.'/>
                        </a>
                        <div className='caption'>Personnel directory one-pager.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P10 }>
                            <img src={ P10 } id='p10' alt='Excerpt from product marketing competitive one-pager.'/>
                        </a>
                        <div className='caption'>Excerpt from product marketing competitive one-pager.</div>
                    </div>
                    <div className='imageContainer-special'>
                        <a className='pic' href={ P11 }>
                            <img src={ P11 } id='p11' alt='Trade show pop-up banner design.'/>
                        </a>
                        <div className='caption'>Trade show pop-up banner design.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P12 }>
                            <img src={ P12 } id='p12' alt='Early iterative concepts for new product logos.'/>
                        </a>
                        <div className='caption'>Early iterative concepts for new product logos.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P13 }>
                            <img src={ P13 } id='p13' alt='More early iterative concepts for new product marketing materials.'/>
                        </a>
                        <div className='caption'>More early iterative concepts for new product marketing materials.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P14 }>
                            <img src={ P14 } id='p14' alt='Conceptual, illustrated team plaques.'/>
                        </a>
                        <div className='caption'>Conceptual, illustrated team plaques.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P15 }>
                            <img src={ P15 } id='p15' alt='Excerpt from SaaS product booklet.'/>
                        </a>
                        <div className='caption'>Excerpt from SaaS product booklet.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P16 }>
                            <img src={ P16 } id='p16' alt='Mock-up for patient-facing trifold.'/>
                        </a>
                        <div className='caption'>Mock-up for patient-facing trifold.</div>
                    </div>
                    <div className='imageContainer'>
                        <a className='pic' href={ P17 }>
                            <img src={ P17 } id='p17' alt='Diagnostic products booklet excerpt.'/>
                        </a>
                        <div className='caption'>Diagnostic products booklet excerpt.</div>
                    </div>
                </div>
            </div>
            <div className='allo'>
                <div className='owlsBrew'><b>Owl's Brew: I adapted an existing bottle-sized dieline for a new can product.</b></div>
                <div className='top'>(Click on images to enlarge)</div>
                <div className='gridContainer-2'>
                    <div className='imageContainer-2'>
                        <a href={ O1 }>
                            <img src={ O1 } id='o1' alt=''/>
                        </a>
                        <div className='caption'></div>
                    </div>
                    <div className='imageContainer-2'>
                        <a href={ O2 }>
                            <img src={ O2 } id='o2' alt=''/>
                        </a>
                        <div className='caption'></div>
                    </div>
                    <div className='imageContainer-2'>
                        <a href={ O3 }>
                            <img src={ O3 } id='o3' alt=''/>
                        </a>
                        <div className='caption'></div>
                    </div>
                </div>
            </div>
            <div className='allr'>
                <div className='recombine-t'><b>Recombine: I expanded and polished an existing suite of both print and online marketing materials as well as educational decks for a carrier screening company over a period of 2 years.</b></div>
                <div className='top'>(Click on images to enlarge and view captions)</div>
                <div className='gridContainer-3'>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R1 }>
                            <img src={ R1 } id='r1' alt='Original logo design applied to a new booklet for a branded infertility study.'/>
                        </a>
                        <div className='caption'>Original logo design applied to a new booklet for a branded infertility study.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R2 }>
                            <img src={ R2 } id='r2' alt='Excerpt from Spanish-language marketing booklet for carrier screening test.'/>
                        </a>
                        <div className='caption'>Excerpt from Spanish-language marketing booklet for carrier screening test.</div>
                    </div>
                    <div className='imageContainer-special-2'>
                        <a className='pic' href={ R3 }>
                            <img src={ R3 } id='r3' alt='Spanish-language patient-facing FAQ document.'/>
                        </a>
                        <div className='caption'>Spanish-language patient-facing FAQ document.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R4 }>
                            <img src={ R4 } id='r4' alt='Company positioning one-pager.'/>
                        </a>
                        <div className='caption'>Company positioning one-pager.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R5 }>
                            <img src={ R5 } id='r5' alt='Company story one-pager.'/>
                        </a>
                        <div className='caption'>Company story one-pager.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R6 }>
                            <img src={ R6 } id='r6' alt='Excerpt from genetic technologies educational deck.'/>
                        </a>
                        <div className='caption'>Excerpt from genetic technologies educational deck.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R7 }>
                            <img src={ R7 } id='r7' alt='Excerpt from educational deck about genetic technologies.'/>
                        </a>
                        <div className='caption'>Excerpt from educational deck about genetic technologies.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R8 }>
                            <img src={ R8 } id='r8' alt='Excerpt from educational deck about genetic testing methods.'/>
                        </a>
                        <div className='caption'>Excerpt from educational deck about genetic testing methods.</div>
                    </div>
                    <div className='imageContainer-3'>
                        <a className='pic' href={ R9 }>
                            <img src={ R9 } id='r9' alt='Excerpt from educational deck about carrier screening.'/>
                        </a>
                        <div className='caption'>Excerpt from educational deck about carrier screening.</div>
                    </div>
                </div>
            </div>
            <div className='alla'>
                <div className='aceViu'><b>AceViu: I created the logo and designed several operational materials for a NYC commercial real estate startup.</b></div>
                <div className='top'>(Click on images to enlarge)</div>
                <div className='gridContainer-4'>
                    <div className='imageContainer-4'>
                        <a href={ A1 }>
                            <img src={ A1 } id='a1' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='allpp'>
                <div className='pph'><b>Powering Precision Health: I produced a suite of social graphics for a content calendar leading up to yearly international summit.</b></div>
                <div className='top'>(Click on images to enlarge)</div>
                <div className='gridContainer-5'>
                    <div className='imageContainer-5'>
                        <a href={ PP1 }>
                            <img src={ PP1 } id='pp1' alt=''/>
                        </a>
                    </div>
                    <div className='imageContainer-5'>
                        <a href={ PP2 }>
                            <img src={ PP2 } id='pp2' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='alld'>
                <div className='dittopr'><b>Ditto PR: I artificially standardized the backgrounds for employee photos on the company’s Team page.</b></div>
                <div className='top'>(Click on images to enlarge)</div>
                <div className='gridContainer-6'>
                    <div className='imageContainer-6'>
                        <a href={ D1 }>
                            <img src={ D1 } id='d1' alt=''/>
                        </a>
                    </div>
                    <div className='imageContainer-6'>
                        <a href={ D2 }>
                            <img src={ D2 } id='d2' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='allc'>
                <div className='columbia'><b>Columbia’s School of International and Public Affairs: I created branded materials for use by Open Gov Hub—a client focused on bringing transparency to government activities throughout the world.</b></div>
                <div className='top'>(Click on images to enlarge)</div>
                <div className='gridContainer-7'>
                    <div className='imageContainer-7'>
                        <a href={ C1 }>
                            <img src={ C1 } id='c1' alt=''/>
                        </a>
                    </div>
                    <div className='imageContainer-7'>
                        <a href={ C2 }>
                            <img src={ C2 } id='c2' alt=''/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </SRLWrapper>
  );
}

export default Design;