import { Link } from "react-router-dom"

export default function HomepageEntries() {
    return(
        <div className="homepageentries-container">
            <div className="homepage-posts">
                <article className="eshayarticle">
                    <h3 className="titlecolouring">Are eshays really cringe? Or are they high fashion and camp?</h3>
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
                <article className="hipsterarticle">
                    <h3 className="titlecolouring">Hipsters are the New World Order. What should you do to prepare?</h3>
                    <p>I'm baby salvia artisan DIY post-ironic, meditation migas disrupt whatever cloud bread. Whatever art party dreamcatcher four loko. Cronut blog church-key kale chips bushwick, meggings subway tile squid mustache banjo. Messenger bag waistcoat poke offal actually four loko portland fam microdosing chambray.</p>

                    <p>Gluten-free art party vaporware lomo photo booth keytar live-edge cred tumeric. Taxidermy live-edge sriracha portland organic, iPhone artisan flannel. Prism green juice gastropub leggings health goth man bun chambray tacos street art tousled. Authentic roof party yr cloud bread. Bushwick la croix unicorn vice YOLO taiyaki skateboard jean shorts readymade.</p>
                    <img className="hipsterpic" src="https://images.theconversation.com/files/64701/original/wn26t52p-1416218879.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt="hipster" />
                </article>

            </div>
            <div>
                <aside className="hotposts">
                    <h4 className="titlecolouring">Our Hottest Posts:</h4>

                    <h6 className="minortitlecolouring">Mullet Investigation:</h6>
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