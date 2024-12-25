import Link from "next/link";

export default function Footer(){
    return (
        <>
        <footer>

        <div className="footer p-5 border-t-2 leading-10  border-gray-300">
            <div className="w-[14rem]  ">
                <h2 className="font-bold text-[2rem]">Funiro.</h2>
                <p className="leading-none">400 University Drive Suite 200 Coral Gables,
                FL 33134 USA</p>
            </div>


            <div>
                <h4>Navbar</h4>
                <ul>
                <li>   
                <Link href="/">Home</Link>
                </li>
                <Link href="/shop">Shop</Link>
                <li>
                <Link href="/about">About</Link>
                </li>
                <li>
                <Link href="/contact">Contact</Link>
                </li>
                  
                </ul>
            </div>


            <div>
                <h4>Help</h4>
                <ul>
                    <li>Payment Option</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div>
                <h4>Newsletter</h4>
            <input type="text" placeholder="Your Email" />
            <button type="submit" className="font-bold">SUBSCRIBE</button>
            </div>
            
        </div>
        <div  className="para">

            <hr />
            <p>2023 furino. All rights reverved</p>
        </div>
        </footer>
        </>
    )

}