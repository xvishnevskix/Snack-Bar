import React from "react"
import ContentLoader from "react-content-loader"
import PizzaBlock from "./index";
import {RootState} from "../../redux/store";

const Skeleton = (props: any) => (
    <ContentLoader
        className="PizzaBlock"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="121" cy="121" r="121" />
        <rect x="-1" y="309" rx="4" ry="4" width="255" height="88" />
        <rect x="13" y="267" rx="8" ry="8" width="225" height="25" />
        <rect x="0" y="424" rx="0" ry="0" width="105" height="30" />
        <rect x="136" y="420" rx="19" ry="19" width="130" height="40" />
    </ContentLoader>
)

export default Skeleton