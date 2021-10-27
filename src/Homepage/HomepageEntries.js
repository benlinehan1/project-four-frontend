import { Link } from "react-router-dom"

export default function HomepageEntries() {
    return(
        <div className="homepageentries-container">
            <div className="homepage-posts">
                <article className="eshayarticle">
                    <h3>Are eshays really cringe? Or are they high fashion and camp?</h3>
                            <p>Eythay actuallyway ooklay indkay ofway oodgay otay ebay onesthay
                            . Eythay areway alwaysway inway ikelay Ommytay Ilfigerhay 
                            ichwhay isway unfay andway eshfray. Utbay eythay alsoway ytray 
                            andway abstay ouyay orfay usbay oneymay ichwhay isway indkay 
                            ofway embarrassingway ofway emthay ikelay etgay away objay Iway 
                            amway otnay ouryay ashcay owcay amway Iway ightray adieslay?.
                            </p>
                            <p>I'mway abybay alviasay artisanway IYDAY ostpay-ironicway, 
                            editationmay igasmay isruptday ateverwhay oudclay eadbray. 
                            Ateverwhay artway artypay eamcatcherdray ourfay okolay. Onutcray
                            ogblay urchchay-eykay alekay ipschay ushwickbay, eggingsmay 
                            ubwaysay iletay idsquay ustachemay anjobay. Essengermay agbay 
                            aistcoatway okepay offalway actuallyway ourfay okolay ortlandpay
                            amfay icrodosingmay ambraychay.</p>
                        <img className="eshaypic" src="https://content.api.news/v3/images/bin/d1b5b5d9e83428c5dcaef5e6c760fc23" alt="eshay"></img>
                </article>
                <article>
                    <h3>Homepage post two</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non exercitationem quae repellendus? Illum fugit vitae hic voluptatum tenetur ea laborum, esse at iusto ipsum minima aliquam vel, voluptate architecto placeat.</p>
                </article>

            </div>
            <div>
                <aside className="hotposts">
                    <h4>Our Hottest Posts:</h4>

                    <h6>Mullet Investigation:</h6>
                    <p>Bennethy's Good Ones takes a deep dive into whether or not mullets are coming back into style. Is this a new era for hair? Or is it a desolate time to be a hairdresser?</p>
                    <Link to="/article/2"><span><p>More...</p></span></Link>
                    <img className="asidepics" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/miley-cyrus-short-mullet-1600430107.jpg" alt="mullet" />

                    <br></br>

                    <h6 className="newheading">Balenciaga's Newest Collection:</h6>
                    <p>We analyse Balenciaga's newest runway and give opinions on their newest ready to wear collection. Is this one of their most iconic and innovative runways yet? Click to see more.</p>
                    <Link to="/runway/2"><span><p>More...</p></span></Link>
                    <img className="asidepics" src="https://wwd.com/wp-content/uploads/2021/10/balenciaga-ss22-GG.jpg" alt="balenciaga"></img>
                </aside>
            </div>
        </div>
        
    )
}